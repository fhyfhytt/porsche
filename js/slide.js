function $(that) {
    return document.getElementsByClassName(that)[0];
  }
  var key=true
  
  $("slider").onmousedown=function(ev){
      if(key){
         key=false
      a=ev.clientX}
    //   $("slider").style.background="black"
      document.onmouseup=function(ev){
    document.onmousemove="";
    // $("slider").style.backgroundColor="#d5001c"
}
      document.onmousemove=function(ev){
          $("slider").style.left=ev.clientX-a+"px"
          
          
          if(parseFloat($("slider").style.left)<=0){
            $("slider").style.left=0+"px"
          }else if(parseFloat($("slider").style.left)>1000){
            $("slider").style.left=1000+"px"
          }
          
          k=(parseFloat($("slider").style.left))/($("slide").offsetWidth-200)
          $("slide").style.left=-(k/0.33)*$("slide").offsetWidth+"px"
    }
     
      }
    
