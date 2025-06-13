import React from 'react';
import styles from '../styles/UserModal.module.css';

interface UserModalProps {
    user: {
        name: string;
        email: string;
        address: {
            street: string;
            city: string;
            zipcode: string;
        };
        phone: string;
        website: string;
        company: {
            name: string;
        };
        geo: {
            lat: string;
            lng: string;
        };
    } | null;
    onClose: () => void;
}

const UserModal: React.FC<UserModalProps> = ({ user, onClose }) => {
    if (!user) return null;

    const { name, email, address, phone, website, company, geo } = user;

    return (
        <div className={styles.modalOverlay}>
            <div className={styles.modalContent}>
                <button className={styles.closeButton} onClick={onClose}>×</button>
                <h2>{name}</h2>
                <p>Email: {email}</p>
                <p>Address: {address.street}, {address.city}, {address.zipcode}</p>
                <p>Phone: {phone}</p>
                <p>Website: <a href={`http://${website}`} target="_blank" rel="noopener noreferrer">{website}</a></p>
                <p>Company: {company.name}</p>
                <p>
                    Location: 
                    <a 
                        href={`https://www.google.com/maps?q=${geo.lat},${geo.lng}`} 
                        target="_blank" 
                        rel="noopener noreferrer"
                    >
                        View on Map
                    </a>
                </p>
            </div>
        </div>
    );
};

export default UserModal;