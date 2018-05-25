import Punto from '../modelos/puntos'
import User from '../modelos/users'

export const crearNuevoPunto = (data,user)=>{
    const {identificador,descripcion,coordinates,timestamp} = data
    const nuevopunto = new Punto({
        identificador,
        descripcion,
        geom:{
            type:"Point",
            coordinates
        },
        userid:user._id,
        empresa:user.empresa,
        timestamp

    })
    return nuevopunto.save()

}

export const obtenerTodosLosPuntos = ()=>{
    return Punto.find()
}

export const obtenerPutosUsuarioActual = userid =>{
    return Punto.find({userid:userid})
}
export const obtenerPuntosPorEmpresaActual = empresa =>{
    return Punto.find({empresa:empresa})
}