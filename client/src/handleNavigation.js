const handleNavigation = (e, alignToTop = true) => {
    e.preventDefault();
    const targetId = e.target.getAttribute('href').slice(1);
    const currentPath = window.location.pathname;

    if (currentPath !== '/') {
        // Update the URL with the hash of the target section
        window.location.href = '/#' + targetId;
    } else {
        // If already on the root, update only the hash
        window.location.hash = targetId;
        // Scroll immediately to the target section
        scrollToTarget(targetId, alignToTop);
    }
};

const scrollToTarget = (targetId, alignToTop) => {
    const targetSection = document.getElementById(targetId);

    if (targetSection) {
        const targetOffset = targetSection.getBoundingClientRect().top + window.scrollY;
        const navbar = document.querySelector('.navbar');
        const navbarHeight = navbar.offsetHeight;
        const offsetPosition = alignToTop
            ? targetOffset - navbarHeight
            : targetOffset - window.innerHeight / 2 + targetSection.offsetHeight / 2;

        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth',
        });
    }
};

// Global function to handle scrolling on page load
window.onload = () => {
    const hash = window.location.hash.slice(1);
    document.querySelector('.ring').style.display = 'none';
    if (hash) {
        scrollToTarget(hash, true);
    }
};

export default handleNavigation;

