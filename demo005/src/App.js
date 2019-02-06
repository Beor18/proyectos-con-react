import React, { Component } from 'react';
import './App.css';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as Actions from '../src/actions'

import PageContainer from './components/PageContainer';
import HotelListaContainer from './components/listaHoteles/HotelListaContainer';

class App extends Component {

  constructor(props) {
		super(props)

		this.state = {
			displayedNote: "new",
		}
	}

	componentDidMount() {
		this.setState({
			displayedNote: "new"
		})
	}

	componentDidUpdate(prevProps, prevState) {
		
			if (prevProps.nota.length !== this.props.nota.length) {
				this.setState({
					displayedNote: "new"
				})
			}
	}

  render() {
    return (
      <div className="App">
				<HotelListaContainer />
        <PageContainer displayedNote={this.state.displayedNote} />
      </div>
    );
  }
}

function mapStateToProps(state, props) {
  return {
    nota: state.nota.hotels,
		displayedNote: state.nota.displayedNote
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(Actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App)