let collapsed = true;
let iconID = 0;

const bouton = document.querySelector(".expand");
let menuIcon = document.querySelector('.menuIcon');
//Menu déroulant
function expand()
{
    document.querySelector('.wrapper-sidebar').classList.toggle("collapsed")
    document.querySelector('.wrapper-menu').classList.toggle("hidden");
    if(!collapsed)
    {
        // bouton.textContent = ">";
        iconID = 1;
        menuIcon.src = 'img/Icone-' + iconID + '.png';
        collapsed = true;

    }
    else
    {
        // bouton.textContent = "X";
        iconID = 0;
        menuIcon.src = 'img/Icone-' + iconID + '.png';
        collapsed = false;


    }
}

bouton.addEventListener('click', expand);
