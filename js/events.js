function checkUsername(){
var message=document.getElementsByTagName('div')[0];
var length=this.value.length;


if(length<5){
	var wiadomosc=document.createElement('p');
	var tresc=document.createTextNode('za krotka nazwa uzytkownika!!');
	wiadomosc.appendChild(tresc);
	if(message.firstChild.nextSibling){
		message.firstChild.nextSibling.textContent='za krotka nazwa uzytkownika!!';
	}else{
	wiadomosc.appendChild(tresc);
	message.appendChild(wiadomosc);
}
}else{
	var wiadomosc=document.createElement('p');
	var tresc=document.createTextNode("Nazwa użytkownika jest prawidłowa!!");
	wiadomosc.appendChild(tresc);
	if(message.firstChild.nextSibling){
		message.firstChild.nextSibling.textContent='Nazwa użytkownika jest prawidłowa!!';
	}else{
	wiadomosc.appendChild(tresc);
	message.appendChild(wiadomosc);
}
}
}

var e=document.getElementById('username');
//e.addEventListener('blur',checkUsername,false);
if(e.addEventListener){
	e.addEventListener('blur',checkUsername,false);
}else{
	e.attachEvent('onblur',function(){checkUsername();});
}
