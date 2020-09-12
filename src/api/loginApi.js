import axios from 'axios';

export function getOktaRedirectUrl() {
    return axios.get('/api/v1/auth');
}