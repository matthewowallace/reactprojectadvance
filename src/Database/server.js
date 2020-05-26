import express from 'express';

const app = express();

// respond with "hello world" when a GET request is made to the homepage
app.get('/hello', (req, res) => res.send('Hello!'))

app.listen(8000, () => console.log ('Listening on port 8000'));

