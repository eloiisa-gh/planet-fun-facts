import express from 'express';
const app = express();

import { genkit } from 'genkit';
//import { gemini15Flash, vertexAI } from '@genkit-ai/vertexai';    //Internal Server Error
//import { gemini20Flash, vertexAI } from '@genkit-ai/vertexai';
import { vertexAI } from '@genkit-ai/vertexai';

const ai = genkit({
    plugins: [
        vertexAI({ location: 'us-central1' }),
    ],
});

app.get('/', async (req, res) => {
    const animal = req.query.animal || 'caterpillar';
    const prompt = `Give me 10 fun facts about ${animal}. Return this as html without backticks.`
    const llmResponse = await ai.generate({
        //model: gemini20Flash,
        model: vertexAI.model('gemini-2.0-flash'),
        //prompt: prompt,
        prompt: 'What should I do when I visit Melbourne?',
    });
    const html = llmResponse.text;
    res.send(html);
});

const port = process.env.PORT || 8080;
app.listen(port, () => {
    console.log(`codelab-genai: listening on port ${port}`);
});