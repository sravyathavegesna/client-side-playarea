$(document).ready(function () {
    var legends = [{
        name: 'Types',
        values: [{
            id: 'cupId',
            name: 'Cup',
            price: 0.75
        }, {
            id: 'coneId',
            name: 'Wafer Cone',
            price: 0.90
        }]
    }, {
        name: 'Sundaes',
        values: [{
            id: 'oneScoopId',
            name: 'One Scoop',
            price: 2.75
        }, {
            id: 'twoScoopId',
            name: 'Two scoops',
            price: 3.90
        }, {
            id: 'threeScoopId',
            name: 'Three scoops',
            price: 4.80
        }]
    }, {
        name: 'Flavor List:',
        values: [{
            id: 'berryId',
            name: 'Strawberry',
            price: 2.75
        }, {
            id: 'chocId',
            name: 'Chocolate',
            price: 4.90
        }, {
            id: 'vanillaId',
            name: 'Vanilla',
            price: 3.80
        }]
    }];

    var fieldsets = "";
    for (var i = 0; i < legends.length; i++) {
        fieldsets += '<fieldset><legend>' + legends[i].name + '</legend>';
        var temp = legends[i].values;
        for (var j = 0; j < temp.length; j++) {
            fieldsets += '<input id="' + temp[j].id + '" type="checkbox">' + temp[j].name + '</input><span class="pull-right">' + temp[j].price + '</span><br>';
        }
        fieldsets += '<fieldset>';
    }

    $('#data').html(fieldsets);

    $('#calculatebutton').click(function () {
        var totalprice = 0;
        var receipt ="";
        var itemprice ="";
        for (var i = 0; i < legends.length; i++) {
            var temp = legends[i].values;
            for (var j = 0; j < temp.length; j++) {
                //if((temp[j].name).attr('checked','checked'))
                if ($('#' + (temp[j].id)).prop('checked') == true) {
                    receipt +="<p>"+temp[j].name+"</p>";
                    itemprice +="<p>"+temp[j].price+"</p>";
                    totalprice += temp[j].price;
                } else {
                    console.log();
                }
            }
        }
        console.log(totalprice);
        $('#recieptDetails').html(receipt);
        $('#itemId').html(itemprice);
        $('#totalId').html(totalprice);
    });

});