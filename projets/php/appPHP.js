let dvd = document.querySelector('.dvdAccess2');

//Hover PHP

dvd.addEventListener('mouseenter', function(){
    dvd.src = '../php/imagesPreview/preview3.png';
})

dvd.addEventListener('mouseleave', function(){
    dvd.src = '../php/imagesPreview/preview1.png';
})

// Chargement

window.addEventListener('load', function () {
    
    // Opacité à 0, transition propre
    window.setTimeout(function (){ document.querySelector('.loading').style.opacity = '0';}, 1500);
    // Suppression de la div pour avoir accès au reste
    window.setTimeout(function (){ document.querySelector('.loading').classList.add('removed');}, 2000);

    
})


