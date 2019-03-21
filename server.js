import express from 'express';

const app = express();

app.get("/", (req, res) => {
    console.log("Request");
    res.send("Hello")
});

app.listen(9000, () => console.log('Listening http://localhost:' + 9000));