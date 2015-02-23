/**
 * Created by Sravyatha on 2/14/2015.
 */
var express = require('express');
var http = require('http');

var formidable = require("formidable");

var app = express();
app.set('port', 9300);
app.use(express.static(__dirname + '/'));

var q = require('q');

//var connection  = require('express-myconnection');
var mysql = require('mysql');
/**
 dbOptions = {
    host: '160.153.71.36',
    user: 'user1',
    password: 'Welcome123',
    port: 3306,
    database : 'formdata'

};
 **/

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});


dbOptions = {
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: 'admin',
    database: 'usersdb'
}


var connection;


function handleDisconnect() {
    connection = mysql.createConnection(dbOptions); // Recreate the connection, since

    // the old one cannot be reused.

    connection.connect(function (err) {              // The server is either down
        if (err) {                                     // or restarting (takes a while sometimes).
            console.log('error when connecting to db:', err);
            setTimeout(handleDisconnect, 2000); // We introduce a delay before attempting to reconnect,
        }                                     // to avoid a hot loop, and to allow our node script to
    });                                     // process asynchronous requests in the meantime.
    // If you're also serving http, display a 503 error.
    connection.on('error', function (err) {
        //   console.log('db error', err);
        if (err.code === 'PROTOCOL_CONNECTION_LOST') { // Connection to the MySQL server is usually
            handleDisconnect();                         // lost due to either server restart, or a
        } else {                                      // connnection idle timeout (the wait_timeout
            throw err;                                  // server variable configures this)
        }
    });
}

handleDisconnect();

http.createServer(app).listen(app.get('port'), function () {
    console.log('Express started on http://localhost:' +
    app.get('port') + '; press Ctrl-C to terminate.');
});

//app.set("jsonp callback", true);

function saveUserDetails(data) {
    var deffered = q.defer();
    var query = connection.query("INSERT INTO users set ? ", data, function (err, rows) {
        if (err) {
            console.dir(err);
            deffered.reject(err);
        }
        //connection.end();
        deffered.resolve(rows);
    });
    return deffered.promise;
}

function getUserDetails() {
    var deffered = q.defer();
    var query = connection.query("SELECT * FROM users", function (err, rows) {
        if (err) {
            console.dir(err);
            deffered.reject(err);
        }
        //connection.end();
        deffered.resolve(rows);
    });
    return deffered.promise;
}

app.route('/GetUserDetails')
    .get(function (req, res, next) {
        getUserDetails().then(function (data) {
            return res.json({UserList: data});
        }, function (error) {
            console.log('Retrieving user details failed.');
        });
    });


app.route('/createUserDetails')
    .post(function (req, res, next) {
        console.log('create user details called')
        var form = new formidable.IncomingForm();
        form.parse(req, function (err, fields, files) {

            var input = JSON.parse(JSON.stringify(fields, null, 2));
            var data = {
                name: input.name,
                address: input.address,
                email: input.email,
                phone: input.phone,
                userid: input.uid
            };
            saveUserDetails(data).then(function (data) {
                res.json({
                    'message': 'data saved successfully'
                });
            });
        });
    });

app.route('/GetEmployees')
    .get(function (req, res, next) {

        console.dir(req.query);
        // do stuff
        res.json(
            {
                empData: {
                    EmployeeList: [
                        {
                            "name": "Chandra",
                            "title": "Senior Developer",
                            "city": "New York"
                        },
                        {
                            "name": "Madhu",
                            "title": "Senior Developer",
                            "city": "Kansas City"

                        },
                        {
                            "name": "Kiran",
                            "title": "Senior Developer",
                            "city": "San Fransisco"

                        },
                        {
                            "name": "Subash",
                            "title": "Senior Developer",
                            "city": "Dallas"

                        },
                        {
                            "name": "Prasad",
                            "title": "Senior Developer",
                            "city": "Houston"

                        },
                        {
                            "name": "Arun",
                            "title": "Senior Developer",
                            "city": "Jersy City"

                        },
                        {
                            "name": "Venu",
                            "title": "Senior Developer",
                            "city": "Lawrence"

                        },
                        {
                            "name": "Ramesh",
                            "title": "Senior Developer",
                            "city": "San Antonio"

                        },
                        {
                            "name": "Jayanth",
                            "title": "Senior Developer",
                            "city": "Pittsburgh"

                        }


                    ]

                },
                DurationMillis: "339",
                ErrorCode: null,
                Status: '200'
            });


    });
