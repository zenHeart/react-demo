'use strict';

class MyList extends React.Component {
  orderList () {
    let dataSource = this.state.dataSource.sort (
      (firstEl, secondEl) => firstEl.amount - secondEl.amount
	);
    console.log (dataSource);
	

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
    return e ('ol', {}, [
      e (
        'h1',
        {
          key: -1,
          onClick: () => this.orderList (),
        },
        '金额'
	  ),
	  ...this.state.dataSource.map((ele,i) => {
		  return  e (
			'li',
			{
			  key: i,
			},
			ele.amount
		  )
	  })
    ]);
  }
}

const mountPoint = document.querySelector ('#list');
ReactDOM.render (e (MyList,{dataSource:Array(10).fill(1).map(
	ele => {
		return  {
			amount:~~(Math.random()*100)
		}
	}
)}), mountPoint);
