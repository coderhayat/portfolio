function icon(){
    var x = document.getElementById("menu");
    if(x.style.display == "none")
    {
        x.style.display = "block";
    }
    else
    {
        x.style.display = "none";
    }
}

var counter=1;
setInterval(function(){
    document.getElementById('radio' + counter).checked = true;
    counter++;
    if(counter > 4){
        counter = 1;
    }
}, 5000);

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