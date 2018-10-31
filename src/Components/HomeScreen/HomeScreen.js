import React from 'react';
// import '../css/main.css'

const HomeScreen = (props) => {
	const {categories, playGame} = props;


	return(
		<div className='home'>
			<h1>Welcome to Wheel of Fortune: Guess That Song</h1>
			<h2>Please choose a category</h2>
			<ul>{categories.map(item => <li key={item} onClick={playGame}>{item}</li>)}</ul>
		</div>
	)
}

export default HomeScreen;