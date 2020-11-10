const navbarToggler =document.querySelector(".navbar-toggler");
const navbarMenu =document.querySelector(".navbar ul");
const navbarLinks = document.querySelectorAll(".navbar a");
    for(let n in navbarLinks){
        if(navbarLinks.hasOwnProperty(n)){
            navbarLinks[n].addEventListener('click',e => {
                e.preventDefault();
                document.querySelector(navbarLinks[n].hash)
            })
        }
    }

navbarToggler.addEventListener("click",navbarTogglerClick);

function navbarTogglerClick(){
    navbarToggler.classList.toggle("open-navbar-toggler");
    navbarMenu.classList.toggle("open");
}

navbarLinks.forEach(elem => elem.addEventListener("click",navbarLinkClick));

function navbarLinkClick(event){
    
    smoothScroll(event); //call the 'smoothScroll' function
    
    if(navbarMenu.classList.contains("open")){ //close navbarmenu in smaller screen
        navbarToggler.click();
    }
}
//smooth-Scrolling

function smoothScroll(event){
    event.preventDefault();
    const targetId= event.currentTarget.getAttribute("href");
    window.scrollTo({
        top:document.querySelector(targetId).offsetTop,
        behavior:"smooth"
    })
}