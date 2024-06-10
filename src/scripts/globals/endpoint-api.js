import CONFIG from './config.js';

const API_ENDPOINT = {
    LIST: `${CONFIG.BASE_URL}/list`,
    DETAIL: (id) => `${CONFIG.BASE_URL}/detail/${id}`,
    LIKE: (id) => `${CONFIG.BASE_URL}/like/${id}`,
    POST_REVIEW: `${CONFIG.BASE_URL}/review`,
};

export default API_ENDPOINT;
