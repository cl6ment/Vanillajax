function ajax(method, url, params="", DOMelement=""){

	var request = new XMLHttpRequest();

	request.onreadystatechange = function(e){
		if(this.readyState === XMLHttpRequest.DONE){
			if(DOMelement != ""){
				document.querySelector(DOMelement).innerHTML = this.responseText;
				document.querySelector(DOMelement).style.left = "0px";
			}
		}
	}

	if(method === "GET"){
		request.open(method, url+param(params, "GET"));
		request.send();
	} else {
		request.open(method, url);
		request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
		request.send(param(params, "POST"));
	}

}

function param(data, req){
	if(data != ""){
		var obj = Object.keys(data);

		if(req === "GET"){
			var stringRequest = "?";
		} else {
			var stringRequest = "";
		}

		for(var i=0;i<obj.length;i++){
			stringRequest += obj[i]+"="+data[obj[i]];
			if(i<obj.length-1){
				stringRequest += "&";
			}
		}

	} else {
		var stringRequest = "";
	}
	return stringRequest;
}