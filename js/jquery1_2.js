$(function(){

	$('h2').hide().delay(700).slideDown();



	var $list=$('li:not(#slideDown)');
	$($list).hide();

	$('li:first').on('click',function(){

		if($('li:first').is('#slideDown')){
			$('li:first').on('click',function(){
			$('li#slideDown').text('↑');
			var $list=$('li:not(#slideDown)');
			$($list).each(function(index){
				$(this).delay(700 * index).fadeIn(700);
			});
			$('li#slideDown').attr('id','slideUp');
		});
	}else{
		$('li:first').on('click',function(){
		var $list=$('li:not(#slideUp)');
		$('li#slideUp').text('↓');
		$($list).each(function(index){
				$(this).fadeOut(300);
			});
		$('li#slideUp').attr('id','slideDown');
		});

	}
	});
});