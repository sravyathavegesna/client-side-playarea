$(document).ready(function() {
    var legends = [{
        name: 'Types',
        values: [{name:'Cup',price:'$.75'}, {name:'Wafer Cone', price:'$.90'}]
    }, {
        name: 'Sundaes',
        values: [{name:'One Scoop',price:'$.75'}, {name:'Two scoops', price:'$.90'}, {name:'Three scoops', price:'$4.80'}]
    }, {
        name: 'Flavor List:',
        values: [{name:'Strawberry',price:'$.75'}, {name:'Chocolate', price:'$.90'}, {name:'Vanilla', price:'$4.80'}]
    }];

    var fieldsets = "";

    for (var i = 0; i < legends.length; i++) {
        fieldsets += '<fieldset><legend>' + legends[i].name + '</legend>';
        var temp = legends[i].values;
        for (var j = 0; j < temp.length; j++) {
            fieldsets += '<input type="checkbox">' + temp[j].name + '</input><span class="pull-right">'+ temp[j].price+'</span><br>';
            /*console.log(temp[j].name);
            console.log(temp[j].itemprice);*/
        }
        fieldsets += '<fieldset>';
    }

    $('#data').html(fieldsets);
    
    
});