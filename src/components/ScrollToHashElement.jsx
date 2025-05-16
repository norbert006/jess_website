import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToHashElement = () => {
    const location = useLocation();
    const { pathname } = useLocation();
    const previousPath = useRef(null);

    console.log(previousPath.current?.startsWith('/#contact_us'))
    useEffect(() => {
        const navEntries = performance.getEntriesByType("navigation");
        if (navEntries.length > 0 && navEntries[0].type === "reload") {
            return;
        } else {
            if (location.hash === "#contact_us") {
                const timeout = setTimeout(() => {
                    const element = document.querySelector(location.hash);
                    if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                    }
                }, 250);

                return () => clearTimeout(timeout);
            }
        }

    }, [location]);

};

export default ScrollToHashElement;
