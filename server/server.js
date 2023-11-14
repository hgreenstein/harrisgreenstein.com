const keys = require('./keys')
const express = require('express');
const bodyParser = require('body-parser')
const cors = require('cors');
const path = require('path');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();
app.use(cors());
app.use(bodyParser.json());
const { Pool } =  require("pg");
const pgClient = new Pool({
    user: keys.pgUser,
    host: keys.pgHost,
    database: keys.pgDatabase,
    password: keys.pgPassword,
    port: keys.pgPort
});

pgClient.on("connect", client =>{
    client
        .query("CREATE TABLE IF NOT EXISTS values (number INT)")
        .catch(err => console.log(err));
});

app.use(express.json());

//Setup Postgres API Endpoint

app.get('/api', (req, res) => {
    res.send("Hi Postgres Server");
});
//New API endpoint
app.get("/api/values/all", async (req,res) => {
    const values = await pgClient.query("SELECT * FROM values");

    res.send(values);
});

//Api endpoint to insert
app.post("/api/values", async (req, res) => {
    if(!req.body.value) res.send({working: false});
    await pgClient.query("INSERT INTO values(number) VALUES($1)", [req.body.value])
    res.send({working: true});
})

app.get("/api/aboutcards/all", async (req,res) => {
    const values = await pgClient.query("SELECT * FROM aboutcards");

    res.send(values);
});

app.get('/favicon.ico', (req, res) => res.status(204));

// Proxy middleware for forwarding requests to the React app server on port 3000
app.use('/', createProxyMiddleware({ 
    target: 'http://react:3000', 
    changeOrigin: true,
}));

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});


