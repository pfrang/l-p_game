import { createClient } from '@supabase/supabase-js'
import { DropDownOptions } from '../interface/Typing'

export const dbCall = async (input?) => {
  const supabaseUrl = "https://kafiowruwxythkhdxass.supabase.co"
  // const supabaseKey = process.env.SUPABASE_KEY
  const supabaseKey = process.env.REACT_APP_SUPABASE_API_KEY
  const supabase = createClient(supabaseUrl, supabaseKey)
  switch (input?.type) {
    case 'Regel':
      input.type = 'Rule'
      break;
    case 'Pekelek':
      input.type = 'Pointing'
      break;
    case 'Dilemma':
      input.type = 'Dilemma'
      break;
    case 'Trivia Spørsmål':
      input.type = 'DropDownOptions.Rule'
      break;
  }
  // let { data: questions, error } = await supabase
  //     .from('questions')
  //     .select('*')
  // READ SPECIFIC COLUMNS
  // let { data: questions, error } = await supabase
  //   .from('questions')
  //   .select('*')

  const insertData = async () => {
    const { type, content } = input
    try {
      const { data, error } = await supabase
        .from('questions')
        .insert([
          { type: type, content: content },
        ])
      console.log(data[0])
    } catch (e) {
      console.error(e)
    }
  }

  const readData = async () => {
    try {
      const { data, error } = await supabase
        .from('questions')
        .select('content')
        .eq('verified', true)
      return data
    } catch (e) {
      console.error(e)
    }
  }

  if (input) {
    insertData()
  } else {
    const response = await readData();
    const randomElement = response[Math.floor(Math.random() * response.length)].content
    return randomElement

  }
}
