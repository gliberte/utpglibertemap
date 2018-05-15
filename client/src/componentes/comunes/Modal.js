import  React from 'react';
import ReactDOM from 'react-dom'
import styled from 'styled-components'

const appRoot = document.getElementById('root')
const modalRoot = document.getElementById('modal-root')



class Modal  extends React.Component {
    constructor(props){
        super(props)
        this.el = document.createElement('div')
    }   
    componentDidMount() {
        modalRoot.appendChild(this.el)
    }
    componentWillUnmount() {
        modalRoot.removeChild(this.el)
    }
    render() {
        if(this.props.visible){
            return ReactDOM.createPortal(
                this.props.children,
                this.el
            );
        }else{
            return null
        }
        
    }
}



export default  Modal;