
import OpenAI from "openai"

export class OpenAICall {
  private readonly apiKey: string;
  private readonly OpenAIApiClient: OpenAI;
  private readonly model: string;

  constructor() {
    this.apiKey = process.env.REACT_APP_OPENAI_API_KEY as string;
    this.OpenAIApiClient = new OpenAI({
      apiKey: this.apiKey,
      dangerouslyAllowBrowser: true
    });
    this.model = "gpt-4-turbo"
  }

  public async openAICallForNormalGame(input: string) {
    let prompt;
    switch (input) {
      case 'Regel':
        prompt = `Rule:`
        break;
      case 'Pekelek':
        prompt = `Pointing Game Question:`
        break;
      case 'Dilemma':
        prompt = `Dilemma:`
        break;
      case 'Trivia Spørsmål':
        prompt = `Trivia question`
        break;
    }


    // const promptStart = 'The following is an endless list of rules, trivia questions, pointing game questions and dilemmas that make up a drinking game. The rules are fun and can apply to one or multiple players, if the players break the rules they have to drink.'
    // const prompt = `The following is an endless list of rules, trivia questions, pointing game questions and dilemmas that make up a drinking game. The rules are fun and can apply to one or multiple players, if the players break the rules they have to drink. Trivia questions are quizz questions about almost anything, music, world affairs, celebrities etc.  Pointing game questions are questions where all the players have to point at the person who best fits the description. The players names are, Peder, Lars, Henrik, Wilhelm and Magnus.\nRule: Everyone has to end each sentence as if asking question.\nPointing Game Question: Who is bringing someone home tonight?\nTrivia Question: What year was the song 'Take on me' released? Answer: 1985\nDilemma: Would you rather forget your password every weekend or forget your name every time you meet someone for the first time?\n${input}:`
    const response = await this.OpenAIApiClient.chat.completions.create({
      model: this.model,
      messages: [
        {
          "role": "system",
          "content": "You are a drinking game creator for fun parties."
        },
        {
          "role": "user",
          "content": `Come up with a great and edgy ${prompt}, write it in Norwegian.`
        }
      ],
      temperature: 1,
      max_tokens: 256,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0,
    }).then(res => res.choices[0].message.content)
      .catch(err => console.error(err))

    return response
  }

  public async openAICallForOverratedGame(input?: string) {

    // const promptStart = 'The following is an endless list of rules, trivia questions, pointing game questions and dilemmas that make up a drinking game. The rules are fun and can apply to one or multiple players, if the players break the rules they have to drink.'
    // const prompt = `The following is an endless list of rules, trivia questions, pointing game questions and dilemmas that make up a drinking game. The rules are fun and can apply to one or multiple players, if the players break the rules they have to drink. Trivia questions are quizz questions about almost anything, music, world affairs, celebrities etc.  Pointing game questions are questions where all the players have to point at the person who best fits the description. The players names are, Peder, Lars, Henrik, Wilhelm and Magnus.\nRule: Everyone has to end each sentence as if asking question.\nPointing Game Question: Who is bringing someone home tonight?\nTrivia Question: What year was the song 'Take on me' released? Answer: 1985\nDilemma: Would you rather forget your password every weekend or forget your name every time you meet someone for the first time?\n${input}:`
    const response = await this.OpenAIApiClient.chat.completions.create({
      model: this.model,
      messages: [
        {
          "role": "system",
          "content": "You are a drinking game creator for fun parties."
        },
        {
          "role": "user",
          "content": `Come up with a word that would be considered as overrated, underrated or perfectly rated within the topic that is provided in norwegian ${input ? input : 'random'},
          only write the thing that one can be considered as one of these 3. Write the thing in Norwegian, not the rating.`
        }
      ],
      temperature: 2,
      max_tokens: 256,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0,
    }).then(res => res.choices[0].message.content)
      .catch(err => console.error(err))


    return response

  }

}
