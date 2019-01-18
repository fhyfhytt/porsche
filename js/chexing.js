		var oHead=document.getElementsByClassName('mui-bar')[0];
		ajax("get","head.html","",(a)=>{
			oHead.innerHTML=a;	
		})
		var oFoot=document.getElementsByClassName('foot')[0];
		ajax("get","end.html","",(a)=>{
			oFoot.innerHTML=a;	
		})
	