var xhr = new XMLHttpRequest();

xhr.onload = function(){
	if(xhr.status===200){
		responseObject = JSON.parse(xhr.responseText);
		var newcontent = '';
		for(var i=0;i<responseObject.wycieczki.length;i++){
			newcontent+='<div class="events">';
			newcontent+='<h4>'+responseObject.wycieczki[i].lokalizacja+'</h4>';
			newcontent+='<p>Godzina: '+responseObject.wycieczki[i].godzina+'</p>';
			newcontent+='</div>';
		}

		$('#content').html(newcontent);
	}

};

xhr.open('GET','ajax.json',true);
xhr.send(null);
$('a').on('click',function(e){
e.preventDefault();
var url=this.href;
$('#link').load(url+'#link').hide().fadeIn('slow');

});