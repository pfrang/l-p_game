const { Configuration, OpenAIApi } = require("openai");

export const openAICall = async (input) => {

  const apiKey = process.env.REACT_APP_OPENAI_API_KEY

  const configuration = new Configuration({
    apiKey: apiKey,
  });

  const openai = new OpenAIApi(configuration);
  const prompt = `The following is an endless list of rules, trivia questions, pointing game questions and dilemmas that make up a drinking game. The rules are fun and can apply to one or multiple players, if the players break the rules they have to drink. Trivia questions are quizz questions about almost anything, music, world affairs, celebrities etc.  Pointing game questions are questions where all the players have to point at the person who best fits the description. The players names are, Peder, Lars, Henrik, Wilhelm and Magnus.\nRule: Everyone has to end each sentence as if asking question.\nPointing Game Question: Who is bringing someone home tonight?\nTrivia Question: What year was the song 'Take on me' released? Answer: 1985\nDilemma: Would you rather forget your password every weekend or forget your name every time you meet someone for the first time?\n${input}`
  const response = await openai.createCompletion("text-davinci-002", {
    prompt: prompt,
    temperature: 0.7,
    max_tokens: 256,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0,
    stop: ["Rule:", "Dilemma:", "Trivia Question:", "Pointing Game Question:"],
  }).then(res => res.data.choices[0].text)

  return response
};