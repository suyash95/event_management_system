var mysql = require('mysql');

module.exports = {
    mysql: {
        host: "localhost",
        //port: 3306,
        user: "root",
        password: "",
        database: "dbmslab",
        socketPath:'/opt/lampp/var/mysql/mysql.sock'
    },
    'secret': 'SUYASH'
};
