// Build and deploy gen AI applications on Google Cloud with Genkit and Node.js
// https://codelabs.developers.google.com/codelabs/deploy-from-github/genkit-nodejs#6


//To handle HTTP requests
import express from 'express';
const app = express();

import { genkit } from 'genkit';
import { gemini15Flash, vertexAI } from '@genkit-ai/vertexai';

const ai = genkit({
    plugins: [
        vertexAI({ location: 'us-central1' }),
    ],
});

app.get('/', async (req, res) => {
    const animal = req.query.animal || 'cat';
    const prompt = `Give me 10 fun facts about ${animal}. Return this as html without backticks.`
    const llmResponse = await ai.generate({
        model: gemini15Flash,
        prompt: prompt,
    });
    const html = llmResponse.text;
    res.send(html);
});

const port = process.env.PORT || 8080;
app.listen(port, () => {
    console.log(`codelab-genai: listening on port ${port}`);
});