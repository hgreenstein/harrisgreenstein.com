import { useEffect } from 'react';

const useAnimateOnObserve = (elementsRef, animationClass, options = {}) => {
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add(animationClass);
                    }
                });
            },
            {
                rootMargin: options.rootMargin || '0px',
                threshold: options.threshold || 0.1,
            }
        );

        const elements = elementsRef.current;
        if (elements) {
            Array.isArray(elements) ? elements.forEach(element => observer.observe(element)) : observer.observe(elements);
        }

        return () => {
            if (elements) {
                Array.isArray(elements) ? elements.forEach(element => observer.unobserve(element)) : observer.unobserve(elements);
            }
        };
    }, [elementsRef, animationClass, options]);
};

export default useAnimateOnObserve;
