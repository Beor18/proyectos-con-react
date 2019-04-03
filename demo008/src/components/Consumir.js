import React, { Component } from 'react';
const axios = require('axios');

class Consumir extends Component {

    constructor(props) {
        super(props);
        this.state = {
            clickMostrar: true,
            mensaje: ''
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState(state => ({
            clickMostrar: !state.clickMostrar
        }));
    }

    componentDidMount() {
        axios.get('http://remote.fizzmod.com/ajax.php')
        .then(response => {
            this.mensaje = response.data;
            console.log(this.mensaje);

            this.setState({
                mensaje: this.mensaje
            });
        })
        .catch(error => console.error(error.response));
    }


    render(){
        const mensaje = this.state.mensaje;
        return(
            <div onClick={this.handleClick}>
                {this.state.clickMostrar ? 
                    <img src="http://remote.fizzmod.com/TyQVKjcj4SXjSEWv/frontend/images/marcas.jpg" alt="" /> : 
                    <p>{mensaje}</p> 
                }
            </div>
        )
    }

}

export default Consumir;