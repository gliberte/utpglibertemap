import RootQuery from './query'
import {
    GraphQLSchema
} from 'graphql'

const Schema = new GraphQLSchema({
    query:RootQuery
})

export default Schema

