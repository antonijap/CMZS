$(document).ready(function () {

    $(window).scroll(function(){
        if (parseInt($(window).width()) < 426) {
            console.log('Manje');
            
            if($(document).scrollTop() > 0) {
                $('#logo').addClass('small');
                $('.be-first').addClass('shadow-scroll');
            } else {
                $('#logo').removeClass('small');
                $('.be-first').removeClass('shadow-scroll');
            }
        } else {
            console.log('Veće');
            
            if($(document).scrollTop() > 90) {
                $('#logo').addClass('small');
                $('.be-first').addClass('shadow-scroll');
            } else {
                $('#logo').removeClass('small');
                $('.be-first').removeClass('shadow-scroll');
            }
        }
    });

    $('.simple-logo').hide().delay(500).fadeIn(1000);

    $('.owl-carousel').owlCarousel({
        margin: 0,
        loop: true,
        autoWidth: false,
        items: 1,
        center: true,
        autoplay: true,
        autoplayTimeout: 4000
    })

    $('.collapse').collapse()

    var cmzs = {
        lat: 45.812485,
        lng: 15.980098
    };
    map = new google.maps.Map(document.getElementById("map"), {
        zoom: 17,
        center: cmzs
    });
    var marker = new google.maps.Marker({
        position: cmzs,
        map: map
    });
});
