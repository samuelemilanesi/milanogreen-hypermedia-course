var fadedIn = false;
var menuOpened = false;
var navButton = document.getElementById("nav-button");
var scroll = 0;
var navbar = document.getElementById("mainNav")


$(window).scroll(function (event) {
    scroll = $(window).scrollTop();
    
    
});

window.onload = function(){
    scroll = $(window).scrollTop();
    if ($(this).scrollTop() > 150) {
        fadeinNav();
    }
    
}
$(window).scroll(function () {
    if (!this.menuOpened) {
        if ($(this).scrollTop() > 150 && !fadedIn) {
            fadeinNav();
        }

        if ($(this).scrollTop() < 20 && fadedIn) {
            fadeoutNav();
        }
    }
});

fadeinNav = function () {
    console.log(navbar);
    
    navbar.classList.remove("nav-bg-trasparent");
    navbar.classList.add("nav-bg-green");
    fadedIn = true;
}

fadeoutNav = function () {
    navbar.classList.remove("nav-bg-green")
    navbar.classList.add("nav-bg-transparent");
    fadedIn = false;
}


navButton.onclick = function () {
    if (!menuOpened) {
        if (!fadedIn) {
            if(!fadedIn){
                fadeinNav();
            }
        }
    }
    else {
        
        if (scroll < 150) {
            fadeoutNav();
        }
    }
    menuOpened = !menuOpened
};



