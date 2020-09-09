// Images de preview projet 
let imagePreviewDice = document.querySelector('.dicegameAccess');
let imageGitDice = document.querySelector('.dicegameAccess2');
let imagePreviewBlackjack = document.querySelector('.blackjackAccess');
let imageGitBlackjack = document.querySelector('.blackjackAccess2');




function voirGithub(elem)
{
    elem.addEventListener('mouseenter', function(){
        elem.src = 'dicegame/previewImages/previewgit2.png';
    })
    
    elem.addEventListener('mouseleave', function(){
        elem.src = 'dicegame/previewImages/previewgit1.png';
    })
}


// Anim jeu de dés

    imagePreviewDice.addEventListener('mouseenter', function(){
        imagePreviewDice.src = 'dicegame/previewImages/previewDice.png';
    })

    imagePreviewDice.addEventListener('mouseleave', function(){
        imagePreviewDice.src = 'dicegame/previewImages/animationblur.png';
    })

voirGithub(imageGitDice);

// Anim Blackjack

    imagePreviewBlackjack.addEventListener('mouseenter', function(){
        imagePreviewBlackjack.src = 'blackjack/previewImages/preview2.png';
    })

    imagePreviewBlackjack.addEventListener('mouseleave', function(){
        imagePreviewBlackjack.src = 'blackjack/previewImages/preview1.png';
    })

    voirGithub(imageGitBlackjack);

