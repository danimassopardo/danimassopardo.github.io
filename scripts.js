document.addEventListener("DOMContentLoaded", function () {
    // ---------- Google Maps ----------
    function initMap() {
        const location = { lat: 40.7128, lng: -74.0060 }; // Exemple: Nova York
        const map = new google.maps.Map(document.getElementById("map"), {
            zoom: 12,
            center: location
        });
        new google.maps.Marker({ position: location, map: map });
    }

    if (document.getElementById("map")) {
        const script = document.createElement("script");
        script.src = `https://maps.googleapis.com/maps/api/js?key=TU_CLAU_API&callback=initMap`;
        script.async = true;
        script.defer = true;
        document.body.appendChild(script);
    }

    window.onload = () => {
    document.getElementById('name').focus();
};


    // ---------- Formulari de contacte ----------
    const contactForm = document.querySelector(".contact-form form");
    if (contactForm) {
        contactForm.addEventListener("submit", function (event) {
            event.preventDefault();
            alert("Missatge enviat correctament!");
            contactForm.reset();
        });
    }

    // ---------- Vídeo promocional ----------
    const video = document.querySelector("video");
    if (video) {
        video.addEventListener("mouseover", () => video.play());
        video.addEventListener("mouseout", () => video.pause());
    }
});
