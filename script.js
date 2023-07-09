document.getElementById("portrait");

const firstImage = "profile.jpg";
const secondImage = "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExd2VzeTEydWhiZmNhNGxiamZlc2I0dWp5N2JiNHc0bTcwcWhkdzJyciZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3ASJ2k35r0ynm/giphy.gif";

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
