// add contact functionality
$("#submit").on("click", function(event) {
    event.preventDefault();
    var newContact = {
        firstName: $("#firstName").val().trim(),
        lastName: $("#lastName").val().trim(),
        contactType: $("#contactType").val(),
        phoneNumber: $("#phoneNumber").val().trim(), // if nothing is here, we get an empty string – a falsy value, like zero, null, undefined, ""
        emailAddress: $("#emailAddress").val().trim()
    }

    $.post("/api/contacts", newContact).then(function(response) {
        location.href = "/";
    });
})
// filter contact by type functionality
$("#filterContacts").on("change", function() {
    var type = $(this).val().toLowerCase();
    location.href = `/${type}`;
}); 

// delete contact functionality
$(".delete").on("click", function() {
    var id = $(this).parents("tr").data("id");
    $.ajax({
        method: "DELETE",
        url: `/api/contacts/${id}`
    }).then(function(response) {
        // there are 535 ways to do this:
        location.reload();
    });
})