import React from 'react'
import styled from 'styled-components'
import {Modal} from 'antd'
import ModalLocal from './comunes/Modal'
import ContainerModal from './comunes/ContainerModal'
import FormLogin from './FormLogin'
import { Mutation } from 'react-apollo'
import gql from 'graphql-tag'
import {GET_USER} from '../query/query'
import glMapLogo from '../img/glmaplogo.png'

const LOGOUT = gql`
    mutation logout{
        logout{
            id
        }
    }
`

const Container = styled.div`
  background:#263238;
  box-shadow:0 8px 10px #ccc;
  font-family: 'Luckiest Guy', cursive;
  font-size:22px;
  line-height:50px;
  &>div{
      float:right;
  }
  a{
      float:right;
      font-size:15px;
      margin-right:10px;
  }
  img{
      margin-left:20px;
  }
`
const Bienvenida = styled.div`
  display:flex;
  &>div{
      font-size:13px;
      margin-right:10px;
      color:white;
  }
  &>a{
      font-size:13px;
      
      
  }
  margin-right:10px;
  
`


const confirm = Modal.confirm
const LoggedIn = ({ user }) => {
    const showConfirm = logout =>{
        confirm({
            title:'¿Desear salir de la aplicacion?',
            content:'No podrás almacenar de forma permanente tus objetos.',
            onOk(){
                logout()
            },
            onCancel(){}
        })
    }   
    return (
        <Mutation 
        mutation={LOGOUT}
        refetchQueries={()=>{
            return (
                [{query:GET_USER}]
            )
        }}
        >
            {(logout, { loading, error, data }) => {
                return (
                    <Bienvenida>
                        <div>Bienvenido {user.nombre}</div>
                        <a href="#" onClick={
                            (evt)=>{
                                evt.preventDefault()
                                showConfirm(logout)
                            }
                            }>Salir</a>
                    </Bienvenida>
                )

            }}
        </Mutation>

    )
}

export default class Encabezado extends React.Component {
    state = {
        modal: false
    }
    onLogin = (evt) => {
        evt.preventDefault()
        this.setState({
            modal: true
        })
    }
    onCerrarForm = () => {
        console.log("cerrando?")
        this.setState({ modal: false })
    }
    render() {
        return (
            <Container>
                <img src={glMapLogo} alt="" width={80} height={60}/>
                {this.props.user ? <LoggedIn user={this.props.user} /> : <a href="#" onClick={this.onLogin}>Login</a>}
                <ModalLocal visible={this.state.modal}>
                    <ContainerModal>
                        <FormLogin onCerrarForm={this.onCerrarForm} />
                    </ContainerModal>
                </ModalLocal>


            </Container>
        )
    }

}