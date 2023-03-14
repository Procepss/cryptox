import type { AppProps } from 'next/app';
import dynamic from 'next/dynamic';

import { AppLayout } from '@/components/layout/AppLayout';

import '@/styles/main.scss';
import 'swiper/css/bundle';
import { NavigationProvider } from '@/context/NavigationContext/NavigationProvider';

const DynamicAppLayout = dynamic(Promise.resolve(AppLayout), {
	ssr: false,
});

const App = ({ Component, pageProps }: AppProps) => (
	<NavigationProvider>
		<DynamicAppLayout>
			<Component {...pageProps} />
		</DynamicAppLayout>
	</NavigationProvider>
);

export default App;
