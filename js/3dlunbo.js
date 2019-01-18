function $(that) {
  return document.getElementsByClassName(that)[0];
}
var arrimg = $("car-lunbo").getElementsByTagName("img");
var classes = ["p1", "p2", "p3", "p4", "p5"];
var arrbtn1 = $("carlunbo").getElementsByClassName("img1")[0];
var arrbtn2 = $("carlunbo").getElementsByClassName("img2")[0];
let lock = false;
arrbtn1.onclick = function() {
  // 在动画播放的时候将锁锁住，判断动画是否在播放，如果在播放，锁住，终止函数的执行用return，没播放就解锁，所以默认是解锁的；
  // 一单击的时候就锁住动画， 所以单击的时候让lock = true;

  if (lock == true) {
    return;
  }
  // 锁定
  lock = true;
  setTimeout(function() {
    lock = false;
  }, 2000);
  // 将classes的第一个取出来， 放在最后一个位置
  var firstclass = classes.shift();
  classes.push(firstclass);
  console.log(classes);
  // 然后将classes给相应的class
  for (var i = 0; i < classes.length; i++) {
    arrimg[i].className = classes[i];
  }
};
arrbtn2.onclick = function() {
  // 在动画播放的时候将锁锁住，判断动画是否在播放，如果在播放，锁住，终止函数的执行用return，没播放就解锁，所以默认是解锁的；
  // 一单击的时候就锁住动画， 所以单击的时候让lock = true;
  if (lock == true) {
    return;
  }
  // 锁定
  lock = true;

  setTimeout(function() {
    lock = false;
  }, 2000);
  // var lastclass = classes.pop();
  classes.unshift(classes.pop());
  console.log(classes);
  for (var i = 0; i < classes.length; i++) {
    arrimg[i].className = classes[i];
  }
};
