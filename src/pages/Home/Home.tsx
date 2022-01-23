import React from 'react';
import { Pages } from '../../types/Types';
import HomeSection from './Home-Section/Home-Section';

import Home1 from './../../assets/home_boat_1.jpeg';
import Home2 from './../../assets/home_boat_2.jpeg';
import Home3 from './../../assets/home_boat_3.jpeg';
import Home4 from './../../assets/home_boat_4.jpeg';
import Home5 from './../../assets/home_boat_5.jpeg';

const Home = () => {
	const homeSections = [
		{
			background: Home1,
			title: 'Aluminum boats',
			link: Pages.BoatBuilder,
		},
		{
			background: Home2,
			title: 'Inflatable boats',
			link: Pages.BoatBuilder,
		},
		{
			background: Home3,
			title: 'Aluminum boats',
			link: Pages.BoatBuilder,
		},
		{
			background: Home4,
			title: 'Inflatable boats',
			link: Pages.BoatBuilder,
		},
		{
			background: Home5,
			title: 'Inflatable boats',
			link: Pages.BoatBuilder,
		},
	];
	return (
		<div className="Page Home">
			{homeSections.map((section, key) => {
				<HomeSection
					title={section.title}
					background={section.background}
					link={section.link}
				/>;
			})}
			<h2>Welcome to Sport Utility Marine</h2>
		</div>
	);
};

export default Home;
