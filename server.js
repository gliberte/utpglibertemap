import express from 'express'
import bodyParser from 'body-parser'
import  cookieSession from 'cookie-session'
import passport from 'passport'
import keys from './config/keys'
import expressGraphQL from 'express-graphql'
import schema from './graphqlSchema/schema'

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended:false
}))

if(process.env.NODE_ENV === 'production'){
    app.use(express.static('client/build'))

    const path = require('path')
    app.get('*',(req,res)=>{
        res.sendFile(path.resolve(__dirname,'client','build','index.html'))
    })
}
const PUERTO = process.env.PORT || 4000

app.use('/graphql',expressGraphQL({
    schema,
    graphiql:true
}))

app.listen(PUERTO,()=>{
    console.log("servidor de pruebas iniciado en 4000")
})