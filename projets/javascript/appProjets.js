// Images de preview projet 
let imagePreview = document.querySelector('.dicegameAccess');
let imagePreview2 = document.querySelector('.dicegameAccess2');

imagePreview.addEventListener('mouseenter', function(){
    imagePreview.src = 'dicegame/previewImages/preview2.png';
    console.log("oui");
})

imagePreview.addEventListener('mouseleave', function(){
    imagePreview.src = 'dicegame/previewImages/animationblur.png';
    console.log("oui");
})

imagePreview2.addEventListener('mouseenter', function(){
    imagePreview2.src = 'dicegame/previewImages/preview4.png';
    console.log("oui");
})

imagePreview2.addEventListener('mouseleave', function(){
    imagePreview2.src = 'dicegame/previewImages/preview3.png';
    console.log("oui");
})