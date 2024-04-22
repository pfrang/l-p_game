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



export type GameModeOptions = "Overrated" | "Normal" | "Create";
