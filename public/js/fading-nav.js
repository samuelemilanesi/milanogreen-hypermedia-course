var fadedIn = false;
var menuOpened = false;
var navButton = document.getElementById("nav-button");
var scroll = 0;


$(window).scroll(function (event) {
    scroll = $(window).scrollTop();
    console.log(scroll);
    
});


$(window).scroll(function () {
    if (!this.menuOpened) {
        if ($(this).scrollTop() > 150 && !fadedIn) {
            fadeinNav();
        }

        if ($(this).scrollTop() < 20 && fadedIn) {
            console.log("scopaio");
            fadeoutNav();
        }
    }
});

fadeinNav = function () {
    $('nav').removeClass('nav-bg-trasparent');
    $('nav').addClass('nav-bg-green');
    fadedIn = true;
}

fadeoutNav = function () {
    $('nav').removeClass('nav-bg-green');
    $('nav').addClass('nav-bg-transparent');
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
        console.log("sono qui");
        
        if (scroll < 150) {
            fadeoutNav();
        }
    }
    menuOpened = !menuOpened
};



