import React, { useState } from 'react';
import { register } from '../api/auth';

interface Props {
    onRegister: () => void;
}

const RegisterForm: React.FC<Props> = ({ onRegister }) => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await register(username, email, password);
            setSuccess(true);
            setError('');
            onRegister();
        } catch {
            setError('Registration failed');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="auth-form">
            <h2>Register</h2>
            {error && <div className="error">{error}</div>}
            {success && <div className="success">Registration successful!</div>}
            <input placeholder="Username" value={username} onChange={e => setUsername(e.target.value)} required />
            <input placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} required />
            <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} required />
            <button type="submit">Register</button>
        </form>
    );
};

export default RegisterForm;
