import {
    GraphQLObjectType,
    GraphQLString,
    GraphQLNonNull
} from 'graphql'

const UserType = new GraphQLObjectType({
    name:'UserType',
    fields:{
        username:{type:GraphQLNonNull(GraphQLString)},
        nombre:{type:GraphQLNonNull(GraphQLString)},
        email:{type:GraphQLNonNull(GraphQLString)},
        empresa:{type:GraphQLNonNull(GraphQLString)},
        role:{type:GraphQLString}
    }
})

export default UserType