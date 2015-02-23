/**
 * Created by Sravyatha on 2/22/2015.
 */
$(document).ready(function () {

    for (var i = 0; i <= 100; i++) {
        var desc="";
        if (((i % 3) == 0) && ((i % 5) == 0)) {
            console.log("fizz and buzz");
            desc +="<p>"+i+" fizz and buzz"+"</p>"+"\n";
        }
        else if ((i % 3) == 0) {
            console.log("fizz");
            desc +="<p>"+i+" fizz"+"</p>"+"\n";
        } else if ((i % 5) == 0) {
            console.log("buzz");
            desc +="<p>"+i+" buzz"+"</p>"+"\n";
        }
        else {
            console.log(i);
            desc += "<p>"+i+"</p>"+"\n";
        }
        $('#pid').append(desc);
    }
});