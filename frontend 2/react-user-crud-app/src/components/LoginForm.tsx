import React, { useState } from 'react';
import { login } from '../api/auth';
import styles from '../styles/App.module.css';

interface Props {
    onLogin: (token: string) => void;
}

const LoginForm: React.FC<Props> = ({ onLogin }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const data = await login(email, password);
            onLogin(data.token);
        } catch {
            setError('Invalid credentials');
        }
    };

    return (
        <form onSubmit={handleSubmit} className={styles['auth-form']}>
            <h2>Login</h2>
            {error && <div className={styles.error}>{error}</div>}
            <input placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} required />
            <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} required />
            <button type="submit">LOGIN</button>
            <div className="auth-links">
                <span style={{ color: '#888', fontSize: '0.97rem' }}>Forgot password?</span>
            </div>
            <div className={styles['social-row']}>
                <button type="button" className={styles['social-btn']} title="Login with Facebook">
                    <span role="img" aria-label="facebook">🔵</span>
                </button>
                <button type="button" className={styles['social-btn']} title="Login with Twitter">
                    <span role="img" aria-label="twitter">🔷</span>
                </button>
                <button type="button" className={styles['social-btn']} title="Login with Google">
                    <span role="img" aria-label="google">🔴</span>
                </button>
            </div>
        </form>
    );
};

export default LoginForm;
