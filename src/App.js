import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Top from './components/Top'
import Form from './components/Form'

class App extends Component {
	render() {
		return (
			<Router>
				<div className="App">
					<div className="App-Aside" >
					</div>
						<div className="App-Form">
							<Top />
							<Form />
						</div>
					</div>
			</Router>
		);
	}
}

export default App;
