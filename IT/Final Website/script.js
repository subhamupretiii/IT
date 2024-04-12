document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("#contactForm");
    form.addEventListener("submit", function(event) {
        // Form validation logic goes here
        event.preventDefault(); // Prevent form submission for demonstration
    });
});
// JavaScript for automatic image slider
let currentIndex = 0;
const images = ["messi1.jpg", "image3.avif", "messi3.avif"]; // Add more image URLs here
const sliderText = ["Lionel Messi Holding The World Cup Trophy in his Hands", "Lionel Messi In Inter Miami's Home Kit", "Messi Getting his 8th Ballon D'or"]; // Corresponding image descriptions

function changeImage() {
    currentIndex = (currentIndex + 1) % images.length;
    const sliderImage = document.querySelector(".image-slider-img");
    const sliderDescription = document.querySelector(".image-slider p");
    sliderImage.src = images[currentIndex];
    sliderDescription.textContent = sliderText[currentIndex];
}

// Change image every 3 seconds (3000 milliseconds)
setInterval(changeImage, 3000);
