/**
 * Created by Sravyatha on 2/14/2015.
 */
$(document).ready(function(){

        var postDetails={
            url:"http://localhost:9300/createUserDetails",
            dataType:'json',
            type: 'POST',
            timeOut:10000,
            success: function(data, status){
                alert("This is a success message"+status);
            },
            error: function(){
                alert("This shows an error");
            },
            complete: function(){
            }
        };

    function formValidate(myForm){
    
    myForm.validate({
        rules: {
            name: {
                required: true
            },
            addressID: {
                required: true,
                minlength: 5
            },
            emailID: {
                required: true,
                minlength: 3
            },
            phoneID: {
                required: true,
                minlength: 5,
                digits: true
            }
        },
        messages: {
            name: {
                required: "Name is a required field",
                minlength: "please enter atleast 5 characters"
            },
            addressID: {
                required: "Your address is mandatory",
                minlength: "Please enter a valid address"
            },
            emailID: {
                required: "Email id is required",
                minlength: "Please enter a valid email address with @."
            },
            phoneID: {
                required: "This phone number is necessary",
                minlength: "your phone number must have 10 digits."
            }
        }
    });
    }
    $('#submitButtonID').click(function(event){
        event.stopPropagation();
        event.preventDefault();
        var myForm =   $('#formDetailsID');
        formValidate(myForm);
         
        var isValid=myForm.valid();
        if( isValid) {
            var userData = {};

            userData.name = $('#nameID').val();
            userData.address = $('#addressID').val();
            userData.email = $('#emailID').val();
            userData.phone = $('#phoneID').val();
            userData.uid=$('#userID').val();

            postDetails.data = userData;
            console.log(userData);
            $.ajax(postDetails);
            return false;

        }else{

            console.log("Invalid Form :");
            return false;
        }
    });

    $('#showTableButton').click(function() {
        $('#formDetailsID').hide();
        var getDetailsInTable = {
            url: "http://localhost:9300/GetUserDetails",
            type: 'GET',
            timeOut: 10000,
            dataType: "JSON",
            success: function (data, status) {
                var userdata = data.UserList;
                var outputString = "";
                for (var i = 0; i < userdata.length; i++) {

                    outputString += "<tr><td>" + (i+1) + "</td>"
                    + "<td>" + userdata[i].name + "</td><td>"
                    + userdata[i].address + "</td><td>"
                    + userdata[i].email + "</td><td>"
                    + userdata[i].phone + "</td><td>"
                    + userdata[i].userid +"</td></tr>";
                }
                $('#employeeListTable tbody').empty();
                $('#employeeListTable tbody').append(outputString);
                alert("Your GET has been successfully executed with status: "+status);
            },
            error: function () {
                alert("Table cannot be displayed");
            },
            complete: function () {
            }
        };
        $.ajax(getDetailsInTable);

        return false;
    });

});