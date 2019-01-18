function $(that) {
  return document.getElementsByClassName(that);
}
var oUl = $("lunbo")[0].getElementsByTagName("ul");
var arrLi = oUl[0].getElementsByTagName("li");
var arrBtn = document
  .getElementsByTagName("article")[0]
  .getElementsByTagName("div");
var arrBall = $("range")[0].getElementsByTagName("li")[0];
let a = 0;
var lft 
var rgt
var kai = true;
function rgt() {
  if (kai) {
    kai = false;
    if (oUl[0].style.left == "-8000px") {
      a = 0;
      oUl[0].style.left = -arrLi[a].offsetWidth + "px";
      oUl[0].style.transition = "";
    }
    a++;
    oUl[0].style.left = -(a + 1) * arrLi[a].offsetWidth + "px";
    oUl[0].style.transition = "2s ease";

    arrBall.style.left = a * 400 + "px";
    arrBall.style.transition = "2s ease";
    setTimeout(function() {
      if (a > 3) {
        a = 0;
        arrBall.style.left = a * 400 + "px";
        arrBall.style.transition = "none";
      }
    }, 0);
    setTimeout(function() {
      kai = true;
    }, 2000);
  }
}
arrBtn[1].addEventListener("click", rgt());
function lft() {
  if (kai) {
    kai = false;
    a--;
    oUl[0].style.left = -(a + 1) * arrLi[a + 1].offsetWidth + "px";
    oUl[0].style.transition = "2s ease";

    arrBall.style.left = a * 400 + "px";
    arrBall.style.transition = "2s ease";
    setTimeout(function() {
      if (a == -1) {
        a = 3;
        arrBall.style.left = a * 400 + "px";
        arrBall.style.transition = "none";
      }
    }, 2000);
    setTimeout(function() {
      kai = true;
      if (oUl[0].style.left == "0px") {
        a = 3;
        oUl[0].style.left = -6400 + "px";
        oUl[0].style.transition = "";
      }
    }, 0);
  }
}
arrBtn[0].addEventListener("click",lft() );

time=setInterval(rgt,2000)
$("lunbo")[0].onmouseover=function(){
clearInterval(time)
}
$("lunbo")[0].onmouseout=function(){
  time=setInterval(rgt,2000)
  }

