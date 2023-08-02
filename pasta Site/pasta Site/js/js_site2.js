/* scroll suave */
$(".navbar a, .btn").on("click", function (event) {
    if (this.hash !== "") {
        event.preventDefault();

        const hash = this.hash;

        $("html, body").animate(
            {
                scrollTop: $(hash).offset().top - 100
            },
            800
        );
    }
});

// Sticky menu background
window.addEventListener("scroll", function () {
    if (window.scrollY > 150) {
        document.querySelector(".navbar").style.opacity = 0.9;
    } else {
        document.querySelector(".navbar").style.opacity = 1;
    }
});

function menuShow() {
    let menuMobile = document.querySelector('.navbar-itens');
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open'); 
        document.querySelector('.icon').src = "assets/menu_white_36dp.svg";
    }
    else {
        menuMobile.classList.add('open');
        document.querySelector('.icon').src = "assets/close_white_36dp.svg";
    }
}