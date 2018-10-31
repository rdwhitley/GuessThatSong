import React from 'react';

const Wordbank = (props) => {
	let {words} = props
	return(
		<div>
			<h2>Wordbank</h2>
			<p>{words}</p>
		</div>
	)
}

export default Wordbank;