import { createClient } from '@supabase/supabase-js'

export const dbCall = async (input) => {
  const { type, content } = input
  const supabaseUrl = "https://kafiowruwxythkhdxass.supabase.co"
  // const supabaseKey = process.env.SUPABASE_KEY
  const supabaseKey = process.env.REACT_APP_SUPABASE_API_KEY
  const supabase = createClient(supabaseUrl, supabaseKey)

// let { data: questions, error } = await supabase
//     .from('questions')
//     .select('*')
// READ SPECIFIC COLUMNS
  // let { data: questions, error } = await supabase
  //   .from('questions')
  //   .select('*')

    // INSERT A ROW
  const { data, error } = await supabase
    .from('questions')
    .insert([
      { type: type, content: content },
    ])


  console.log(data[0])

}
