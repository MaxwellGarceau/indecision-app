/*jshint ignore: start*/


class App extends React.Component {
	constructor(props) {
		super(props);
		this.counterFunc = this.counterFunc.bind(this);
		this.state = {
			counter: 0
		};
	}
 counterFunc() {
	this.setState((prevState) => {
		return {
			counter: prevState.counter + 1
		};
	});
}
	render() {
		return (
	<div>
		<h1>Visibility Toggle</h1>
		<button onClick={this.counterFunc}>{this.state.counter % 2 === 0 ? 'Show Details' : 'Hide Details'}</button>
	    {this.state.counter % 2 === 1 && <p>Hey. These are some details you can now see!</p>}
	</div>		
	  );		
	}	
}

ReactDOM.render(<App />, document.getElementById('app'));



/*
let counter = 0;

const counterFunc = () => {
	counter++;
	renderFunc();
}

const renderFunc = () => {
const app = (
	<div>
	<h1>Visibility Toggle</h1>
	<button onClick={counterFunc}>{counter % 2 === 0 ? 'Show Details' : 'Hide Details'}</button>
	{counter % 2 === 1 && <p>Hey. These are some details you can now see!</p>}
	</div>
	);

const appRoot = document.getElementById('app');
ReactDOM.render(app, appRoot);
}
renderFunc();
*/