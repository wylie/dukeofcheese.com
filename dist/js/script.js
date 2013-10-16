$(function() {
	// show the form
	$('.formlaunch').on('click', function() {
		$('.form').toggleClass('open');
	});
	// send an email
	$('button').on('click',function() {
		var name = $('#name').val();
			email = $('#email').val();
			note = $('#note').val();		
		if( name && email && note ) {
			$.post(
				'rsrc/email.php',
				{ name: name, email: email, note: note },
				function(data){
					$('.infofield').val('');
					$('.msg').removeClass('error').addClass('success').text('Thanks!');
					$('.form').delay('1500').css('display', 'none');
				}
			);
			return false;
		} else {
			$('.msg').removeClass('success').addClass('error').text('whoops!');
		}
	});
});