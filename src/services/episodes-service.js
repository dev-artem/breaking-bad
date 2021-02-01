import axios from 'axios';

export default class episodesService {
    URL = 'https://www.breakingbadapi.com/api/';
    getAllEpisodes() {
        return axios.get(`${this.URL}episodes`).then((res) => res.data);
    }
}
