import { withoutAuth } from '@/components/hoc';
import { authAPI } from '@/libs/api';
import { authService } from '@/libs/auth';
import { useMutation } from '@tanstack/react-query';
import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { Fragment, useCallback } from 'react';

const SignIn = () => {
	const router = useRouter();

	const { mutate: mutateSignIn, isLoading } = useMutation(
		(values: API.SignInParams) => authAPI.signIn(values),
		{
			onSuccess: (data) => {
				router.push('/dashboard');
				authService.setToken(data.token);
			},
			onError: (error: Error) => {
				console.log(error.message);
			},
		}
	);

	const handleSignIn = useCallback(
		(e: React.FormEvent<HTMLFormElement>) => {
			e.preventDefault();

			mutateSignIn({
				username: e.currentTarget.username.value,
				password: e.currentTarget.password.value,
			});
		},
		[mutateSignIn]
	);

	return (
		<Fragment>
			<Head>
				<title>Sign In</title>
			</Head>

			<form
				className='flex flex-col items-center justify-center min-h-screen py-2'
				onSubmit={handleSignIn}
			>
				<div className='flex flex-col items-center justify-center mb-6'>
					<Image src='/next.svg' alt='logo' width={200} height={200} />
				</div>

				<div className='flex flex-col items-center justify-center'>
					<h1 className='text-2xl font-bold'>Sign In</h1>
					<p className='text-lg'>to continue to the app</p>
				</div>

				<div className='flex flex-col items-center justify-center'>
					<input
						className='w-80 h-12 px-3 py-2 mt-4 text-lg text-gray-700 placeholder-gray-500 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600'
						type='text'
						placeholder='Username'
						name='username'
						defaultValue='mor_2314'
					/>
					<input
						className='w-80 h-12 px-3 py-2 mt-4 text-lg text-gray-700 placeholder-gray-500 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600'
						type='password'
						placeholder='Password'
						name='password'
						defaultValue='83r5^_'
					/>
				</div>

				<div className='flex flex-col items-center justify-center'>
					<button
						className='w-80 h-12 px-3 py-2 mt-4 text-lg text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 disabled:opacity-50'
						type='submit'
						disabled={isLoading}
					>
						Sign In
					</button>
				</div>
			</form>
		</Fragment>
	);
};

export default withoutAuth(SignIn);
