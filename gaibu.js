document.write("Hello Java!……Script"+"<br>");

function fncCall(){
	var langs = new Array("Java","PHP","JavaScript");
	document.getElementById("contents").textContent=langs[0];
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
		document.getElementById("contents").textContent="ようこそ！"+name+"さん！";
	}
}

function koshin(){
  location.reload();
}

function akaiheya(){
	window.open("akai.jpg","","width=473,height=117,top=0,left=0,location=no");
}

function raindrop(){

	var str = "メロスは激怒した。必ず、かの邪智暴虐じゃちぼうぎゃくの王を除かなければならぬと決意した。メロスには政治がわからぬ。メロスは、村の牧人である。笛を吹き、羊と遊んで暮して来た。けれども邪悪に対しては、人一倍に敏感であった。きょう未明メロスは村を出発し、野を越え山越え、十里はなれた此このシラクスの市にやって来た。メロスには父も、母も無い。女房も無い。十六の、内気な妹と二人暮しだ。この妹は、村の或る律気な一牧人を、近々、花婿はなむことして迎える事になっていた。結婚式も間近かなのである。メロスは、それゆえ、花嫁の衣裳やら祝宴の御馳走やらを買いに、はるばる市にやって来たのだ。先ず、その品々を買い集め、それから都の大路をぶらぶら歩いた。メロスには竹馬の友があった。セリヌンティウスである。今は此のシラクスの市で、石工をしている。その友を、これから訪ねてみるつもりなのだ。久しく逢わなかったのだから、訪ねて行くのが楽しみである。歩いているうちにメロスは、まちの様子を怪しく思った。ひっそりしている。もう既に日も落ちて、まちの暗いのは当りまえだが、けれども、なんだか、夜のせいばかりでは無く、市全体が、やけに寂しい。のんきなメロスも、だんだん不安になって来た。路で逢った若い衆をつかまえて、何かあったのか、二年まえに此の市に来たときは、夜でも皆が歌をうたって、まちは賑やかであった筈はずだが、と質問した。若い衆は、首を振って答えなかった。しばらく歩いて老爺ろうやに逢い、こんどはもっと、語勢を強くして質問した。老爺は答えなかった。メロスは両手で老爺のからだをゆすぶって質問を重ねた。老爺は、あたりをはばかる低声で、わずか答えた。";
	var cnt = document.timer.moji.value.length;
	
	if (cnt < str.length){
		document.getElementById("contents").textContent=str.substr(0,cnt+1);
		document.timer.moji.value = str.substr(0,cnt+1);
	}else{
		document.timer.moji.value = "";
	}
}
function charrain(){
	setInterval("raindrop()",100);
}
