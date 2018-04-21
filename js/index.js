//$("p").on("click", function() {
//console.log("hey");
// $(this).hide(2000);
//});

$(".red").on("click", function() {
  $(this).fadeOut(5000);
});

$("li").on("click", function() {
  console.log("this is li:", $(this).html());
});

//$("button").click(function() {
// $("input").toggle();
//});

$("input").keyup(function() {
  var name = $(this).val();
  console.log(name);
  var fullThing = "Hello" + name;

  $("h1").text(fullThing);
});

$("#sign-up-form").submit(function() {
  e.preventDeafult();
  console.log("hey;", $("input"));

  var username = $("input='username']").val();
  console.log("username is: ", username);
  var password = $("input[name='password']").val();
  // if user puts username = "ironhack"
  // and password = "ironhack123", he's good to go
});

if (username === "ironahck" && password === "ironhack123") {
  console.log("all good.");
} else {
  console.log("sorry dude");
}
