export enum SupaBaseEnumError {
  Length = "Supabase Length Error"
}


export class SupaBaseError extends Error {
  readonly name: string;
  constructor(name: SupaBaseEnumError) {
    super()
    this.name = name
  }
}
