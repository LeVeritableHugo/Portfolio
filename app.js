let collapsed = true;
let iconID = 0;


const bouton = document.querySelector(".expand");
let menuIcon = document.querySelector('.menuIcon');
//Menu déroulant
function expand()
{
    document.querySelector('.wrapper-sidebar').classList.toggle("collapsed")
    document.querySelector('.wrapper-menu').classList.toggle("hidden");
    document.querySelector('.contactIcon').classList.toggle("hidden")

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

let posImage = 0;
let walkAnim = document.querySelector(".walkingAnim");

function walking() 
{
  walkAnim.style.paddingLeft= (posImage) + "px";
  posImage += 5;
  if(posImage >= 2000)
  {
      posImage = 0;
  }

}

document.addEventListener('scroll', walking)


bouton.addEventListener('click', expand);
