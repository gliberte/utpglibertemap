import GeoJSON from 'mongoose-geojson-schema'
import mongoose from 'mongoose'
import User from '../modelos/users'

const puntoSchema = mongoose.Schema({
    identificador:{
        type:String,
        trim:true,
        unique:true
    },
    descripcion:{
        type:String,
        trim:true
    },
    userid:{
        type:mongoose.Schema.Types.ObjectId
    },
    empresa:{type:String},
    geom:mongoose.Schema.Types.Point
})

export default mongoose.model('Puntos',puntoSchema)