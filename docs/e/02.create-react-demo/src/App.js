'use strict';

import React from 'react'
import MyList from './MyList'

class App extends React.Component {
	render() {
		const data = Array(10).fill(1).map(ele => {
			return {
				amount:~~(Math.random()*100)
			}
		});
		return (
			<MyList dataSource={
				data
			}/>
		)
	}
}
export default App;