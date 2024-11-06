$(document).ready(function () {
    console.log('ready');

    // URL de l'API
    let url = 'https://script.google.com/macros/s/AKfycbxAl3qi44SiRaeNHKoYQlk89XvdpU2L57VRKlNkGwCDHzl9q1cPVzqfXtlf_RsTRinD8g/exec';
    $.ajax({
        type: 'GET',
        url: url,
        dataType: 'json',
        success: function(data) {
            console.log(data);
            var moncontenu = '';

            // Crée un Set pour stocker les valeurs uniques de classe (ou étage)
            let typesSet = new Set();

            // Boucle pour récupérer les valeurs uniques pour les boutons
            $.each(data, function(index, post) {
                if (post.class) { // Remplace 'class' par la propriété de l'API que tu utilises
                    typesSet.add(post.class); // Ajoute chaque valeur de 'class' au Set
                }
            });

            // Boucle pour générer le contenu HTML de chaque post
            $.each(data, function(index, post) {
                // Initialiser les boutons de filtre pour chaque élément
                let filtres = '';
                typesSet.forEach(typeName => {
                    filtres += '<button class="btn">' + typeName + '</button>';
                });

                // Création de l'élément HTML pour chaque post
                moncontenu += '<div class="nav">'
                    + '<div class="titre">'
                    + '<img src="img2D" alt="">'
                    + '<h1>' + post.titre + '</h1>'
                    + '</div>'
                    + '<div class="filtre">' // Ajouter les boutons dans la section .filtre
                    + filtres
                    + '</div>'
                    + '<div class="contenu-etage">'
                    + '<div class="etage-texte">'
                    + '<h2></h2>'
                    + '<p>' + post.description + '</p>'
                    + '</div>'
                    + '<div class="img-etage">'
                    + '<img src="' + post.map + '" alt="">'
                    + '</div>'
                    + '</div></div>';
            });

            console.log(moncontenu);
            $('#container').html(moncontenu);
        },
        error: function() {
            alert('An error occurred while loading content.');
        }
    });
});
