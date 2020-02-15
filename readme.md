<h3>jQuery Validator<h3>

Create a form element with class name as data-validation-check. <br />
Eg : &lt;form class="data-validation-check" /&gt;

In your form element add a custom data-validation rule. <br />
Eg: &lt;input type="text" data-validation="required|min:8|max:10|specail" /&gt;
<br />
Use pipe operator (|) to speate different validation rules.

Validation Rules <br />
required  - To validate if field has some value<br />
min:8 - To validate if field length has minimum 8 character<br />
max:12 - To validate if field length has maximum 12 character<br />
phone - To validate if field contains a valid phone number<br />
email - To validate if field contains a valid email id <br/> 
specail - To validate if field has a specail character <br/>
