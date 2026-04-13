/* ==========================================================================
   js/main.js
   Core JavaScript for Navigation and Utilities
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. MOBILE HAMBURGER MENU ---
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (mobileMenuToggle && navLinks) {
        mobileMenuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('is-open');
            mobileMenuToggle.classList.toggle('is-active');
            const isExpanded = mobileMenuToggle.getAttribute('aria-expanded') === 'true';
            mobileMenuToggle.setAttribute('aria-expanded', !isExpanded);
        });
    }

    // --- 2. TOUCH-FRIENDLY DROPDOWNS ---
    const dropdownParents = document.querySelectorAll('.has-dropdown > a');
    dropdownParents.forEach(parentLink => {
        parentLink.addEventListener('click', function(e) {
            if (window.innerWidth <= 768) {
                e.preventDefault(); 
                const dropdownMenu = this.nextElementSibling;
                document.querySelectorAll('.dropdown.is-open').forEach(menu => {
                    if (menu !== dropdownMenu) {
                        menu.classList.remove('is-open');
                    }
                });
                dropdownMenu.classList.toggle('is-open');
            }
        });
    });

    // --- 3. AUTO-UPDATING COPYRIGHT YEAR ---
    const yearElement = document.getElementById('current-year');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }

});