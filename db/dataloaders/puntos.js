import Punto from '../modelos/puntos'
import User from '../modelos/users'

export const crearNuevoPunto = (data,user)=>{
    const {identificador,descripcion,coordinates} = data
    const nuevopunto = new Punto({
        identificador,
        descripcion,
        geom:{
            type:"Point",
            coordinates
        },
        user:user._id,
        empresa:user.empresa

    })
    return nuevopunto.save()

}