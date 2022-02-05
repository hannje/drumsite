
var btlist = document.querySelectorAll("button") 

for(i=0; i < 7; i++)
{
 document.querySelectorAll("button")[i].addEventListener("click",handleClick)
}


function handleClick(){
//    alert("got clicked")

var btnid = this.innerHTML;

//console.log(btnid)

playBeat(btnid)


//audio.play()

}

addEventListener("keydown",function(event)
{
//    this.alert("key")

        var btnid = event.key;
//        console.log(event)

playBeat(btnid)



})

function playBeat(btnid)
{

if (btnid == "w") {
  var audio = new Audio("./sounds/crash.mp3");

  audio.play();
} else if (btnid == "s") {
  var audio = new Audio("./sounds/kick-bass.mp3");
  audio.play();
} else if (btnid == "d") {
  var audio = new Audio("./sounds/snare.mp3");
  audio.play();
} else if (btnid == "j") {
  var audio = new Audio("./sounds/tom-1.mp3");
  audio.play();
} else if (btnid == "k") {
  var audio = new Audio("./sounds/tom-2.mp3");
  audio.play();
} else if (btnid == "l") {
  var audio = new Audio("./sounds/tom-3.mp3");
  audio.play();
} else if (btnid == "a") {
  var audio = new Audio("./sounds/tom-4.mp3");
  audio.play();


}
}