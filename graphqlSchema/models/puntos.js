import UserType from './user'

import * as UserLoaders from '../../db/dataloaders/users'

import {
    GraphQLObjectType,
    GraphQLID,
    GraphQLString,
    GraphQLList,
    GraphQLFloat

} from 'graphql'

const GeoJsonPunto = new GraphQLObjectType({
    name:'GeoJsonPunto',
    fields:{
        'type':{type:GraphQLString},
        coordinates:{
            type:new GraphQLList(GraphQLFloat)
        }
    }
})

const PuntoType = new GraphQLObjectType({
    name: "PuntoType",
    fields: {
        id:{type:GraphQLID},
        identificador: { type: GraphQLString },
        descripcion: { type: GraphQLString },
        userid: { 
            type: GraphQLID
         },
         user:{
             type:UserType,
             resolve(parent,args){
                return UserLoaders.getUserById(parent.userid)
             }
         },
         empresa:{type:GraphQLString},
        geom: {
            type:GeoJsonPunto
        }
    }
})

export default PuntoType