import express from 'express';
const app = express();

import { genkit } from 'genkit';
import { vertexAI } from '@genkit-ai/vertexai';


const ai = genkit({
    plugins: [
        vertexAI({ location: 'us-central1' }),
    ],
});

app.get('/', async (req, res) => {
    const planet = req.query.planet || 'Ceres';
    const planetPrompt = ai.prompt('planet-facts');
    const llmResponse = await planetPrompt({planet});
    const html = llmResponse.text;
    res.send(html);
});

const port = process.env.PORT || 8080;
app.listen(port, () => {
    console.log(`codelab-genai: listening on port ${port}`);
});