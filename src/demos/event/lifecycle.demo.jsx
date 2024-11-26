import React from 'react';
class Clock extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			date:new Date().toLocaleString()
		}
	}
	componentDidMount() {
		console.log('componentDidMount');
		this.timer = setInterval(() => {
			this.setState({
				date:new Date().toLocaleString()
			})
		},1000)
	}
	componentWillUnmount() {
		console.log('componentWillUnmount');
		clearInterval(this.timer);
	}

	render() {
		return (
			<p>{this.state.date}</p>
		)
	}
}


export default Clock;