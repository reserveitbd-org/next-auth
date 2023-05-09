import '@/assets/styles/globals.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { NextPage } from 'next';
import type { AppProps } from 'next/app';

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false,
			retry: false,
		},
	},
});

const App: NextPage<AppProps> = ({ Component, pageProps }) => {
	return (
		<QueryClientProvider client={queryClient}>
			<Component {...pageProps} />
		</QueryClientProvider>
	);
};

export default App;
