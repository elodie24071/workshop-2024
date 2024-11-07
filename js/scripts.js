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

var url = 'https://script.googleusercontent.com/macros/echo?user_content_key=NCTiZGAALg3H4cOh7M4V92jcv-q_UXP-eaMEHXT8KiO-teH6tiVzMynXCWX8ZlqDa0C11z10avhs76-w2-YIUcEL3jp9X-uem5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnK_Fc1f1kAIoNxghPtuRUWyeShsy5YcMsFG2dNNuyo4Lkr63vIJDqWHkuKTg2R_yOAXv9xyx_0Ewoh8GUjLUB0IlEPHcNgCultz9Jw9Md8uu&lib=M1t8Iy23AIs3gZKwR8-bcKYtUlWpmDh-k';

$.ajax({
    type: 'GET',
    url: url,
    dataType: 'json',
    success: function(data) {
        console.log(data);
        
        var moncontenu = '';
        $.each(data, function(index, post) {
            moncontenu += `
                    <div class="" style="border: 2px solid;">
                        ${titre} <br>
                        ${description}
                    </div>`;
        });
        
        // Ajouter le contenu généré dans le DOM
        $('.row').html(moncontenu);
        console.log("Contenu HTML généré :", moncontenu);

        // Initialiser Isotope
        var iso = new Isotope('.row', {
            itemSelector: '.item',
            layoutMode: 'fitRows'
        });

         // Bouton btn1 pour afficher uniquement info étage 1
         $('.btn1').on('click', function () {
            ${}
        });

         // Bouton btn2 pour afficher uniquement info étage 1
         $('.btn2').on('click', function () {
            ${}
        });
         // Bouton btn3 pour afficher uniquement info étage 1
         $('.btn3').on('click', function () {
            ${}
        });

    }, // fin success
    error: function() {
        alert('An error occurred while loading content.');
    } // fin error
}); // fin ajax

