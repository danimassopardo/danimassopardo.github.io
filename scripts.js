document.addEventListener('DOMContentLoaded', function () {
    const recetasContainer = document.getElementById('recetas-container');
    const botons = document.querySelectorAll('button');
    const recetas = recetasContainer.querySelectorAll('.receta');

    function filtrarRecetas(categoria) {
        recetas.forEach(receta => {
            receta.style.display = (categoria === 'todos' || receta.dataset.categoria === categoria) ? '' : 'none';
        });
    }

    botons.forEach(boton => {
        boton.addEventListener('click', function () {
            const categoria = this.id; // L'ID del botó indica la categoria
            filtrarRecetas(categoria);
        });
    });

    // Mostrar totes les receptes inicialment
    filtrarRecetas('todos');

    // Afegir efecte de moviment a les targetes
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
    });
});
