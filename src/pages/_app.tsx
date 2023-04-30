import { ConsoleChat } from '@/components/ConsoleChat';
import { Layout } from '@/components/Layout';
import { SiteProvider } from '@/contexts/Site';
import '@/styles/global.css';
import { DefaultSeo } from 'next-seo';
import type { AppProps } from 'next/app';

const SEOConfig = {
	titleTemplate: '%s | ' + process.env.NEXT_PUBLIC_SITE_TITLE
};

const App = ({ Component, pageProps }: AppProps) => {
	return (
		<SiteProvider>
			<DefaultSeo {...SEOConfig} />
			<Layout>
				<Component {...pageProps} />
			</Layout>
			<ConsoleChat />
		</SiteProvider>
	);
};

export default App;
