document.addEventListener("DOMContentLoaded", function () {
    // ---------- Carrusel d'imatges ----------
    let index = 0;
    const images = document.querySelectorAll(".carousel img");
    const prevButton = document.getElementById("prev");
    const nextButton = document.getElementById("next");

    function showImage(i) {
        images.forEach(img => img.classList.remove("active"));
        images[i].classList.add("active");
    }

    function nextImage() {
        index = (index + 1) % images.length;
        showImage(index);
    }

    function prevImage() {
        index = (index - 1 + images.length) % images.length;
        showImage(index);
    }

    if (images.length > 0) {
        setInterval(nextImage, 3000); // Canvia la imatge cada 3 segons
        nextButton.addEventListener("click", nextImage);
        prevButton.addEventListener("click", prevImage);
    }

    // ---------- Filtratge de receptes ----------
    const filters = document.querySelectorAll("button[id]");
    const recipes = document.querySelectorAll(".receta");

    filters.forEach(button => {
        button.addEventListener("click", () => {
            const category = button.id;
            recipes.forEach(recipe => {
                if (category === "todos" || recipe.dataset.categoria === category) {
                    recipe.style.display = "block";
                } else {
                    recipe.style.display = "none";
                }
            });
        });
    });

    // ---------- Google Maps ----------
    function initMap() {
        const location = { lat: 40.7128, lng: -74.0060 }; // Exemple: Nova York
        const map = new google.maps.Map(document.getElementById("map"), {
            zoom: 12,
            center: location
        });
        new google.maps.Marker({ position: location, map: map });
    }

    // Carregar el mapa quan la pàgina estigui completament carregada
    if (document.getElementById("map")) {
        const script = document.createElement("script");
        script.src = `https://maps.googleapis.com/maps/api/js?key=TU_CLAU_API&callback=initMap`;
        script.async = true;
        script.defer = true;
        document.body.appendChild(script);
    }

    // ---------- Formulari de contacte (validació bàsica) ----------
    const contactForm = document.querySelector(".contact-form form");
    if (contactForm) {
        contactForm.addEventListener("submit", function (event) {
            event.preventDefault();
            const name = document.getElementById("name").value.trim();
            const email = document.getElementById("email").value.trim();
            const message = document.getElementById("message").value.trim();

            if (name === "" || email === "" || message === "") {
                alert("Tots els camps són obligatoris.");
                return;
            }

            alert("Missatge enviat correctament!");
            contactForm.reset();
        });
    }

    // ---------- Reproducció automàtica del vídeo promocional ----------
    const video = document.querySelector("video");
    if (video) {
        video.addEventListener("mouseover", () => video.play());
        video.addEventListener("mouseout", () => video.pause());
    }
});
