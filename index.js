// Build and deploy gen AI applications on Google Cloud with Genkit and Node.js
// https://codelabs.developers.google.com/codelabs/deploy-from-github/genkit-nodejs#6
// This code responds to http requests with our "Hello world!" greeting.


//To handle HTTP requests
import express from 'express';


const app = express();
app.get('/', async (req, res) => {
    res.send('HelloWorld homepath - from index.js');
});

const port = process.env.PORT || 8080;
app.listen(port, () => {
    console.log(`codelab-genai: Listening on port ${port}`);
});
