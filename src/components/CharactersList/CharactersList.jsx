import React from 'react'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import actions from '../../redux/actions'
import Character from '../Character';
import characterService from '../../services/character-service'

const CharactersList = ({characters, getList}) => {

    React.useEffect(() => {
        const service = new characterService();
        service.getAllCharacters()
            .then(res => {
                getList(res)
            })
    }, [])

    return (
        <div>
            {
                characters.map(x => <Character key={x.char_id} character={x}/>)
            }
        </div>
    )
}

const mapStateToProps = ({charactersReducer}) => {
    return {
        characters: charactersReducer.characters
    }
}

const mapDispatchToProps = (dispatch) => {
    const {getCharactersList} = bindActionCreators(actions, dispatch);
    return {
        getList: getCharactersList
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(CharactersList);