import React from 'react'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as Actions from '../../actions';
import moment from 'moment';
require('moment/locale/es');

class HotelListaItem extends React.Component {
  constructor(props){
    super(props);
    this.state = {
        actualizarTiempo :  moment(this.props.lista.created_at).locale('es').fromNow()}
  }

  componentDidMount(){
    // agregado el interval
    this.interval = setInterval(this.updateActualizarTiempo.bind(this), 3000);
  }

  componentWillUnmount(){
    // remover el interval
    clearInterval(this.interval);
  }

  updateActualizarTiempo(){
    this.setState({
      actualizarTiempo : moment(this.props.lista.created_at).locale('es').fromNow()})
  }
    
  render() {
    return(
      <div key={this.props.lista._id} className="note-list-item" onClick={this.props.selectNote}>
        <p>{this.props.lista.title}</p>
        <p>{this.props.lista.content}</p>
        <p>{this.state.actualizarTiempo}</p>
      </div>

    )
  }
}

function mapStateToProps(state, props) {
  return {
    nota: state.nota.hotels,
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(Actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(HotelListaItem)