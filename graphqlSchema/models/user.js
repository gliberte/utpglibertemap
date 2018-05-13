
import {
    GraphQLObjectType,
    GraphQLString,
    GraphQLNonNull,
    GraphQLID
} from 'graphql'

const UserType = new GraphQLObjectType({
    name:'UserType',
    fields:{
        id:{type:GraphQLID},
        username:{type:GraphQLNonNull(GraphQLString)},
        nombre:{type:GraphQLNonNull(GraphQLString)},
        email:{type:GraphQLNonNull(GraphQLString)},
        empresa:{type:GraphQLNonNull(GraphQLString)},
        role:{type:GraphQLString}
    }
})

export default UserType