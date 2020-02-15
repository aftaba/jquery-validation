$(document).ready( function(){
	$('form.data-validation-check').submit( function( e){
		$('.valid-err').remove();
		e.preventDefault();
		var formElements = $( '*[data-validation]');
		$.each( formElements, function( i, formElement) {
			validationRule = $(this).attr('data-validation');
			validationRuleArray = validationRule.split('|');
			for( i=0; i<validationRuleArray.length; i++ ) {
				if ( validationRuleArray[i] == "required" ) {
					valid_required( formElement );
				}
			}
		});
	});
});


function valid_required( formElement ) {
	if ( "" == formElement.value ) {
		$('<span class="valid-err">This field is required</span>').insertAfter( formElement );
	}
}
function valid_min( formElement ) {
	if ( "" == formElement.value ) {
		$('<span class="valid-err">This field is required</span>').insertAfter( formElement );
	}
}