
$(document).ready(function () {
    $(window).scroll(function () {
        // sticky navbar on scroll script
        if (this.scrollY > 20) {
            $('.navbar').addClass("sticky");
        } else {
            $('.navbar').removeClass("sticky");
        }

        // scroll-up button show/hide script
        if (this.scrollY > 500) {
            $('.scroll-up-btn').addClass("show");
        } else {
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function () {
        $('html').animate({ scrollTop: 0 });
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function () {
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function () {
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // typing text animation script
    var typed = new Typed(".typing", {
        strings: ["Web Designer", "Web Developer", "Graphic Designer", "Hardware Engineer", "Network Engineer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["HTML", "CSS", "JavaScript", "Bootstrap", "Angular", "React", "Type Script", "NodeJS", "MongoDB"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            600: {
                items: 2,
                nav: false
            },
            1000: {
                items: 3,
                nav: false
            }
        }
    });
});
// send massage

// send massage to mail
function sendMail() {
    $("#submit-form").submit((result) => {
        result.preventDefault()
        $.ajax({
            url: "https://script.google.com/macros/s/AKfycbyVDC5UEtBOGPxz7zt0EYFI5QuBj1Bwo7pDTEtd32uoeZasiCutZ3crCJ-Gr4EhieUJ4g/exec",
            data: $("#submit-form").serialize(),
            method: "post",
            success: function (response) {
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Your Message Sent Successfully.. THANK YOU',
                    showConfirmButton: true,
                })
                setTimeout(() => {

                    $('html').animate({ scrollTop: 0 });
                    // removing smooth scroll on slide-up button click
                    $('html').css("scrollBehavior", "auto");
                }, 2000);
                setTimeout(() => {
                    window.location.reload()
                }, 3000);
            },
            error: function (error) {
                alert('Check Your Connection And Try Again')
                setTimeout(() => {
                    window.location.reload()
                }, 2000);
            }
        })
    })
}

