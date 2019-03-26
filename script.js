$(".blue").hide();
$ (".red").click(function() {
    $(".blue").show();
});
$(".blue").hover(function(){
    $("h1").text("you win");
    $("h2").text("scroll to the top");
});