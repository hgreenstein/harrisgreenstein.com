const handleNavigation = (e) => {
        e.preventDefault();
        const targetId = e.target.getAttribute('href').slice(1);
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
            let isScrolling;

            // Function to run after scroll is complete
            const afterScroll = () => {
                window.scrollBy({
                    top: -60,
                    left: 0,
                    behavior: 'smooth',
                });
                window.removeEventListener('scroll', scrollStopListener);
            };

            // Listener to check if scrolling has stopped
            const scrollStopListener = () => {
                window.clearTimeout(isScrolling);
                isScrolling = setTimeout(afterScroll, 66); // Adjust the timeout as needed
            };

            // Attach the scroll event listener
            window.addEventListener('scroll', scrollStopListener);

            // Start the smooth scroll
            targetSection.scrollIntoView({ behavior: 'smooth' });
        }
    };
export default handleNavigation;
