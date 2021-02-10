// add contact functionality
$("#submit").on("click", function(event) {
    event.preventDefault();
    var newContact = {
        firstName: $("#firstName").val().trim(),
        lastName: $("#lastName").val().trim(),
        contactType: $("#contactType").val(),
        phoneNumber: $("#phoneNumber").val().trim(),
        emailAddress: $("#emailAddress").val().trim()
    }

    $.post("/api/contacts", newContact).then(function(response) {
        location.href = "/";
    });
})
// filter contact by type functionality

// delete contact functionality