const images = [
        "assets/unicorn.gif",
        "assets/elephant.gif",
        "assets/corgi.webp",
        "assets/giphy-bear.gif",
        "assets/giphy-cat2.gif",
        "assets/giphy-cat.gif",
        "assets/giphy.gif",
        "assets/giphy-dog.gif"
];

$(document).ready(function () {
        let current = 0;
        $("#mirror-content").on("click", function () {
                $(this).css({
                        "background-image": `url(${images[++current % images.length]})`
                });
        });
});
