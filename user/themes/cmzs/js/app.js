$(document).ready(function () {

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

    window.onscroll = function () {
        scrollFunction()
    };

    function scrollFunction() {
        if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
            $("#logo").css('height','40px');            
        } else {
            $("#logo").css('height','90px');
        }
    }
});
