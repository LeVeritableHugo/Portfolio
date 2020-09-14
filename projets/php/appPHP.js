let dvd = document.querySelector('.dvdAccess2');

//Hover PHP

dvd.addEventListener('mouseenter', function(){
    dvd.src = '../php/imagesPreview/preview3.png';
})

dvd.addEventListener('mouseleave', function(){
    dvd.src = '../php/imagesPreview/preview1.png';
})


