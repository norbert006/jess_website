import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        if (pathname.startsWith('/services')) {
            // Scroll to top for service pages
            window.scrollTo(0, 0);
        } else if (pathname === '/') {
            // Scroll to header for homepage
            const headerEl = document.getElementById('header');
            if (headerEl) {
                headerEl.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }, [pathname]);

    return null;
};

export default ScrollToTop;
