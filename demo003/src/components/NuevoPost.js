import React from 'react';

class NuevoPost extends React.Component {
    state = {
        titulo: '',
        body: ''
    };

    handleInputChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    handleSubmit = e => {
        e.preventDefault();
        if (this.state.titulo.trim() && this.state.body.trim()) {
            console.log(this.state);
            this.handleReset();
        }
    };

    handleReset = () => {
        this.setState({
            titulo: '',
            body: ''
        });
    };

    render() {
        return (
            <div className="container">
            <form onSubmit={ this.handleSubmit }>
            <div className="form-group">
                <input
                type="text"
                placeholder="Titulo"
                className="form-control"
                name="title"
                onChange={ this.handleInputChange }
                value={ this.state.titulo }
              />
            </div>
            <div className="form-group">
              <textarea
                cols="19"
                rows="8"
                placeholder="Cuerpo"
                className="form-control"
                name="body"
                onChange={ this.handleInputChange }
                value={ this.state.body }>
              </textarea>
            </div>
            <div className="form-group">
              <button type="submit" className="btn btn-primary" style={{marginRight: '10px'}}>Agregar Nota</button>
              <button type="button" className="btn btn-danger" onClick={ this.handleReset }>
                Resetear
              </button>
            </div>
          </form>
        </div>
        );
    }
}

export default NuevoPost;