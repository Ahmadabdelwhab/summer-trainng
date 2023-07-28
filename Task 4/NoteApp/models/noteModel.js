const mongoose = require('mongoose')

const {ObjectId} = require('mongodb')
const noteSchema = mongoose.Schema({
    title:{
        required:true,
        type:string,
    },
    noteContent:{
        type:string,
        required:true
    },
    author:{
        type:ObjectId,
        required:true,
        immutable:true
    }

})
const Note = mongoose.model("Note" , noteSchema)
module.exports = {Note}