$(document).ready(function () {
    console.log('ready');

    gsap.registerPlugin(ScrollTrigger);

    // Configurer ScrollTrigger pour la partie texte
    ScrollTrigger.create({
        trigger: '.etage-texte',
        pin: true,
        start: 'top top', // Épingler quand le haut de .etage-texte atteint le haut de la fenêtre
        endTrigger: '.contenu-etage',
        end: 'top bottom', // Arrête l'épinglage lorsque le bas de .contenu-etage atteint le bas de la fenêtre
        markers: true // Affiche les marqueurs pour le débogage
    });
});
