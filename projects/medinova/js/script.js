$(document).ready(function(){
    $(".navbar-toggle").click(function(){
        $(".navbar-links").toggle();
        $(".navbar-contact").toggle();
    });
});

$(document).ready(function(){
    $("nav ul li a").click(function(e){
        e.preventDefault();
        var href_value = this.hash;
        $("html").animate({
            scrollTop:$(href_value).offset().top
        },500,function(){
            window.location.hash = href_value;
        });
    });
});