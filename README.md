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

Function to be called:
```html
<script>
    var validForm = validate({
        "formName": "[FORM ID]",
        "fields": new Array({
            "name":     "[FIELD ID]", 
            "label":    "[FIELD LABEL/PLACEHOLDER]",
            "isValid":  [CUSTOM REGEX].test(fieldValue),
            "error": "My error message" // optional
        }, {
            // ... (multiple fields)
        })
    });
</script>
```

# Some comments
 - The form and fields must have id
 - If no error message is set, it display a default message: 'Invalid [FIELD LABEL]'
 - The `fields` attribute in `validForm` can have multiple fields
 - The validate function usually is returned by a onsubmit event handler