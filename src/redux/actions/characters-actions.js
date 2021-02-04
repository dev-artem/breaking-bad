import { GET_CHARACTERS } from '../types';
import getAllCharacters from '../../services/character-service';

const getCharactersList = (item) => {
    return {
        type: GET_CHARACTERS,
        payload: item,
    };
};

// const getCharacters = async (dispatch) => {
//     const data = await getAllCharacters();
//     dispatch(getCharactersList(data));
// };

const getCharacters = () => {
    return async (dispatch) => {
        const data = await getAllCharacters();
        dispatch(getCharactersList(data));
    };
};

export default getCharacters;
