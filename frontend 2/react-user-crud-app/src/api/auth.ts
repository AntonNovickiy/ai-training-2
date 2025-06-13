import axios from 'axios';

const API_URL = 'http://localhost:8080/api/auth';

export const register = async (username: string, email: string, password: string) => {
    const res = await axios.post(`${API_URL}/register`, { username, email, password });
    return res.data;
};

export const login = async (email: string, password: string) => {
    const res = await axios.post(`${API_URL}/login`, { email, password });
    return res.data;
};
