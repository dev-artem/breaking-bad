import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import actions from '../../redux/actions';
import CharacterCard from '../CharacterCard';
import characterService from '../../services/character-service';
import Spinner from '../UI/Spinner';

import './characters.scss';
const Characters = ({ characters, getList }) => {
    const [isLoading, setIsLoading] = React.useState(true);

    React.useEffect(() => {
        const service = new characterService();
        service.getAllCharacters().then((res) => {
            getList(res);
            setIsLoading(false);
        });
    }, [getList]);

    const content = isLoading ? (
        <Spinner />
    ) : (
        characters.map((item) => (
                <CharacterCard key={item.char_id} character={item} />
        ))
    );

    return (
        <section className="characters">
            <div className="container">
                <div className="characters__list">{content}</div>
            </div>
        </section>
    );

};

const mapStateToProps = ({ charactersReducer }) => {
    return {
        characters: charactersReducer.characters,
    };
};

const mapDispatchToProps = (dispatch) => {
    const { getCharactersList } = bindActionCreators(actions, dispatch);
    return {
        getList: getCharactersList,
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Characters);
