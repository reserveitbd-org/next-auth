import { withAuth } from '@/components/hoc';
import Head from 'next/head';
import Link from 'next/link';
import { Fragment } from 'react';

const Profile = () => {
	return (
		<Fragment>
			<Head>
				<title>Profile</title>
			</Head>

			<div className='container'>
				<h1>Profile</h1>

				<Link href='/dashboard' className='text-blue-600'>
					Dashboard
				</Link>
			</div>
		</Fragment>
	);
};

export default withAuth(Profile);
