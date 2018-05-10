import UserType from '../graphqlSchema/models/user'
import * as UserLoaders from '../db/dataloaders/users'
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
        }
    }
})

export default RootQuery