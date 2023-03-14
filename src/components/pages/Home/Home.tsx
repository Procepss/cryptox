import Head from 'next/head';
import { useRef } from 'react';

import { Region } from '@/components/base/Region';

import {
	About,
	Contacts,
	FastTransactions,
	Liquidity,
	Press,
	Roadmap,
	Scalability,
	Security,
	Team,
	Tokenomics,
	Welcome,
} from './partials';

const HomePage = () => {
	const ref = useRef(null);

	return (
		<Region Tag="main" ref={ref}>
			<Head>
				<title>Cryptox</title>
				<meta name="description" content="Home page" />
			</Head>

			<Welcome id={'about'} />

			<About id={'about'} />

			<Tokenomics id={'tokenomics'} />

			<Liquidity id={'tokenomics'} />

			<Roadmap id={'roadmap'} />

			<Team id={'team'} />

			<Security id={'for-developers'} />

			<FastTransactions id={'for-developers'} />

			<Scalability id={'for-developers'} />

			<Press id={'community'} />

			<Contacts id={'contacts'} />
		</Region>
	);
};

export { HomePage };
