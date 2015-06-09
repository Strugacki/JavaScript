$(function(){

$('h2').hide().slideDown(700);
$('#addElement').hide();



var $lista=$('ul');
var $form=$('#addElement');



function updateCount(){
	var items=$('li[class!=complete]').length;
	$('#counter').text(items);
}
updateCount();

//Function to batton showing form
var $addButton=$('#addNewElement');
$addButton.on('click',function(){

	$(this).hide();
	$form.show();
});

//Function adding new element
$form.on('submit',function(){

var text=$('input:text').val();
if(text.length!=0){
	var $newElement=$('<li class="incomplete">'+text+'</li>');
}
$lista.append($newElement);
updateCount();
$form.hide();
$('input:text').val('');
$addButton.show();

});


$lista.on('click','li', function(){

	if($(this).hasClass('incomplete')){
	$(this).remove();
	var text=$(this).text();
	var $last=$('<li class="complete">'+text+'</li>');
	$lista.append($last);
	$('li:last').hide();
	$('li:last').fadeIn();
	$(this).remove();
}else{

	$(this).animate({
		marginLeft: '+=50'

	},700,'swing',function(){$(this).remove()})	
}
updateCount();
});

});