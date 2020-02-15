var error = false;
$(document).ready( function(){
	$('form.data-validation-check').submit( function( e){
		$('.validate-error').remove();
		var formElements = $( '*[data-validation]');
		$.each( formElements, function( i, formElement) {
			validationRule = $(this).attr('data-validation');
			validationRuleArray = validationRule.split('|');
			console.log( validationRuleArray );
			for( i=0; i<validationRuleArray.length; i++ ) {
				if ( validationRuleArray[i] == "required" ) {
					validate_required( formElement, validationRuleArray[i] );
				} 
				if ( validationRuleArray[i].indexOf( "min:") >= 0 ) {
					validate_min( formElement, validationRuleArray[i] );
				}
				if ( validationRuleArray[i].indexOf( "max:") >= 0 ) {
					validate_max( formElement, validationRuleArray[i] );
				}
				if ( validationRuleArray[i] == "special" ) {
					validate_special( formElement, validationRuleArray[i] );
				}
				if ( validationRuleArray[i] == "email" ) {
					validate_email( formElement, validationRuleArray[i] );
				}
				if ( validationRuleArray[i] == "phone" ) {
					validate_phone( formElement, validationRuleArray[i] );
				}
				if ( validationRuleArray[i] == "number" ) {
					validate_number( formElement, validationRuleArray[i] );
				}
			}
		});
		if ( error ) {
			return false;
		}
		return true;
	});
});


function validate_required( formElement, rule ) {
	if ( "" == formElement.value ) {
		error = true;
		$('<span class="validate-error">This field is required</span>').insertAfter( formElement );
	} else {
		error = false;
	}
}
function validate_min( formElement , rule ) {
	min_rule = rule.split( ':')[1];
	if ( formElement.value.length < min_rule ) {
		error = true;
		$('<span class="validate-error">Must contain minimum '+min_rule+' character</span>').insertAfter( formElement );
	} else {
		error = false;
	}
}
function validate_max( formElement , rule ) {
	max_rule = rule.split( ':')[1];
	if ( formElement.value.length > max_rule ) {
		error = true;
		$('<span class="validate-error">Must contain maximum '+max_rule+' character</span>').insertAfter( formElement );
	} else {
		error = false;
	}
}
function validate_special( formElement, rule ) {
	if( /^[a-zA-Z0-9- ]*$/.test(formElement.value) == true ) {
		error = true;
		$('<span class="validate-error">Must contain special character</span>').insertAfter( formElement );
	} else {
		error = false;
	}
}
function validate_email( formElement, rule ) {
	if( /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(formElement.value) == false ) {
		error = true;
		$('<span class="validate-error">Must be a valid email address</span>').insertAfter( formElement );
	} else {
		error = false;
	}
}
function validate_phone( formElement, rule ) {
	if( /^(\+91[\-\s]?)?[0]?(91)?[789]\d{9}$/.test(formElement.value) == false ) {
		error = true;
		$('<span class="validate-error">Must be a valid phone number</span>').insertAfter( formElement );
	} else {
		error = false;
	}
}
function validate_number( formElement, rule ) {
	if( /^\d+$/.test(formElement.value) == false ) {
		error = true;
		$('<span class="validate-error">Must be a number</span>').insertAfter( formElement );
	} else {
		error = false;
	}
}