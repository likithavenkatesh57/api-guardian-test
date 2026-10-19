const OpenAI = require('openai');
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
 
async function getCompletion(prompt) {
  const response = await openai.createCompletion({
    model: 'text-davinci-003',
    prompt: prompt,
    max_tokens: 100,
  });
  return response.data.choices[0].text;
}
 
module.exports = { getCompletion };
