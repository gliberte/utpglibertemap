import RootQuery from './query'
import Mutation from './mutation'
import {
    GraphQLSchema
} from 'graphql'

const Schema = new GraphQLSchema({
    query:RootQuery,
    mutation:Mutation
})

export default Schema

