document.addEventListener('DOMContentLoaded', function () {
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');

    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function () {
            navMenu.classList.toggle('show');
        });
    }

    // Close the navigation menu when a link is clicked
    const navLinks = document.querySelectorAll('.nav__link');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('show');
        });
    });

    // Scroll sections active link
    const sections = document.querySelectorAll('section[id]');

    function scrollActive() {
        const scrollY = window.pageYOffset;

        sections.forEach(current => {
            const sectionHeight = current.offsetHeight;
            const sectionTop = current.offsetTop - 50;
            sectionId = current.getAttribute('id');

            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active');
            } else {
                document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active');
            }
        });
    }

    window.addEventListener('scroll', scrollActive);

    // Initialize Scroll Reveal Animation
    const sr = ScrollReveal({
        origin: 'top',
        distance: '60px',
        duration: 2000,
        delay: 200,
    });

    sr.reveal('.home__data, .about__img, .skills__subtitle, .skills__text, .Resume section', { interval: 600 });
    sr.reveal('.home__img, .about__subtitle, .about__text, .skills__img, .section-title', { delay: 400 });
    sr.reveal('.home__social-icon, .Resume__img', { interval: 200 });
    sr.reveal('.skills__data, .work__img, .contact__input', { interval: 200 });
});
