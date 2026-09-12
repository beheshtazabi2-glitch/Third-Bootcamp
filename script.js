const testimonialTrack = document.querySelector(".testimonial6-track");
const nextButton = document.querySelector(".testimonial6-next");
const previousButton = document.querySelector(".testimonial6-prev");

let currentClient = 0;

nextButton.addEventListener("click", function () {

    currentClient++;

    if (currentClient > 3) {
        currentClient = 0;
    }

    testimonialTrack.style.transform =
        "translateX(-" + (currentClient * 25) + "%)";
});


previousButton.addEventListener("click", function () {

    currentClient--;

    if (currentClient < 0) {
        currentClient = 3;
    }

    testimonialTrack.style.transform =
        "translateX(-" + (currentClient * 25) + "%)";
});