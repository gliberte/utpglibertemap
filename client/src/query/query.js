import gql from 'graphql-tag'


export const GET_USER = gql`
    {
        user{
            id
            nombre
            email
            empresa
            role
        }
    }
`