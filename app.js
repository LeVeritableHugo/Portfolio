let collapsed = true;
let iconID = 0;
let posImage = 0;

const bouton = document.querySelector(".expand");
const expandIcon = document.querySelector('.expandIcon');
const walkAnim = document.querySelector(".walkingAnim");
const iconeJS = document.querySelector('.Javascript');
const iconePHP = document.querySelector('.PHP');
const iconeC = document.querySelector('.C');
const iconeJava = document.querySelector('.Java');
const iconeDesign = document.querySelector('.Design');


//Menu déroulant
bouton.addEventListener('click', function()
{
    document.querySelector('.wrapper-sidebar').classList.toggle("collapsed")
    document.querySelector('.wrapper-menu').classList.toggle("hidden");
    document.querySelector('.wrapper-collapsedIcon').classList.toggle("removed");
    

    if(!collapsed)
    {
        // bouton.textContent = ">";
        expandIcon.src = 'img/Icones/Icone-1.png';
        collapsed = true;

    }
    else
    {
        // bouton.textContent = "X";
        expandIcon.src = 'img/Icones/Icone-0.png';
        collapsed = false;
    }
});

// Animation de marche


document.addEventListener('scroll', function() 
{
  walkAnim.style.left= (posImage) + "px";
  posImage += 5;
  if(posImage >= window.innerWidth)
  {
      posImage = 0;
  }

});


// Changement de description de projet
function changeDesc(elem)
{
    elem.addEventListener('mouseenter', function()
    {
        
        let nametype = elem.className.substring(11);

        document.querySelector('.descProjet').textContent = nametype;
       
    })
    
    elem.addEventListener('mouseleave', function()
    {
        document.querySelector('.descProjet').textContent='';
    })
    
}

changeDesc(iconeJS);
changeDesc(iconePHP);
changeDesc(iconeC);
changeDesc(iconeJava);
changeDesc(iconeDesign);



