import {
    GraphQLObjectType,
    GraphQLString
} from 'graphql'

const RootQuery = new GraphQLObjectType({
    name:'RootQueryType',
    fields:{
        test:{
            type:GraphQLString,
            resolve(parent,args){
                return 'Graphql funciona'
            }
        }
    }
})

export default RootQuery