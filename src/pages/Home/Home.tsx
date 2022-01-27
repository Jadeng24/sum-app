import React from 'react';
import { Pages } from '../../types/Types';
import HomeSection from './Home-Section/Home-Section';

import Home1 from './../../assets/home_boat_1.jpeg';
import Home2 from './../../assets/home_boat_2.jpeg';
import Home3 from './../../assets/home_boat_3.jpeg';
import Home4 from './../../assets/home_boat_4.jpeg';
import Home5 from './../../assets/home_boat_5.jpeg';

import './Home.scss';

const Home = () => {
	const homeSections = [
		{
			backgroundImg: Home1,
			title: 'Inflatable boats',
			subtitle: 'Choose your adventure',
			link: Pages.BoatBuilder,
			id: 1,
		},
		{
			backgroundImg: Home2,
			title: 'Aluminum boats',
			subtitle: 'Choose your adventure',
			link: Pages.BoatBuilder,
			id: 2,
		},
		{
			backgroundImg: Home3,
			title: 'Aluminum boats',
			subtitle: 'Choose your adventure',
			link: Pages.BoatBuilder,
			id: 3,
		},
		{
			backgroundImg: Home4,
			title: 'Inflatable boats',
			subtitle: 'Choose your adventure',
			link: Pages.BoatBuilder,
			id: 4,
		},
		{
			backgroundImg: Home5,
			title: 'Aluminum boats',
			subtitle: 'Choose your adventure',
			link: Pages.BoatBuilder,
			id: 5,
		},
	];

	return (
		<div className="Home column">
			{homeSections.map((section) => (
				<HomeSection
					key={section.id}
					title={section.title}
					backgroundImg={section.backgroundImg}
					subtitle={section.subtitle}
					link={section.link}
				/>
			))}
		</div>
	);
};

export default Home;
