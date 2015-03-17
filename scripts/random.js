//var url = 'https://www.random.org/strings/?num=10&len=10&upperalpha=on&loweralpha=on&unique=on&format=plain&rnd=new';
var url = 'https://baconipsum.com/api/?type=all-meat&start-with-lorem=0&sentences=1';
function getJSON(URL,success){
	var ud = 'json'+(Math.random()*100).toString().replace(/\./g,'');
	window[ud]= function(o){
		o.flag = 'successful';
		success&&success(o);
	};
	document.getElementsByTagName('body')[0].appendChild((function(){
		var s = document.createElement('script');
		s.type = 'text/javascript';
		s.src = URL.replace('callback=?','callback='+ud);
		return s;
	})());
}

function getData(){
	var text;
	try {
		var xhr = new XMLHttpRequest();
		xhr.open('GET', url, false);
		xhr.onreadystatechange = function() {
			if (xhr.readyState != 4)  { console.log(xhr.readyState); return; }
			else {
			console.log('done');
			writeData(xhr.responseText.replace(/\]|\[|\"/g,'').replace(/\\r/g,','));}
			}
		xhr.send();
	} catch (e) {
	console.log(e);
		//return ''; // turn all errors into empty results
	}
}
