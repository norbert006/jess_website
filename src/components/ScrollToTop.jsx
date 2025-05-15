import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
    const { pathname } = useLocation();
    const previousPath = useRef(null);

    useEffect(() => {
        if (pathname.startsWith('/services')) {
            // Scroll to top for service pages
            window.scrollTo(0, 0);
        } else if (pathname === '/' && previousPath.current?.startsWith('/services')) {
            // Scroll to header only if coming from a service page
            const headerEl = document.getElementById('header');
            if (headerEl) {
                headerEl.scrollIntoView({ behavior: 'smooth' });
            }
        }

        // Update previousPath after effect runs
        previousPath.current = pathname;
    }, [pathname]);
    return null;
};

export default ScrollToTop;
