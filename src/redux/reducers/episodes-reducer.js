import { GET_EPISODES } from '../types';

export const initialState = {
    episodes: [],
};

export const episodesReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_EPISODES: {
            return {
                episodes: action.payload,
            };
        }
        default:
            return state;
    }
};
