let collapsed = true;
let iconID = 0;
let posImage = 0;

const bouton = document.querySelector(".expand");
const menuIcon = document.querySelector('.menuIcon');
const walkAnim = document.querySelector(".walkingAnim");


//Menu déroulant
function expand()
{
    document.querySelector('.wrapper-sidebar').classList.toggle("collapsed")
    document.querySelector('.wrapper-menu').classList.toggle("hidden");
    document.querySelector('.collapsedIcon').classList.toggle("hidden")

    if(!collapsed)
    {
        // bouton.textContent = ">";
        menuIcon.src = 'img/Icones/Icone-1.png';
        collapsed = true;

    }
    else
    {
        // bouton.textContent = "X";
        menuIcon.src = 'img/Icones/Icone-0.png';
        collapsed = false;
    }
}

bouton.addEventListener('click', expand);

// Animation de marche

function walking() 
{
  walkAnim.style.left= (posImage) + "px";
  posImage += 5;
  if(posImage >= window.innerWidth)
  {
      posImage = 0;
  }

}
document.addEventListener('scroll', walking);


