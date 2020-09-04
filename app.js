let collapsed = true;
let iconID = 0;
let posImage = 0;

const bouton = document.querySelector(".expand");
const menuIcon = document.querySelector('.menuIcon');
const walkAnim = document.querySelector(".walkingAnim");
const iconeJS = document.querySelector('.Javascript');
const iconePHP = document.querySelector('.PHP');
const iconeC = document.querySelector('.C');
const iconeJava = document.querySelector('.Java');
const iconeDesign = document.querySelector('.Design');


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







function changeDesc(elem)
{
    elem.addEventListener('mouseenter', function()
    {
        let name = elem.className;
        
        if(name.includes("Javascript"))
        {            
            document.querySelector('.descProjet').textContent='Javascript';
        }
        else if(name.includes("PHP"))
        {            
            document.querySelector('.descProjet').textContent='PHP';
        }
        else if(name.includes("C"))
        {            
            document.querySelector('.descProjet').textContent='C/C++';
        }
        else if(name.includes("Java"))
        {            
            document.querySelector('.descProjet').textContent='Java';
        }
        else if(name.includes("Design"))
        {            
            document.querySelector('.descProjet').textContent='Design';
        }
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





