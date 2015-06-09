
function getTarget(e){
	if(!e){
		e = window.event;
		}
		return e.target || e.srcElement;
}



function usun(e){

	var element=getTarget(e);
	var rodzic = element.parentNode;
	var dziadek = element.parentNode.parentNode;
	dziadek.removeChild(rodzic);

	if(e.preventDefault){
		e.preventDefault();
	}else{
		e.returnValue= false;
	}


}





var lista = document.getElementsByTagName('ol')[0];

if(lista.addEventListener){
	lista.addEventListener('click',function(e){usun(e)},false);
}else{

	lista.attachEvent('onclick',function(e){usun(e);});
}

var tresc='sdgagadfga';

var tekst = document.createTextNode(tresc);
var ele = document.createElement('li');
ele.appendChild(tekst);

lista.appendChild(ele);
