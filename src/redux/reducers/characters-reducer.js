export const initialState = {
    characters: [],
};

export const charactersReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_CHARACTERS': {
            return {
                characters: action.payload,
            };
        }
        default:
            return state;
    }
};
