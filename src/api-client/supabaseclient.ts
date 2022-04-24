import { createClient } from '@supabase/supabase-js'

export const dbCall = async (input) => {
  const { type, content } = input
  const supabaseUrl = "https://kafiowruwxythkhdxass.supabase.co"
  // const supabaseKey = process.env.SUPABASE_KEY
  const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImthZmlvd3J1d3h5dGhraGR4YXNzIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTA3NDI0ODIsImV4cCI6MTk2NjMxODQ4Mn0.QIePQnN25Tfr5Do0-Bn6-xX8Ey95VHiYukRfGBZgmGg'
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
