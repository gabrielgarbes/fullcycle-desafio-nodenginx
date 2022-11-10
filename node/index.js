const express = require('express')
const app = express()
const port = 3000

const config = {
    host: 'db',
    user: 'root',
    password: 'root',
    database: 'nodedb'
};
const mysql = require('mysql');


app.get('/', (req, res) => { 
    const connection = mysql.createConnection(config);

    const sql = `INSERT INTO people(name) values ('Gabriel')`;
    connection.query(sql, (err, result) => {
        connection.query("select * from people", (err, result) => {
            console.log(result[0]["name"])
            list = "";
            result.forEach(element => {
                list += `<li>${element["name"]}</li>`                
            });
            connection.end()
            res.send("<h1>Full Cycle Rocks!</h1><br>"+list)
        })
    })


   
})

const connection = mysql.createConnection(config);
const createTable = `create table IF NOT EXISTS people(id int not null auto_increment, name varchar(255), primary key(id)) `;
connection.query(createTable,  (err, result) => {
    console.log("Tabela criada")
    app.listen(port, () => {
        console.log("Rodando na porta "+port)
    })                     
})




