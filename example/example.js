$(document).ready(function() {
    $('form[id$=form]').submit(function() {
        var email = $(this).find('input[id$=email]').val();
        var password = $(this).find('input[id$=password]').val();
        
        // Show error if it's necessary, return true if success
        return validate({
            "formName": "form",
            "fields": new Array({
                "name":     "email", 
                "label":    "Email",
                "isValid":  /^[\w\.]+@\w+\.\w{2,4}(\.\w{2,4})?$/i.test(email)
            }, {
                "name":     "password",
                "label":    "Password",
                "isValid":  /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}$/.test(password),
                "error":    "Invalid Password: minimum 8 characters at least 1 alphabet, 1 number and 1 special character"
            })
        });
    });
});