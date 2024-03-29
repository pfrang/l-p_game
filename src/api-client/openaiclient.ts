import { PromptOptions } from "../utils/enums";

const { Configuration, OpenAIApi } = require("openai");

export class OpenAICall {
  private readonly apiKey: string;
  private readonly configuration: any;
  private readonly OpenAIApiClient: any;

  constructor() {
    this.apiKey = process.env.REACT_APP_OPENAI_API_KEY as string;
    this.configuration = new Configuration({
      apiKey: this.apiKey,
    });
    this.OpenAIApiClient = new OpenAIApi(new Configuration(this.configuration));
  }

  public async openAICallForNormalGame(input: string) {
    let prompt;
    switch (input) {
      case 'Regel':
        prompt = `${PromptOptions.Rule}\nRule:`
        break;
      case 'Pekelek':
        prompt = `${PromptOptions.Pointing}\nPointing Game Question:`
        break;
      case 'Dilemma':
        prompt = `${PromptOptions.Dilemma}\nDilemma:`
        break;
      case 'Trivia Spørsmål':
        prompt = `${PromptOptions.Trivia}\nTrivia:`
        break;
    }

    // const promptStart = 'The following is an endless list of rules, trivia questions, pointing game questions and dilemmas that make up a drinking game. The rules are fun and can apply to one or multiple players, if the players break the rules they have to drink.'
    // const prompt = `The following is an endless list of rules, trivia questions, pointing game questions and dilemmas that make up a drinking game. The rules are fun and can apply to one or multiple players, if the players break the rules they have to drink. Trivia questions are quizz questions about almost anything, music, world affairs, celebrities etc.  Pointing game questions are questions where all the players have to point at the person who best fits the description. The players names are, Peder, Lars, Henrik, Wilhelm and Magnus.\nRule: Everyone has to end each sentence as if asking question.\nPointing Game Question: Who is bringing someone home tonight?\nTrivia Question: What year was the song 'Take on me' released? Answer: 1985\nDilemma: Would you rather forget your password every weekend or forget your name every time you meet someone for the first time?\n${input}:`
    const response = await this.OpenAIApiClient.createCompletion("text-davinci-003", {
      prompt: prompt,
      temperature: 0.7,
      max_tokens: 256,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0,
      stop: ["Rule:", "Dilemma:", "Trivia Question:", "Pointing Game Question:"],
    }).then(res => res.data.choices[0].text)
      .catch(err => console.error(err))

      return response
    }

    public async openAICallForOverratedGame(input?: string) {

      // const promptStart = 'The following is an endless list of rules, trivia questions, pointing game questions and dilemmas that make up a drinking game. The rules are fun and can apply to one or multiple players, if the players break the rules they have to drink.'
      // const prompt = `The following is an endless list of rules, trivia questions, pointing game questions and dilemmas that make up a drinking game. The rules are fun and can apply to one or multiple players, if the players break the rules they have to drink. Trivia questions are quizz questions about almost anything, music, world affairs, celebrities etc.  Pointing game questions are questions where all the players have to point at the person who best fits the description. The players names are, Peder, Lars, Henrik, Wilhelm and Magnus.\nRule: Everyone has to end each sentence as if asking question.\nPointing Game Question: Who is bringing someone home tonight?\nTrivia Question: What year was the song 'Take on me' released? Answer: 1985\nDilemma: Would you rather forget your password every weekend or forget your name every time you meet someone for the first time?\n${input}:`
      const prompt = `Gi meg et tilfeldig norsk ord som er ofte betegnes som enten over-eller undervurdert innenfor temaet ${input ? input : 'sex'}.\nOrd:}`

      const response = await this.OpenAIApiClient.createCompletion("text-davinci-003", {
        prompt: prompt,
        temperature: 0.7,
        max_tokens: 256,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0,
        stop: ["Ord:"],
      }).then(res => res.data.choices[0].text)
        .catch(err => console.error(err))

      return response

    }

  }
