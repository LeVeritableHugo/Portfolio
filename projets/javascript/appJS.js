

// Images de preview projet 
let imagePreviewDice = document.querySelector('.dicegameAccess');
let imageGitDice = document.querySelector('.dicegameAccess2');
let imagePreviewBlackjack = document.querySelector('.blackjackAccess');
let imageGitBlackjack = document.querySelector('.blackjackAccess2');
let imagePreviewPf = document.querySelector('.portfolioAccess');
let imageGitPf = document.querySelector('.portfolioAccess2');

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
    
    // Anim Fond
    window.addEventListener('scroll', () =>{
 
        // Dés 1 à 5
        if(window.scrollY < 300)
        {
            document.getElementById("dicegame").style.backgroundImage = "url('dicegame/previewImages/animBG1.png')";
        }

        if(window.scrollY > 300)
        {
            document.getElementById("dicegame").style.backgroundImage = "url('dicegame/previewImages/animBG2.png')";
        }

        if(window.scrollY > 500)
        {
            document.getElementById("dicegame").style.backgroundImage = "url('dicegame/previewImages/animBG3.png')";
        }

        if(window.scrollY > 700)
        {
            document.getElementById("dicegame").style.backgroundImage = "url('dicegame/previewImages/animBG4.png')";
        }
        if(window.scrollY > 900)
        {
            document.getElementById("dicegame").style.backgroundImage = "url('dicegame/previewImages/animBG5.png')";
        }

        // Titre Porfolio
        if(window.scrollY <= 2172)
        {
            document.querySelector('.pfTitre').style.color = "#171717";
        }
        else
        {
            document.querySelector('.pfTitre').style.color = "#d7d1dd";

        }        
    })

// Anim Blackjack

    imagePreviewBlackjack.addEventListener('mouseenter', function(){
        imagePreviewBlackjack.src = 'blackjack/previewImages/preview2.png';
    })

    imagePreviewBlackjack.addEventListener('mouseleave', function(){
        imagePreviewBlackjack.src = 'blackjack/previewImages/preview1.png';
    })

    voirGithub(imageGitBlackjack);

// Anim Porfolio

imagePreviewPf.addEventListener('mouseenter', function(){
    imagePreviewPf.src = 'portfolio/previewImages/preview2.png';
})

imagePreviewPf.addEventListener('mouseleave', function(){
    imagePreviewPf.src = 'portfolio/previewImages/preview1.png';
})

voirGithub(imageGitPf);

// Chargement

window.addEventListener('load', function () {
    
    // Opacité à 0, transition propre
    window.setTimeout(function (){ document.querySelector('.loading').style.opacity = '0';}, 1500);
    // Suppression de la div pour avoir accès au reste
    window.setTimeout(function (){ document.querySelector('.loading').classList.add('removed');}, 2000);

    
})
