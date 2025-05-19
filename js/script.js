/**
 * PJ Cui LLC - Agritrade Consulting
 * Main JavaScript File
 */

document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navMenu = document.querySelector('.nav-menu');

    if (mobileMenuBtn && navMenu) {
        mobileMenuBtn.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            
            // Change hamburger to X
            const spans = this.querySelectorAll('span');
            if (spans.length === 3) {
                spans[0].classList.toggle('rotate-down');
                spans[1].classList.toggle('fade-out');
                spans[2].classList.toggle('rotate-up');
            }
        });
    }

    // Close mobile menu when clicking outside
    document.addEventListener('click', function(event) {
        if (navMenu && navMenu.classList.contains('active')) {
            if (!navMenu.contains(event.target) && !mobileMenuBtn.contains(event.target)) {
                navMenu.classList.remove('active');
                
                // Reset hamburger icon
                const spans = mobileMenuBtn.querySelectorAll('span');
                if (spans.length === 3) {
                    spans[0].classList.remove('rotate-down');
                    spans[1].classList.remove('fade-out');
                    spans[2].classList.remove('rotate-up');
                }
            }
        }
    });

    // Smooth scrolling for internal links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });

                // Close mobile menu if open
                if (navMenu && navMenu.classList.contains('active')) {
                    navMenu.classList.remove('active');
                    
                    // Reset hamburger icon
                    const spans = mobileMenuBtn.querySelectorAll('span');
                    if (spans.length === 3) {
                        spans[0].classList.remove('rotate-down');
                        spans[1].classList.remove('fade-out');
                        spans[2].classList.remove('rotate-up');
                    }
                }
            }
        });
    });

    // Add active class to nav links based on current page
    const currentLocation = window.location.pathname;
    const navLinks = document.querySelectorAll('.nav-menu a');
    const currentPage = currentLocation.split('/').pop();

    navLinks.forEach(link => {
        const linkPage = link.getAttribute('href');
        if (linkPage === currentPage || (currentPage === '' && linkPage === 'index.html')) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });

    // Add animation to service cards on scroll
    const serviceCards = document.querySelectorAll('.service-card');
    if (serviceCards.length > 0) {
        const animateOnScroll = function() {
            serviceCards.forEach(card => {
                const cardPosition = card.getBoundingClientRect().top;
                const screenPosition = window.innerHeight / 1.2;
                
                if (cardPosition < screenPosition) {
                    card.classList.add('animate');
                }
            });
        };
        
        // Initial check
        animateOnScroll();
        
        // Check on scroll
        window.addEventListener('scroll', animateOnScroll);
    }

    // Add CSS for mobile menu animations
    const style = document.createElement('style');
    style.textContent = `
        .mobile-menu-btn span {
            transition: all 0.3s ease-in-out;
        }
        
        .rotate-down {
            transform: translateY(8px) rotate(45deg);
        }
        
        .fade-out {
            opacity: 0;
        }
        
        .rotate-up {
            transform: translateY(-8px) rotate(-45deg);
        }
        
        .service-card {
            opacity: 0;
            transform: translateY(20px);
            transition: opacity 0.5s ease, transform 0.5s ease;
        }
        
        .service-card.animate {
            opacity: 1;
            transform: translateY(0);
        }
    `;
    document.head.appendChild(style);
});
