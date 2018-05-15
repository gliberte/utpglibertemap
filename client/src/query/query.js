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

export const GET_PUNTOS_POR_EMPRESA =  gql`
    {
        puntosEmpresaActual{
            id
            identificador
            descripcion
            geom{
                type
                coordinates
            }
            user{
                id
                nombre
            }
        }
    }
`