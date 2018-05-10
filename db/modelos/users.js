import mongoose from 'mongoose'

const userSchema = mongoose.Schema({
    username:{
        type:String,
        trim:true,
        required:true
    },
    password:{
        type:String,
        trim:true,
        required:true
    },
    nombre:{
        type:String,
        trime:true,
        required:true,
        uppercase:true
    },
    email:{
        type:String,
        trim:true,
        required:true,
        unique:true,
        match:/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    },
    empresa:{
        type:String,
        trim:true,
        required:true
    },
    role:String
})

export default mongoose.model('User',userSchema)