import axios from 'axios';

export default class characterService {
    URL = 'https://www.breakingbadapi.com/api/';
    getAllCharacters() {
        return axios.get(`${this.URL}characters`).then((res) => res.data);
    }
}
