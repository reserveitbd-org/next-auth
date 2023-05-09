import { withAuth } from '@/components/hoc';
import Head from 'next/head';
import Link from 'next/link';
import { Fragment } from 'react';

const Dashboard = () => {
	return (
		<Fragment>
			<Head>
				<title>Dashboard</title>
			</Head>

			<div className='container'>
				<h1>Dashboard</h1>

				<Link href='/profile' className='text-blue-600'>
					Profile
				</Link>
			</div>
		</Fragment>
	);
};

export default withAuth(Dashboard);
