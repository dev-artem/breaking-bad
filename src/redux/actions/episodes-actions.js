const getEpisodesList = (item) => {
    return {
        type: 'GET_EPISODES',
        payload: item,
    };
};

export default getEpisodesList;
