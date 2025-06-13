export const formatAddress = (address: { street: string; suite: string; city: string; zipcode: string }) => {
    return `${address.street}, ${address.suite}, ${address.city}, ${address.zipcode}`;
};

export const formatPhoneNumber = (phone: string) => {
    // Remove non-digits, then format if 10+ digits
    const digits = phone.replace(/\D/g, '');
    if (digits.length === 10) {
        return digits.replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2-$3');
    }
    return phone;
};

export const formatWebsite = (website: string) => {
    return website.startsWith('http') ? website : `http://${website}`;
};