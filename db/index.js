import mongoose from 'mongoose'
const keys = require('../config/keys')
import * as ApiUser from './dataloaders/users'
import User from './modelos/users'

mongoose.Promise = global.Promise

mongoose.connect(keys.MONGODB_URI).then(
    ()=>{
        console.log('Conexion exitosa a mongodb')
        const count = 
        User.count({},(err,count)=>{
            if(err) return console.log(err.message)
            if(count>0){
                return console.log("hay usuarios")
            }else{
                const adminUser = new User({
                    username:"gliberte",
                    nombre:"Luis Solano",
                    email:"luis.solano.l@gmail.com",
                    role:"admin",
                    empresa:'admin'
                })
                ApiUser.registerUser(adminUser,'fireandice')

            }
        })
    },
    (err)=> console.log(err.message)
)