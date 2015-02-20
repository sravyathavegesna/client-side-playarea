$(document).ready(function() {
    var legends = [{
        name: 'Types',
        values: [{
            name: 'Cup',
            price: 0.75
        }, {
            name: 'Wafer Cone',
            price: 0.90
        }]
    }, {
        name: 'Sundaes',
        values: [{
            name: 'One Scoop',
            price: 2.75
        }, {
            name: 'Two scoops',
            price: 3.90
        }, {
            name: 'Three scoops',
            price: 4.80
        }]
    }, {
        name: 'Flavor List:',
        values: [{
            name: 'Strawberry',
            price: 2.75
        }, {
            name: 'Chocolate',
            price: 4.90
        }, {
            name: 'Vanilla',
            price: 3.80
        }]
    }];

    var fieldsets = "";
    var totalprice = 0;
    for (var i = 0; i < legends.length; i++) {
        fieldsets += '<fieldset><legend>' + legends[i].name + '</legend>';
        var temp = legends[i].values;
        for (var j = 0; j < temp.length; j++) {
            fieldsets += '<input type="checkbox" name="menu">' + temp[j].name + '</input><span class="pull-right">' + temp[j].price + '</span><br>';
            /*console.log(temp[j].name);
            console.log(temp[j].itemprice);*/
            /*if((temp[j].name).attr('checked'))
            {
                totalprice += temp[j].price;
            }*/
        }
        fieldsets += '<fieldset>';
    }

    console.log("Your total amount is:" + totalprice);
    $('#data').html(fieldsets);

    "input:checkbox[name='tuesday[]']:checked"
    var totalmenu = [];
    $('#calculatebutton').click(function() {
        for (var i = 0; i < legends.length; i++) {
            var temp = legends[i].values;
            for (var j = 0; j < temp.length; j++) {
                //if((temp[j].name).attr('checked','checked'))
                if ("input:checkbox[name='menu']") {
                    totalprice += temp[j].price;
                } else {
                    console.log();
                }
            }
        }
    });
        console.log(totalprice);
});