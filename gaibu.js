document.write("Hello Java!……Script"+"<br>");

function fncCall(){
	var langs = new Array("Java","PHP","JavaScript");
	for(var i=0;i<langs.length;i++){
		document.write(langs[i]+"<br>");
	}
	alert("こんにちはJava！！！！");
}

function changeClr(){
	var flg;
	flg = confirm("背景の色を変えてもいいですか？");
	if(flg){
		document.bgColor = "gold";
	}
}

function inputName(){
	var name;
	name = prompt("お名前を教えてください","");
	if(name == ""){
		name = "Javaおじさん";
	}
	if(name == "太郎"){
		location.href="kakure.html";
	}else{
		document.write("<center>");
		document.write("ようこそ、<b>"+name+"</b>さん！");
		document.write("</center>");
	}
}

function koshin(){
  location.reload();
}

function akaiheya(){
	window.open("akai.jpg","","width=473,height=117,top=0,left=0,location=no");
}