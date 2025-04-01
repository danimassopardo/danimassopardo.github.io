document.addEventListener("DOMContentLoaded", function () {
    // Carrusel d’imatges
    const images = document.querySelectorAll(".carousel img");
    let currentIndex = 0;

    function showImage(index) {
        images.forEach((img, i) => {
            img.classList.toggle("active", i === index);
        });
    }

    document.getElementById("prev").addEventListener("click", function () {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        showImage(currentIndex);
    });

    document.getElementById("next").addEventListener("click", function () {
        currentIndex = (currentIndex + 1) % images.length;
        showImage(currentIndex);
    });

    // Mapa interactiu
    function initMap() {
        const location = { lat: 40.7128, lng: -74.0060 }; // Canvia per la teva ubicació
        const map = new google.maps.Map(document.getElementById("map"), {
            zoom: 12,
            center: location,
        });
        new google.maps.Marker({
            position: location,
            map: map,
        });
    }

    // Carregar el mapa quan l'API estigui disponible
    const script = document.createElement("script");
    script.src = `https://maps.googleapis.com/maps/api/js?key=TU_CLAU_API&callback=initMap`;
    script.async = true;
    document.body.appendChild(script);
});
