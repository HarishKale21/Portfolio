document.addEventListener('DOMContentLoaded', () => {

    // Mobile Navbar Toggle
    const navToggle = document.querySelector('.nav-toggle');
    const navLinks = document.querySelector('.nav-links');

    navToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        navToggle.classList.toggle('active');
    });

    // Close mobile nav after a link is clicked
    document.querySelectorAll('.nav-links .nav-link').forEach(link => {
        link.addEventListener('click', () => {
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                navToggle.classList.remove('active');
            }
        });
    });
    
    // Change navbar style on scroll
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Highlight active nav link on scroll
    const sections = document.querySelectorAll('section[id]');
    const navLi = document.querySelectorAll('.nav-links .nav-link');

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (pageYOffset >= sectionTop - 150) { // Adjust offset as needed
                current = section.getAttribute('id');
            }
        });

        navLi.forEach(a => {
            a.classList.remove('active-nav');
            if (a.getAttribute('href').substring(1) === current) {
                a.classList.add('active-nav');
            }
        });
    });

    // Fade-in sections on scroll
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1 // Trigger when 10% of the element is visible
    });

    document.querySelectorAll('.fade-in').forEach(section => {
        observer.observe(section);
    });

});
