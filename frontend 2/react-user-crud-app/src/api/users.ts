import axios from 'axios';
import { User } from '../types/user';

const API_URL = 'http://localhost:8080/api/users';

export const fetchUsers = async (token?: string): Promise<User[]> => {
    const response = await axios.get<User[]>(API_URL, token ? { headers: { Authorization: `Bearer ${token}` } } : undefined);
    return response.data;
};

export const deleteUser = async (id: number, token?: string): Promise<void> => {
    await axios.delete(`${API_URL}/${id}`, token ? { headers: { Authorization: `Bearer ${token}` } } : undefined);
};

export const createUser = async (user: User, token?: string): Promise<User> => {
    const response = await axios.post<User>(API_URL, user, token ? { headers: { Authorization: `Bearer ${token}` } } : undefined);
    return response.data;
};