'use strict';

class Clock extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			date:new Date().toLocaleString()
		}
	}
	componentDidMount() {
		this.timer = setInterval(() => {
			this.setState({
				date:new Date().toLocaleString()
			})
		},1000)
	}
	componentWillUnmount() {
		clearInterval(this.timer);
	}

	render() {
		return (
			<p>{this.state.date}</p>
		)
	}
}



function App(props) {
	return (
		<Clock></Clock>
	)
}

ReactDOM.render(<App/>,document.querySelector('#root'));