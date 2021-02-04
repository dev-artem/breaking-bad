import axios from 'axios';

const _URL = 'https://www.breakingbadapi.com/api';

const getAllEpisodes = async () => {
    return await axios.get(`${_URL}/episodes`).then((res) => res.data);
};

export default getAllEpisodes;
