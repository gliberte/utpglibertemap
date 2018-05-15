import React from 'react'
import styled from 'styled-components'
import userLogo from '../img/user.png'
import { Button,Alert} from 'antd'
import Transition from 'react-transition-group/Transition'
import { Mutation } from 'react-apollo'
import gql from 'graphql-tag'

const LOGIN = gql`
    mutation login($email:String!,$password:String!){
        login(email:$email,password:$password){
            id
            nombre
            empresa
            role
        }
    }
`
const GET_USER = gql`
    {
        user{
            id
            nombre
            empresa
            role
        }
    }
`
const FormContainer = styled.div`
    margin:auto;
    width:350px;
    position:relative;
    height:auto;
    padding:80px 40px;
    box-sizing:border-box;
    background:rgba(0,0,0,0.5);
    opacity:${props => props.estado === "entering" ? 0 : 1};
    transform:translateY(${props => props.estado === "entering" ? '-27px' : 0});
    transition:all ease-in-out 0.4s;
    p{
        margin:0;
        padding:0;
        font-weight:bold;
        color:#fff;
    }
    a{
        color:#fff;
        font-size:14px;
        font-weight:bold;
        text-decoration:none;
        margin-top:2em;
        display:block;
        &:hover{
            color:#efed40;
        }

`
const ImgUserLogo = styled.img`
        width:100px;
        height:100px;
        border-radius:50px;
        position:absolute;
        overflow:hidden;
        top:calc(-100px/2);
        left:calc(50% - 50px);
`
const InputText = styled.input`
    width:100%;

    background:transparent;
    margin-bottom:20px;
    border:${props => props.isValid === 'invalid' ? '1px solid red' : 'none'};
    border-bottom:${props => props.isValid === 'invalid' ? '1px solid red' : '1px solid #fff'};
    outline:none;
    height:40px;
    color:#fff;
    font-size:16px;
    &::placehoder{
        color:rgba(255,255,255,0.5);
    }
    transition:all 0.3s linear;

`
const Titulo = styled.h2`
    margin:0;
    padding:0 0 20px;
    color:#efed40;
`
const ContainerBotones = styled.div`
    display:flex;
    justify-content:space-between;
    margin-bottom:20px;;
`
const Error = styled.p`
    font-size:
`
export default class FormLogin extends React.Component {
    state = {
        form: { email: "", password: "" }
    }
    onSubmit = login => {
        const {email,password} = this.state.form
        login({
            variables:{
                email,password
            }
        })
    }
    onChange = evt => {
        evt.preventDefault()
        this.setState({
            form: {
                ...this.state.form,
                [evt.target.name]: evt.target.value
            }
        })

    }
    render() {
        return (
            <Transition appear={true} in={true} timeout={400}>
                {state => (
                    <FormContainer estado={state}>
                        <ImgUserLogo src={userLogo} />
                        <Titulo>Credenciales del Usuario:</Titulo>
                        <Mutation 
                        mutation={LOGIN}
                        refetchQueries={()=>{
                            return (
                                [{query:GET_USER}]
                            )
                        }}
                        >
                            {(login, { loading, error, data }) => {
                                if(data && data.login){
                                    this.props.onCerrarForm()
                                }
                                return (
                                    <form>
                                        <p><label htmlFor="email">Email:</label></p>
                                        <InputText type="email" id="email" name="email" value={this.state.form.email} placeholder="email" onChange={this.onChange} />
                                        <p><label htmlFor="pwd">Contraseña:</label></p>
                                        <InputText type="password" id="pwd" name="password" value={this.state.form.password} placeholder="contraseña" onChange={this.onChange} />
                                        <ContainerBotones>
                                            <Button loading={loading} ghost onClick={()=>this.onSubmit(login)}>Aceptar</Button>
                                            <Button type="danger" ghost onClick={this.props.onCerrarForm}>Cancelar</Button>
                                        </ContainerBotones>
                                        {error && <Alert message={`Error en las credenciales ${error.message}`} type="error"/>}
                                    </form>
                                )
                            }}
                        </Mutation>

                    </FormContainer>
                )}
            </Transition>

        )
    }
}