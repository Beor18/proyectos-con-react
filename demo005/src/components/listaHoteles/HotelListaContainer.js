import React from 'react'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as Actions from '../../actions';
import HotelListaItem from './HotelListaItem'

class HotelListaContainer extends React.Component {

    componentDidMount() {
        this.props.cargarNota()
      }

    render() {
        return (
            <div className="noteListContainer">
                <h2 className="tituloNotas">Toda las Notas</h2>
                <div className="note-list">
                    <HotelListaItem />
                </div>
            </div>
        )}
}


function mapStateToProps(state, props) {
  return {
    nota: state.nota.hotels,
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(Actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(HotelListaContainer)