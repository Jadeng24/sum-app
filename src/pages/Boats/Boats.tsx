import { Grid } from '@material-ui/core';
import React from 'react';
import { productColor } from '../../types/Types';
import './Boats.scss';

interface Boat {
	id: number;
	type: string;
	name: string;
	length: number;
	colors: productColor[];
}
const Boats = () => {
	const boats: Boat[] = [
		{
			id: 1,
			type: 'aluminum',
			name: 'Aluminum 14 foot Boat',
			length: 14,
			colors: [
				{
					name: 'red',
					color: '#F00',
				},
				{
					name: 'blue',
					color: '#F00',
				},
				{
					name: 'orange',
					color: '#F00',
				},
				{
					name: 'black',
					color: '#F00',
				},
				{
					name: 'white',
					color: '#F00',
				},
				{
					name: 'aluminum',
					color: '#F00',
				},
			],
		},
		{
			id: 2,
			type: 'inflatable',
			name: 'Inflatable 14 foot Raft',
			length: 14,
			colors: [
				{
					name: 'Red',
					color: '#F00',
				},
				{
					name: 'Blue',
					color: '#F00',
				},
				{
					name: 'Orange',
					color: '#F00',
				},
				{
					name: 'Black',
					color: '#F00',
				},
				{
					name: 'White',
					color: '#F00',
				},
				{
					name: 'Army green',
					color: '#F00',
				},
			],
		},
		{
			id: 3,
			type: 'aluminum',
			name: 'Aluminum 14 foot Boat',
			length: 14,
			colors: [
				{
					name: 'red',
					color: '#F00',
				},
				{
					name: 'blue',
					color: '#F00',
				},
				{
					name: 'orange',
					color: '#F00',
				},
				{
					name: 'black',
					color: '#F00',
				},
				{
					name: 'white',
					color: '#F00',
				},
				{
					name: 'aluminum',
					color: '#F00',
				},
			],
		},
		{
			id: 4,
			type: 'inflatable',
			name: 'Inflatable 14 foot Raft',
			length: 14,
			colors: [
				{
					name: 'Red',
					color: '#F00',
				},
				{
					name: 'Blue',
					color: '#F00',
				},
				{
					name: 'Orange',
					color: '#F00',
				},
				{
					name: 'Black',
					color: '#F00',
				},
				{
					name: 'White',
					color: '#F00',
				},
				{
					name: 'Army green',
					color: '#F00',
				},
			],
		},
		{
			id: 5,
			type: 'aluminum',
			name: 'Aluminum 14 foot Boat',
			length: 14,
			colors: [
				{
					name: 'red',
					color: '#F00',
				},
				{
					name: 'blue',
					color: '#F00',
				},
				{
					name: 'orange',
					color: '#F00',
				},
				{
					name: 'black',
					color: '#F00',
				},
				{
					name: 'white',
					color: '#F00',
				},
				{
					name: 'aluminum',
					color: '#F00',
				},
			],
		},
	];

	return (
		<div className="Page Boats">
			<h2>SUM Boats</h2>
			<Grid container justify="center" spacing={4}>
				{boats.map((boat) => (
					<Grid item key="boat.id" xs={12} sm={12} md={6} lg={4}>
						<div>{boat.name}</div>
						<div>{boat.length}</div>
					</Grid>
				))}
			</Grid>
		</div>
	);
};

export default Boats;
