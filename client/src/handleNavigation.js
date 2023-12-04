const handleNavigation = (e, alignToTop = true) => {
    e.preventDefault();
    const targetId = e.target.getAttribute('href').slice(1);
    const targetSection = document.getElementById(targetId);

    if (targetSection) {
        // Get the top position of the target section
        const targetOffset =
            targetSection.getBoundingClientRect().top + window.scrollY;

        // Select the navbar element and get its current height
        const navbar = document.querySelector('.navbar');

        const navbarHeight = navbar.offsetHeight;

        // Adjust the offset position by deducting the navbar's height
        const offsetPosition = alignToTop
            ? targetOffset - navbarHeight
            : targetOffset -
              window.innerHeight / 2 +
              targetSection.offsetHeight / 2;
        console.log(offsetPosition);

        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth',
        });
    }
};

export default handleNavigation;
