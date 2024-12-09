import DemoClassComponent from "./ClassComponent.jsx";
import { useState } from 'react';

function LifecycleSummary(props) {
	const [classComponentProps, setClassComponentProps] = useState({
		color: 'blue',
		count: 0,
	});
	return <div>
		<div>
			<button onClick={() => {
				setClassComponentProps({
					...classComponentProps,
					count: classComponentProps.count + 1,
				});
			}}>updateCountProps</button>
			<button onClick={() => {
				setClassComponentProps({
					...classComponentProps,
					color: 'red',
				});
			}}>updateColorProps</button>
		</div>
		<DemoClassComponent {...classComponentProps} />;
	</div>
}

LifecycleSummary.meta = {
	tags: ['lifecycle'],
};

export default LifecycleSummary;

