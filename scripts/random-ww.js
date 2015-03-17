//var urlww = 'https://www.random.org/strings/?num=10&len=10&upperalpha=on&loweralpha=on&unique=on&format=plain&rnd=new';
var urlww = 'https://baconipsum.com/api/?type=all-meat&start-with-lorem=0&sentences=1';
var intInterval;
self.addEventListener('message', function(e) {
	if (e.data === 'stop'){
		clearInterval(intInterval);
		intInterval = 0;
	} else if (e.data === 'start' && intInterval == 0) {
		intInterval = setInterval(getData,2000);
	}
}, false);
intInterval = setInterval(getData,2000);
function getData(){
	try {
		var xhr = new XMLHttpRequest();
		xhr.open('GET', urlww, false);
		xhr.send();
	} catch (e) {
		//return ''; // turn all errors into empty results
	}
	var response = xhr.responseText.replace(/\]|\[|\"/g,'').replace(/\\r/g,',');
	self.postMessage(response);
}
