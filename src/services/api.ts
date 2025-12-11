const API_URL = import.meta.env.VITE_API_URL || '/api';

export const api = {
    login: async (credentials: any) => {
        const res = await fetch(`${API_URL}/admin/login`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(credentials),
        });
        if (!res.ok) throw new Error('Login failed');
        return res.json();
    },

    getPrices: async (token: string) => {
        const res = await fetch(`${API_URL}/admin/prices`, {
            headers: { Authorization: `Bearer ${token}` },
        });
        if (!res.ok) throw new Error('Failed to fetch prices');
        return res.json();
    },

    updatePrices: async (token: string, data: any) => {
        const res = await fetch(`${API_URL}/admin/prices`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify(data),
        });
        if (!res.ok) throw new Error('Failed to update prices');
        return res.json();
    },

    getAvailability: async (start?: string, end?: string) => {
        const params = new URLSearchParams();
        if (start) params.append('start', start);
        if (end) params.append('end', end);

        const res = await fetch(`${API_URL}/availability?${params.toString()}`);
        if (!res.ok) throw new Error('Failed to fetch availability');
        return res.json();
    }
};
