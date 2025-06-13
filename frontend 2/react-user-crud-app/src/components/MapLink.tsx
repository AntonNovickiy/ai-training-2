import React from 'react';

interface MapLinkProps {
    lat: number;
    lng: number;
}

const MapLink: React.FC<MapLinkProps> = ({ lat, lng }) => {
    const mapUrl = `https://www.google.com/maps/@${lat},${lng},15z`;

    return (
        <a href={mapUrl} target="_blank" rel="noopener noreferrer">
            View on Map
        </a>
    );
};

export default MapLink;