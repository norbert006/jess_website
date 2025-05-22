import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToHashElement = () => {
    const location = useLocation();

    useEffect(() => {
        if (!location.hash) return;

        const timeout = setTimeout(() => {
            const element = document.querySelector(location.hash);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }, 250); // Allow time for DOM to render

        return () => clearTimeout(timeout);
    }, [location]);

    return null;
};

export default ScrollToHashElement;
