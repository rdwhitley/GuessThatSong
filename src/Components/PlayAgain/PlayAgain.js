import React from 'react';

const PlayAgain = (props) => {
	return(
		<div className = 'home'>
			<h1>{props.gameWon}</h1>
			<h2 onClick={props.restartGame}>Play again?</h2>
		</div>
	)
}

export default PlayAgain;