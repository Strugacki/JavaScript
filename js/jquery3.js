$(function(){


var $field=$('#elementField');
var $submit=$('#submitElement');
var $add=$('#addElement');



$('#add').hide();


$add.on('click',function(){

	$add.hide();
	$('#add').show();
});


$('#add').on('submit',function(e){
	e.preventDefault();


	var nowy=$('input:text').val();

	if(nowy.length!=0){
	$('li:last').after('<li>'+nowy+'</li>');
	}
	$('#add').hide();
	$add.show();
	$('input:text').val('');


});


var $window=$(window);
var $slideAdd=$('#slideAdd');
var end=$window.height()-500;

$window.on('scroll',function(){

if(end<$window.scrollTop()){
	$slideAdd.animate({
	'left': '0px'},250;
)}else{
	$slideAdd.stop(true).animate({
	'left': '-360px'},250;
	}


});



});