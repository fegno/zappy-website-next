import axios from 'axios';
import {CONFIG} from '../config/urls'

export const http = axios.create({
    baseURL: CONFIG.API_BASE_URL,
    timeout: 10000,
});

