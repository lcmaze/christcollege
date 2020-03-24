$('.carousal-one').owlCarousel({
    loop: true,
    margin: 0,
    nav: false,
    autoplay: true,
    responsive: {
        0: {
            items: 1
        },
        768: {
            items: 2
        },
        1200: {
            items: 3
        }
    }
})

$('.carousal-two').owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    autoplay: true,
    responsive: {
        0: {
            items: 1
        }
    }
})