import React from 'react';

interface DeleteButtonProps {
    onDelete: () => void;
}

const DeleteButton: React.FC<DeleteButtonProps> = ({ onDelete }) => {
    return (
        <button
            className="delete-button"
            onClick={e => {
                e.stopPropagation();
                onDelete();
            }}
            style={{
                background: '#ef4444',
                color: '#fff',
                border: 'none',
                borderRadius: '6px',
                padding: '6px 14px',
                fontWeight: 500,
                cursor: 'pointer',
                transition: 'background 0.2s',
                boxShadow: '0 1px 4px rgba(239,68,68,0.08)'
            }}
            onMouseOver={e => (e.currentTarget.style.background = '#dc2626')}
            onMouseOut={e => (e.currentTarget.style.background = '#ef4444')}
        >
            Delete
        </button>
    );
};

export default DeleteButton;