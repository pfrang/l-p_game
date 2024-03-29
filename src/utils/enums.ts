export enum DropDownOptions {
  Rule = "Regel",
  Dilemma = "Dilemma",
  Pointing = "Pekelek",
  Trivia = "Trivia Spørsmål",
  Mix = "Mix"
}

export enum DropDownGameModes {
  Normal = "Spør AI om en tilfeldig Regel, Dilemma, Pekelek eller Trivia Spørsmål",
  Create = "Send inn et bidrag og spill ut ifra de som er sendt inn!",
  Overrated = "Er det over-under eller vurdert?"
}

export const enum PromptOptions {
  Rule = "The following is a rule meant for a drinking game, ex. Everyone has to end each sentence as if asking question.",
  Dilemma = "The following is a Dilemma, example Would you rather...",
  Pointing = " Pointing game questions are questions where all the players have to point at the person who best fits the description. The players names are, Peder, Lars, Henrik, Wilhelm and Magnus.",
  Trivia = "The following is a quizz questions which can be about almost anything, music, world affairs, celebrities etc"
}

export type GameModeOptions = "Overrated" | "Normal" | "Create";
