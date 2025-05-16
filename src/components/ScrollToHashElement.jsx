import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToHashElement = () => {
    const location = useLocation();
    console.log("location.hash = ", location.hash)
    useEffect(() => {
        if (location.hash === "#contact_us") {
            const timeout = setTimeout(() => {
                const element = document.querySelector(location.hash);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                }
            }, 250);

            return () => clearTimeout(timeout);
        }
    }, [location]);

};

export default ScrollToHashElement;
