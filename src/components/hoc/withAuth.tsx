import { authService, useAuth } from '@/libs/auth';
import { useRouter } from 'next/router';
import { ComponentType, useEffect } from 'react';

export const withAuth = <T extends object>(WrappedComponent: ComponentType<T>) => {
	// eslint-disable-next-line react/display-name
	return (props: T) => {
		const { isAuthenticated } = useAuth();
		const router = useRouter();

		useEffect(() => {
			if (!isAuthenticated) {
				router.push('/');
				authService.removeToken();
			}
		}, [isAuthenticated, router]);

		return <WrappedComponent {...props} />;
	};
};
