import React from 'react';
import Card from './Card';

function App() {
	return (
		<div className='App'>
			<Card
				image='https://placeimg.com/640/480/any'
				title='How To Make Interactive ReactJS Forms'
				description="Let's write an interactive form with React"
			/>
			<Card
				image='https://placeimg.com/640/480/any'
				title='Babelify Your JavaScript Code'
				description='Babel makes JavaScript code browser-compatible'
			/>
			<Card
				image='https://placeimg.com/640/480/any'
				title='Javascript Basics Before You Learn React'
				description='Learn the prerequisites of React fast'
			/>
		</div>
	);
}

export default App;
