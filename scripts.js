document.addEventListener('DOMContentLoaded', function () {
    // Inicializar el carrusel
    $('.carousel').carousel({
        interval: 6000,
        pause: 'hover'
    });

    // Animación de entrada para las imágenes del carrusel
    $('.carousel').on('slide.bs.carousel', function (e) {
        const nextH3 = $(e.relatedTarget).find('h3');
        const nextP = $(e.relatedTarget).find('p');
        const nextBtn = $(e.relatedTarget).find('.btn');
        
        nextH3.css('opacity', '0').css('transform', 'translateY(-20px)');
        nextP.css('opacity', '0').css('transform', 'translateY(-20px)');
        nextBtn.css('opacity', '0').css('transform', 'translateY(20px)');
        
        setTimeout(() => {
            nextH3.css('opacity', '1').css('transform', 'translateY(0)');
            nextP.css('opacity', '1').css('transform', 'translateY(0)');
            nextBtn.css('opacity', '1').css('transform', 'translateY(0)');
        }, 600);
    });

    // Navbar scroll effect
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.style.padding = '0.5rem 2rem';
            navbar.style.backgroundColor = 'rgba(0, 123, 255, 0.95)';
        } else {
            navbar.style.padding = '1rem 2rem';
            navbar.style.backgroundColor = '#007bff';
        }
    });

    // Efectos de hover en las cards
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-10px)';
            card.style.transition = 'transform 0.3s ease';
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0)';
            card.style.transition = 'transform 0.3s ease';
        });
    });

    // Inicializar tooltips y popovers de Bootstrap
    $('[data-toggle="tooltip"]').tooltip();
    $('[data-toggle="popover"]').popover();

    // Manejar formulario de contacto
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Mensaje enviado correctamente');
            contactForm.reset();
        });
    }

    // Manejar suscripción al newsletter
    const newsletterForms = document.querySelectorAll('form:not(#contactForm)');
    newsletterForms.forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('¡Gracias por suscribirte!');
            form.reset();
        });
    });
});