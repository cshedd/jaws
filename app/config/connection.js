// *********************************************************************************
// CONNECTION.JS - THIS FILE INITIATES THE CONNECTION TO MYSQL
// *********************************************************************************

var mysql = require('mysql');

// Edit this connection to make it work with JawsDB.
var source = {

    localhost: {
        port: 3306,
        host: 'localhost',
        user: 'root',
        password: 'gayle92',
        database: 'starwars'
    },
    jawsDB: {
        port: 3306,
        host: 'q3vtafztappqbpzn.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
        user: 'yh5et5kh2a5e8344',
        password: 'vglez2deb9jhnb5e',
        database: 'hnarnf0bax5jv638'
    }
}


// TODO: connect your jawsDB connection witht he mysql connection.
var connection = mysql.createConnection( //enter connection here);



// Replace the connection code here with one to connect to you JawsDB connection.
connection.connect(function(err) {
    if (err) {
        console.error('error connecting: ' + err.stack);
        return;
    }
    console.log('connected as id ' + connection.threadId);
});

module.exports = connection;