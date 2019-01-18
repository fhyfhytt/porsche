function $(that) {
  return document.getElementsByClassName(that)[0];
}

ajax("get", "js/news.json", "", function(data) {
  let arr = JSON.parse(data);
  // console.log(arr);
  for (var i = 0; i < arr.length; i++) {
    $("shen1").innerHTML += `
    <div class="news-box">
    <p>>${arr[i].title}</p>
    <p>${arr[i].contant}</p>
  </div>`;
  }
});
