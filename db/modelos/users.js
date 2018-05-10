import mongoose from 'mongoose'
import passportLocalMongoose from 'passport-local-mongoose'
import mongodbErrorHandler from 'mongoose-mongodb-errors'

const userSchema = mongoose.Schema({
    username:{
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
        required:'Favor incluir un email',
        lowercase:true,
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

userSchema.plugin(passportLocalMongoose,{usernameField:'email'})
userSchema.plugin(mongodbErrorHandler)

export default mongoose.model('User',userSchema)