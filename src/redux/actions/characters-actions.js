const getCharactersList = (item) => {
    return {
        type: 'GET_CHARACTERS',
        payload: item,
    };
};

export default getCharactersList;
