import { useState, useEffect } from 'react';
import { throttle } from '../utils/performance';

export const useScrollPosition = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isScrollingUp, setIsScrollingUp] = useState(true);
  const [lastScrollTop, setLastScrollTop] = useState(0);

  useEffect(() => {
    const handleScroll = throttle(() => {
      const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;
      
      setIsScrollingUp(currentScrollTop < lastScrollTop);
      setLastScrollTop(currentScrollTop);
      setScrollPosition(currentScrollTop);
    }, 100);

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollTop]);

  return { scrollPosition, isScrollingUp };
};