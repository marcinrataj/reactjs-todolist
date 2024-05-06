import React from 'react';

export default function TodoCard(props) {
	const {children} = props;
	return (
		<ul>
			<li className='todoItem'>
				{children}
				<div className='actionsContainer'>
				<i class='fa-solid fa-pen-to-square'></i>
				<i class="fa-solid fa-trash"></i>
				</div>
			</li>
		</ul>
	);
};

