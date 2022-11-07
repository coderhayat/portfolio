function menu(){
    var x = document.getElementById("menu");
    if(x.style.display =="none")
    {
        x.style.display ="block";
    }
    else
    {
        x.style.display ="none";
    }
}

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

$(document).ready(function() {
    $(".skitter-large").skitter();
  });


