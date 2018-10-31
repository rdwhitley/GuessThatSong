import React from 'react';

class Timer extends React.Component {
	// let {time, decrement} = props;
	constructor(props) {
		super(props)
		this.state = {
			time: 60
		}
		
	}

	render() { return (
		<div>
			<h2>Timer</h2>
			<p>{this.state.time}</p>
		</div>
	)
	}

	componentDidMount() {
		this.props.setEncrypt()

		this.myInterval = setInterval(() => {

			if(this.state.time === 1) {
				clearInterval(this.myInterval)
				this.props.endGame()
			} else {
				this.setState(prevState => ({
					time: prevState.time - 1
				}))
			}			
		}, 1000)
   	}

   	componentWillUnmount() {
   		clearInterval(this.myInterval)
   	}
}

export default Timer;