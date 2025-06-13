import React, { useEffect, useState } from 'react';
import UserTable from './UserTable';
import { fetchUsers } from '../api/users';
import UserModal from './UserModal';
import { User } from '../types/user';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';
import styles from '../styles/App.module.css';

const App: React.FC = () => {
    const [users, setUsers] = useState<User[]>([]);
    const [selectedUser, setSelectedUser] = useState<User | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [token, setToken] = useState<string | null>(localStorage.getItem('token'));
    const [showRegister, setShowRegister] = useState(false);

    useEffect(() => {
        if (token) {
            const loadUsers = async () => {
                const fetchedUsers = await fetchUsers(token);
                setUsers(fetchedUsers);
            };
            loadUsers();
        }
    }, [token]);

    const handleUserClick = (user: User) => {
        setSelectedUser(user);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setSelectedUser(null);
    };

    const handleDeleteUser = (id: number) => {
        setUsers(users.filter(user => user.id !== id));
    };

    const handleLogin = (jwt: string) => {
        setToken(jwt);
        localStorage.setItem('token', jwt);
    };

    const handleLogout = () => {
        setToken(null);
        localStorage.removeItem('token');
    };

    // Helper to convert User to UserModalProps
    const userToUserModalProps = (user: User) => ({
        name: user.name,
        email: user.email,
        address: {
            street: user.address.street,
            city: user.address.city,
            zipcode: user.address.zipcode,
        },
        phone: user.phone,
        website: user.website,
        company: {
            name: user.company.name,
        },
        geo: {
            lat: user.address.geo.lat,
            lng: user.address.geo.lng,
        },
    });

    if (!token) {
        return (
            <div className={styles['auth-background']}>
                <div className={styles['auth-card']}>
                    {showRegister ? (
                        <>
                            <RegisterForm onRegister={() => setShowRegister(false)} />
                            <button className={styles['switch-link']} onClick={() => setShowRegister(false)}>Back to Login</button>
                        </>
                    ) : (
                        <>
                            <LoginForm onLogin={handleLogin} />
                            <button className={styles['switch-link']} onClick={() => setShowRegister(true)}>Register</button>
                        </>
                    )}
                </div>
            </div>
        );
    }

    return (
        <div className="app">
            <header>
                <h1>User Management</h1>
                <button onClick={handleLogout}>Logout</button>
            </header>
            <UserTable users={users} onUserClick={handleUserClick} onDeleteUser={handleDeleteUser} />
            {isModalOpen && selectedUser && (
                <UserModal user={userToUserModalProps(selectedUser)} onClose={handleCloseModal} />
            )}
        </div>
    );
};

export default App;