import axios from 'axios';

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/',
    params: {
        api_key: '79ccdf77b523570234ba097621b1c529',
        language: 'pt-BR',
        page: 1
    }

})

export default api