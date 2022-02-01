import React from 'react';
import dashboard from './dashboard.css';

export const Dashboard = (props) => {
	return (
		<div className="hello-page">
			<h3>
				Hello <span style={{ color: 'blue' }}>{props.username}</span>
			</h3>
		</div>
	);
};
