import React, { Component } from 'react';
import './App.css';

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

  render() {
    return (
      <div className="App">
				<HotelListaContainer />
        <PageContainer displayedNote={this.state.displayedNote} />
      </div>
    );
  }
}

export default App;
