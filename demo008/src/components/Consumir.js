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
        axios.get()
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
        return(
            <div></div>
        )
    }

}

export default Consumir;