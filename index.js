const express = require('express');
const cors = require('cors');

const app = express();
const port = 4050;

app.use(cors({
    origin: '*',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    optionsSuccessStatus: 200
}));

app.use(express.json()); // Add this line to parse JSON request bodies

app.get('/', (req, res) => {
    res.send("Hello World");
});

app.post("/", (req, res) => {
    res.send("Hello World Post Request");
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
