
import UserType from './models/user'
import * as ApiUsers from '../db/dataloaders/users'
import {
    GraphQLObjectType,
    GraphQLString
} from 'graphql'

const Mutation = new GraphQLObjectType({
    name:'Mutation',
    fields:{
        registerUser:{
            type:UserType,
            args:{
                username:{type:GraphQLString},
                nombre:{type:GraphQLString},
                email:{type:GraphQLString},
                empresa:{type:GraphQLString},
                role:{type:GraphQLString},
                password:{type:GraphQLString}

            },
            resolve(parent,args,req){
                return ApiUsers.registerUser({
                    username:args.username,
                    nombre:args.nombre,
                    email:args.email,
                    empresa:args.empresa,
                    role:args.role
                },args.password)
            }
        },
        login:{
            type:UserType,
            args:{
                email:{
                    type:GraphQLString
                },
                password:{
                    type:GraphQLString
                }
            },
            resolve(parent,{email,password},req){
                return ApiUsers.login({email,password,req})
            }
        },
        logout:{
            type:UserType,
            resolve(parent,args,req){
                return ApiUsers.logout({req})
            }
        }
    }
})

export default Mutation