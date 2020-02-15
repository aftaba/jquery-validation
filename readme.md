<h3>jQuery Validator<h3>

Create a form element with class name as data-validation-check. <br />
Eg : &lt;form class="data-validation-check" /&gt;

In your form element add a custom data-validation rule. <br />
Eg: &lt;input type="text" data-validation="required|min:8|max:10|special" /&gt;
<br />
Use pipe operator (|) to speate different validation rules.

<strong>Validation Rules </strong><br />
required  - To validate if field has some value<br />
min:8 - To validate if field length has minimum 8 character<br />
max:12 - To validate if field length has maximum 12 character<br />
phone - To validate if field contains a valid phone number<br />
email - To validate if field contains a valid email id <br/> 
special - To validate if field has a special character <br/>
//TODO <br />
caps:1 - To validate if field has minimum one caps letter <br/>
specail:3 - To validate if field has minumum 3 specail character <br />
not:PQR - To validate if the form value doesnot match the 'PQR'<br/>
SELECT, TEXTAREA, RADIO, CHECKBOX
