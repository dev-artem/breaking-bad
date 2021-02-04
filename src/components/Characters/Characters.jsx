import React, {useState, useEffect} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import actions from '../../redux/actions';
import CharacterCard from '../CharacterCard';
import Spinner from '../UI/Spinner';
import Search from '../UI/Search';

import './characters.scss';
const Characters = ({ characters, getCharacters }) => {
    const [isLoading, setIsLoading] = useState(true);
    const [filter, setFilter] = useState('');
    const [charactersList, setCharactersList] = useState(characters);

    useEffect(() => {
        getCharacters().then(() => setIsLoading(false));
    }, [getCharacters]);

    useEffect(() => {
        const filterCharacters = (filter) => {
            const re = new RegExp('^' + filter, 'i');
            return characters.filter(item => item.name.match(re))
        }
        setCharactersList(filterCharacters(filter))
    }, [filter, characters])

    const content = isLoading ? (
        <Spinner />
    ) : (
        charactersList.length === 0
        ? "No matches"
        : charactersList.map((item) => (
            <CharacterCard key={item.char_id} character={item} />
    ))
    );

    return (
        <section className="characters">
            <div className="container">
                <div className="characters__inner">
                    <Search setFilter={setFilter} />
                    <div className="characters__list">{content}</div>
                </div>
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
    const { getCharacters } = bindActionCreators(actions, dispatch);
    return {
        getCharacters,
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Characters);
