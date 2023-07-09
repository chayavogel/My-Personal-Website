document.getElementById("portrait");

const firstImage = "profile.jpg";
const secondImage = "https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/funny-face-giraffe-sheila-brown.jpg";

portrait.addEventListener("mouseover", function (event) {
    if (event = "focus") {
        portrait.src = secondImage;
    }
})

portrait.addEventListener("mouseout", function (event) {
    if (event = "focus") {
        portrait.src = firstImage;
    }
})
