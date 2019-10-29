// console.log("\nIt's Alive\n")

const express = require('express'); // CommonJS modules

const server = express(); // creates a server

// route handlers

//handles GET requests to / on localhost:8000
server.get('/', (req, res) => {
    res.send('Hello Node 23!')
})

server.post('/echo', (req, res) => {
    const data = req.body;

    res.json(data);
    // db.add(hubInfo)
    // .then(hub => {
    //     res.json(hub)
    // })
    // .catch(error => {
    //     res.json({error: 'failed to add hubs from db'})
    // })
})


// listen for requests in a particular port on localhost
const port = 8001;
server.listen(port, () => console.log('API on port 8000'))