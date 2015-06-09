var elements=document.getElementsByTagName('li');

var liLength=elements.length;


for(var i=0;i<liLength;i++){
	//elements[i].textContent='tutaj treść';
	var tekst=elements[i].textContent;
	elements[i].textContent=elements[i].textContent.replace(tekst,"tresc");
}



var firstItem = document.getElementById('one');
var showTextContent = firstItem.textContent;
var showInnerText = firstItem.innerText;

var msg = '<p>textContent: ' + showTextContent + '</p>';
msg += '<p>innerText: ' + showInnerText + '</p>';

var el = document.getElementById('scriptResults');
el.innerHTML = msg;

firstItem.textContent = 'chleb na zakwasie';