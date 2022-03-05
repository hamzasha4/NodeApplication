var Connection = require('tedious').Connection;  
var config = {  
    server: 'DESKTOP-F3KVG3E\SQLEXPRESS01',  //update me
    authentication: {
        type: 'default',
        options: {
            userName: 'hamza', //update me
            password: 'Letsbehonest4'  //update me
        }
    },
};  
var connection = new Connection(config);  
connection.on('connect', function(err) {  
    // If no error, then good to proceed.
    console.log("Connected");  
});

connection.connect();
