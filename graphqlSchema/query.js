import UserType from '../graphqlSchema/models/user'
import PuntoType from '../graphqlSchema/models/puntos'
import * as UserLoaders from '../db/dataloaders/users'
import * as PuntoLoaders from '../db/dataloaders/puntos'
import {
    GraphQLObjectType,
    GraphQLString,
    GraphQLList
} from 'graphql'

const RootQuery = new GraphQLObjectType({
    name:'RootQueryType',
    fields:{
        user:{
            type:UserType,
            resolve(parent,args,req){
                return req.user
            }
        },
        users:{
            type:new GraphQLList(UserType),
            resolve(){
                return UserLoaders.getUsers()
            }
        },
        puntos:{
            type:new GraphQLList(PuntoType),
            resolve(parent,args,req){
                if(req.user.role === "superadmin"){
                    return PuntoLoaders.obtenerTodosLosPuntos()
                }else{
                    throw new Error('No Autorizado')
                }
            }
        },
        puntosDelUsuarioActual:{
            type:new GraphQLList(PuntoType),
            resolve(parent,args,req){
                if(req.user){
                    return PuntoLoaders.obtenerPutosUsuarioActual(req.user._id)
                }else{
                    throw new Error('No Autorizado')
                }
            }
        },
        puntosEmpresaActual:{
            type:new GraphQLList(PuntoType),
            resolve(parent,args,req){
                if(req.user.role === "admin" || req.user.role === "superadmin"){
                    return PuntoLoaders.obtenerPuntosPorEmpresaActual(req.user.empresa)
                }else{
                    throw new Error('No Autorizado')
                }
            }
        }
    }
})

export default RootQuery