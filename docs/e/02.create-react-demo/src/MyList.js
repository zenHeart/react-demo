'use strict';
import React from 'react'

class MyList extends React.Component {
  orderList () {
    let dataSource = this.state.dataSource.sort (
      (firstEl, secondEl) => firstEl.amount - secondEl.amount
	);
	

    this.setState ({
      dataSource,
    });
  }

  constructor (props) {
    super (props);
    this.state = {
      dataSource: this.props.dataSource || Array (3).fill (1).map (ele => {
        return {
          amount: ~~(Math.random () * 100),
        };
      }),
    };
  }

  render () {
	return (
		<ol>
			<h1 key={-0} onClick={() => this.orderList ()}>金额</h1>
			{this.state.dataSource.map(
				(ele,i) => <li key={i}>{ele.amount}</li>
			)}
		</ol>
	)
  }
}

export default MyList;

