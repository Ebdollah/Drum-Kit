var v = document.querySelectorAll(".drum");
var soundList = [
  "crash.mp3",
  "kick-bass.mp3",
  "snare.mp3",
  "tom-1.mp3",
  "tom-2.mp3",
  "tom-3.mp3",
  "tom-4.mp3",
];
var buton = ["w", "a", "s", "d", "j", "k", "l"];

let temp;
for (let i = 0; i < v.length; i++) {
  document.querySelectorAll("button")[i].addEventListener("click", function () {
    temp = soundList[i];
    var audio = new Audio("sounds/" + temp);
    audio.play();
    this.style.color = "white";
    buttonAnimation(buton[i],i)
    //document.getElementsByTagName(this).style.color = "white";
  });
  
  document.addEventListener("keydown", function (event) {
    let positn = buton.indexOf(event.key);
    temp = soundList[positn];
    var audio = new Audio("sounds/" + temp);
    audio.play();

    buttonAnimation(event.key,positn);
  });
}
function buttonAnimation(btn,position1) {
  var btnAnime1 = document.querySelector("." + btn).classList.add("pressed");
  document.querySelectorAll("button")[position1].style.color = "white";

  setTimeout(undoChange, 200);

  function undoChange() {
    document.querySelector("." + btn).classList.remove("pressed");
    document.querySelectorAll("button")[position1].style.color = "#DA0463";
  }

  //setTimeout(()=>document.querySelector("."+ btn).classList.remove("pressed"),1000);
  //var btnAnime2 = document.querySelector("."+ btn).classList.remove("pressed");
}
