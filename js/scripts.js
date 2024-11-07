$(document).ready(function () {
    console.log('ready');

    let url = 'https://script.google.com/macros/s/AKfycbxAl3qi44SiRaeNHKoYQlk89XvdpU2L57VRKlNkGwCDHzl9q1cPVzqfXtlf_RsTRinD8g/exec';

    $.ajax({
        type: 'GET',
        url: url,
        dataType: 'json',
        success: function(data) {
            console.log(data);

            // Définir le filtre pour afficher un élément spécifique en fonction du bouton cliqué
            $('.filtre .btn').on('click', function () {
                // Récupérer la classe associée au bouton cliqué
                let selectedClass = $(this).attr('class').split(' ')[1];

                // Trouver l’élément correspondant dans les données de l’API
                let post = data.find(post => post.class === selectedClass);
                if (post) {
                    // Injecter les valeurs dans le HTML
                    $('.nom').text(post.titre);
                    $('.desc').text(post.description);
                    $('.titre img').attr('src', post.img);
                } else {
                    alert('Aucun contenu trouvé pour cette sélection.');
                }
            });
        },
        error: function() {
            alert('An error occurred while loading content.');
        }
    });
});