$(document).ready(function() {
    // var formData= $("form");
    $("form").submit(function() {
        var firstName = $("input[name=first_name]").val()
        var lastName = $("input[name=last_name]").val()
        var email = $("input[name=email]").val()
        var contact = $("input[name=contact]").val()
        var html = "<tr><td>" + firstName + "</td><td>" + lastName + "</td><td>" + email + "</td><td>" + contact + "</td></tr>";
    
        $("tbody").append(html);
        return false;
    });
});


