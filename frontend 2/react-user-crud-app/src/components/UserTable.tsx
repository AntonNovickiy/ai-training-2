import React from 'react';
import { User } from '../types/user';
import DeleteButton from './DeleteButton';
import MapLink from './MapLink';
import styles from '../styles/UserTable.module.css';

interface UserTableProps {
    users: User[];
    onUserClick: (user: User) => void;
    onDeleteUser: (id: number) => void;
}

const UserTable: React.FC<UserTableProps> = ({ users, onUserClick, onDeleteUser }) => {
    return (
        <>
            <div className="table-title">User Management</div>
            <div className="table-subtitle">Manage your users below</div>
            <table className={styles.userTable}>
                <thead>
                    <tr>
                        <th>Name / Email</th>
                        <th>Address</th>
                        <th>Phone</th>
                        <th>Website</th>
                        <th>Company Name</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(user => (
                        <tr key={user.id} onClick={() => onUserClick(user)}>
                            <td data-label="Name / Email">{user.name} / {user.email}</td>
                            <td data-label="Address">{user.address.street}, {user.address.city}</td>
                            <td data-label="Phone">{user.phone}</td>
                            <td data-label="Website"><a href={`http://${user.website}`} target="_blank" rel="noopener noreferrer">{user.website}</a></td>
                            <td data-label="Company Name">{user.company.name}</td>
                            <td data-label="Actions">
                                <button
                                    className={styles['action-btn']}
                                    onClick={e => { e.stopPropagation(); onDeleteUser(user.id); }}
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
};

export default UserTable;