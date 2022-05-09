$(".first-button").click(function() {
	$(".title").text("You got the vaccination!Let's take a look at life after that.");
    $(".Home").hide();
    $(".option1").slideToggle();
});

$(".End1").dblclick(function() {
    $(".end1").show();
    $(".option1").hide();
    $(".title").text("You are more healthy.You can go outside and play with your friends.Remember to wear a mask and wash your hands frequently.");
    $(".title").css("background-color","green");
});

$(".second-button").click(function() {
	$(".title").text("You didn't get the vaccination!Let's see what happens next.");
    $(".Home").hide();
    $(".option2").slideToggle();
});

$(".End2").dblclick(function() {
    $(".end2").show();
    $(".option2").hide();
    $(".title").text("You can't go into some public places and you will be infected with the virus at any time.");
    $(".title").css("background-color","red");
});