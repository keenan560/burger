const connection = require("./connection");


const orm = {
    selectAll: function() {
        connection.query('SELECT * FROM burgers', function(err, results) {
            if (err) throw err;
            console.log(results);
        })
    },
    insertOne: function(values) {
        connection.query(`INSERT INTO burgers (burger_name) VALUES ?`,[values] ,function(err, results) {
            if (err) throw err;
            console.log('Sucessfully inserted 1 row' + results);
        })
        connection.end();
    },
    updateOne: function(burger) {
        connection.query(`UPDATE burgers SET devoured = 'true' WHERE burger_name = ?`,[burger], function(err, results) {
            if (err) throw err;
            console.log('Burger has been devoured' + results);
        })
    }
};




module.exports = orm;