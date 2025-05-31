document.addEventListener('DOMContentLoaded', function () {
    // Filtrado de recetas con mejor manejo de teclado
    const recetasContainer = document.getElementById('recetas-container');
    const botones = document.querySelectorAll('button[id]');
    const recetas = recetasContainer.querySelectorAll('.receta');

    function filtrarRecetas(categoria) {
        recetas.forEach(receta => {
            const shouldShow = categoria === 'todos' || receta.dataset.categoria === categoria;
            receta.style.display = shouldShow ? '' : 'none';
            
            if (shouldShow) {
                receta.removeAttribute('aria-hidden');
            } else {
                receta.setAttribute('aria-hidden', 'true');
            }
        });

        // Mover foco al primer elemento visible después de filtrar
        const firstVisible = document.querySelector('.receta:not([aria-hidden="true"])');
        if (firstVisible) {
            firstVisible.querySelector('a').focus();
        }
    }

    botones.forEach(boton => {
        boton.addEventListener('click', function () {
            const categoria = this.id;
            filtrarRecetas(categoria);
            
            // Actualizar estado ARIA
            botones.forEach(btn => {
                btn.setAttribute('aria-pressed', btn === this ? 'true' : 'false');
            });
        });

        // Manejar eventos de teclado
        boton.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                this.click();
            }
        });
    });

    // Mostrar todas las recetas inicialmente
    filtrarRecetas('todos');
    document.getElementById('todos').setAttribute('aria-pressed', 'true');

    // Efectos de movimiento en las tarjetas
    recetas.forEach(receta => {
        const card = receta.querySelector('.card');
        
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'scale(1.05) translateY(-10px)';
            card.style.transition = 'transform 0.3s ease';
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'scale(1) translateY(0)';
            card.style.transition = 'transform 0.3s ease';
        });

        // Manejar foco para teclado
        const link = card.querySelector('a');
        link.addEventListener('focus', () => {
            card.style.transform = 'scale(1.05) translateY(-10px)';
            card.style.transition = 'transform 0.3s ease';
        });

        link.addEventListener('blur', () => {
            card.style.transform = 'scale(1) translateY(0)';
            card.style.transition = 'transform 0.3s ease';
        });
    });

    // Control del vídeo promocional
    const videoPromo = document.querySelector('.hero video');
    if (videoPromo) {
        // Añadir controles ARIA
        videoPromo.setAttribute('aria-label', 'Vídeo promocional de Recetas de Mariscos');
        
        // Reproducir automáticamente (silenciado por políticas de navegadores)
        videoPromo.muted = true;
        const playPromise = videoPromo.play();
        
        if (playPromise !== undefined) {
            playPromise.catch(error => {
                console.log('Reproducción automática prevenida:', error);
                // Añadir mensaje para usuarios
                const videoContainer = videoPromo.parentElement;
                const message = document.createElement('p');
                message.textContent = 'El vídeo no puede reproducirse automáticamente. Por favor, use los controles para iniciarlo.';
                message.style.color = 'white';
                message.style.marginTop = '10px';
                videoContainer.appendChild(message);
            });
        }
    }

    // Inicializar el carrusel
    $('.carousel').carousel({
        interval: 5000, // Cambia cada 5 segundos
        pause: 'hover' // Pausa al pasar el ratón
    });

    // Manejar teclado para elementos de infografía
    const infografiaItems = document.querySelectorAll('.infografia-item');
    infografiaItems.forEach(item => {
        item.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                this.click();
            }
        });
    });

    // Mejorar accesibilidad de modales
    $('.modal').on('shown.bs.modal', function () {
        $(this).find('[autofocus]').focus();
    });

    // Asegurar que los modales puedan cerrarse con teclado
    $('.modal').on('keydown', function(e) {
        if (e.key === 'Escape') {
            $(this).modal('hide');
        }
    });

    // Añadir manejo de teclado para el carrusel
    document.querySelectorAll('.carousel-control').forEach(control => {
        control.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                this.click();
            }
        });
    });
});