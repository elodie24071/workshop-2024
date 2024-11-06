$(document).ready(function () {
    console.log('ready');

    gsap.registerPlugin(ScrollTrigger);

    gsap.to('#logo-text',  {
        scrollTrigger: {
            trigger: ".hero", 
            start: "top top",  
            end: "bottom top", 
            scrub: true,
        },
        scale: 0.2, // Réduit la taille à 50%
        transformOrigin: "center center", // Centre de réduction
    });
});
