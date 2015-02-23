/**
 * Created by Sravyatha on 2/22/2015.
 */
$(document).ready(function(){
    var buttons="";
    var count=0;
        $('#firstbutton').click(function(){
        count++;
        buttons += "<p><button type='button' class='btn btn-primary' id='nextbuttons'>"+"Clicked button : "+count+"</button></p>";
            $('#pid').html(buttons);
    });
});