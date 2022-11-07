$(document).ready(function(){
    $(".navbar ul li a").click(function(e){
        e.preventDefault();
        var href_value = this.hash;
        $("html").animate({
            scrollTop:$(href_value).offset().top
        },500,function(){
            window.location.hash = href_value;
        });
    });
});