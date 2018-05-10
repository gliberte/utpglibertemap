import mongoose from 'mongoose'
const keys = require('../config/keys')

mongoose.Promise = global.Promise

mongoose.connect(keys.MONGODB_URI).then(
    ()=>{
        console.log('Conexion exitosa a mongodb')
    },
    (err)=> console.log(err.message)
)