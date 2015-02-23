/**
 * Created by Sravyatha on 2/22/2015.
 */
$(document).ready(function(){
    var buttons="";
        $('#firstbutton').click(function(){

        buttons += "<p><button type='button' class='btn btn-primary' id='nextbuttons'>"+"Click me to populate"+"</button></p>";
            $('#pid').html(buttons);
    });
});