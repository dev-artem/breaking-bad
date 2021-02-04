import { GET_EPISODES } from '../types';
import getAllEpisodes from '../../services/episodes-service';

const getEpisodesList = (item) => {
    return {
        type: GET_EPISODES,
        payload: item,
    };
};

const getEpisodes = () => {
    return async (dispatch) => {
        const data = await getAllEpisodes();
        dispatch(getEpisodesList(data));
    };
};

export default getEpisodes;
