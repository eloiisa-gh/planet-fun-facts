import { vertexAI } from '@genkit-ai/vertexai';

const ai = genkit({
  plugins: [vertexAI({ location: 'us-central1' })],
});

const llmResponse = await ai.generate({
  model: vertexAI.model('gemini-2.0-flash'),
  prompt: 'What should I do when I visit Melbourne?',
});
console.log(llmResponse);