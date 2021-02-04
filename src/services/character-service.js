import axios from 'axios';

const _URL = 'https://www.breakingbadapi.com/api';

const getAllCharacters = async () => {
    return await axios.get(`${_URL}/characters`).then((res) => res.data);
};

export default getAllCharacters;
