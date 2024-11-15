// useAuthStatus.js
import axios from 'axios';
import { useState, useEffect } from 'react';

const useAuthStatus = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        axios.get('/api/check-session', { withCredentials: true }) // withCredentials si usas cookies
            .then(response => {
                if (response.status === 200) {
                    setIsAuthenticated(true);
                }
            })
            .catch(error => {
                if (error.response && error.response.status === 401) {
                    setIsAuthenticated(false);
                }
            });
    }, []);

    return isAuthenticated;
};

export default useAuthStatus;