import axios from 'axios';
const KEY = 'AIzaSyBDf98fvuKEixOQHyBUaoiFYpGn84bTuN0'; // mention your youtube API key here

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3/',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
})