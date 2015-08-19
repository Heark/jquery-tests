$(document).ready(function(){
    $('div').height("200px");
    $('div').width("200px");
    $('div').css("border-radius", "10px");
    $("div").append("<font color = white size =4><b><center><br>Click Me!</center></b>")
    $("div").click(function(){
    $(this).fadeOut("fast", 0)    
})
})
