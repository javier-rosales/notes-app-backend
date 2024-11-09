require('dotenv').config()
const mongoose = require('mongoose')

const url = process.env.TEST_MONGODB_URI

mongoose.set('strictQuery', false)

mongoose.connect(url)

const noteSchema = new mongoose.Schema({
  content: String,
  important: Boolean
})

const Note = mongoose.model('Note', noteSchema)

// Generate new note
const note = new Note({
  content: 'HTML is easy',
  important: true
})

note.save().then(() => {
  console.log('Note saved!')
  mongoose.connection.close()
})

/*
// Fetch objects from database
Note.find({}).then(result => {
  result.forEach(note => {
    console.log(note)
  })

  mongoose.connection.close()
})
*/