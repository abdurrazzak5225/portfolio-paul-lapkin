// MixitUp
var mixer = mixitup('.grid-portfolio-container');

// scrollyfy 
 $(function() {
    $.scrollify({
        section : ".scrollify",
        setHeights: false,
        updateHash: false,
    });
});

// hAMBERGER mENU

function openMenu(){
    document.getElementById('navbar').style.height = "100%";
}
function closeMenu(){
    document.getElementById('navbar').style.height = "0";
}

// samooth scroll
$(function(){
    $('.menu-items a').on('click', function(){
        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        },1000);
        return false;
    });
});