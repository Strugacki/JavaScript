$('li:contains("pierwszy")').replaceWith('<li id="first">ktorys element</li>');
var $nowy=$('<li id="fourth">Nowy element</li>');
$('li#third').after($nowy);
$('li#fourth').prepend('Dodanie w znaczniku ');
$('li').each(function(){
	$(this).html('<em>'+$(this).text()+'</em>');
});
var $nowy2=$('<li>'+$('ul').text()+'</li>');
$('li#fourth').before($nowy2);
$('li#fourth').attr('id','kukulka');






$(function(){

$('ul').on('click',':not(#first)',function(e){

	$(e.target).append('<span> he</span>').stopPropagation();
});


$('li').on('mouseout',function(){
	$(this).children('em').children('span').remove();
});

});









$(function(){

	$('h2').hide().slideDown();
	$('li[id!="first"]').hide().each(function(index){
		$(this).delay(700*index).fadeIn(700);
	});
});


$(function(){

$('li').on('click',function(){
	$(this).animate({
		paddingLeft: '+=50'
	},500,function(){
		$(this).animate({
			paddingLeft: '-=50'
		},500);
	});
});

});
