import React from 'react'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as Actions from '../../actions';
import HotelListaItem from './HotelListaItem'

class HotelListaContainer extends React.Component {

    componentDidMount() {
        this.props.cargarNota()
      }

      componentDidUpdate(prevProps, prevState) {
        if (prevProps !== this.props) {
          this.listAllNotes();
        }
      }
  
    listAllNotes = () => {
      return this.props.nota.sort((a,b) => parseInt(a.id) - parseInt(b.id)).map((lista) => {
        return <HotelListaItem key={lista._id} lista={lista}/>
      })
    }
  
    render() {
        return (
            <div className="note-list">
                {this.listAllNotes()}
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