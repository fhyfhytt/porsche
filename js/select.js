function $(that) {
  return document.getElementsByClassName(that)[0];
}

ajax("get", "js/area.json", "", function(data) {
  let arr = JSON.parse(data);
  for (var i = 0; i < arr.length; i++) {
    $("domain").innerHTML += `
    <option data=${arr[i].id}>${arr[i].area}</option>
    `;
  }
});

let arropt = $("domain").getElementsByTagName("option");

$("domain").onchange = function(ev) {
  for (let j = 0; j < arropt.length; j++) {
    if (arropt[j].selected) {
      ajax("get", "js/area.json", "", function(data) {
        let arr = JSON.parse(data);
        for (var i = 0; i < arr.length; i++) {
          $("country").innerHTML += `
    <option value=${arr[j].country[i]}>${arr[j].country[i]}</option>
    `;
        }
      });
    }
  }
};
document.onmousewheel = function() {
  console.log(document.documentElement.scrollTop);
  if (document.documentElement.scrollTop > 850) {
    $("move").style.position = "fixed";
    $("move").style.zIndex = "999";
    $("move").style.top = "0";
    $("move").style.left = "0x";
  } else {
    $("move").style.position = "relative";
    $("move").style.top = "0";
    $("move").style.left = "0px";
  }
};
