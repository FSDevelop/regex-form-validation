This script allows you to validate a form with custom Regular Expressions (regex).

# Requirements
    jQuery 3.1.1 or higher

# Use
Form skeleton:
```html
<form id="formId">
    <div> <!-- Not necessarily div, but something wrapping the input -->
        <input type="[FIELD TYPE]" id="fieldId">
    </div>
</form>
```
    
# Some comments
 - The form and fields must have id
 - If no error message is set, it display a default message: 'Invalid [FIELD LABEL]'