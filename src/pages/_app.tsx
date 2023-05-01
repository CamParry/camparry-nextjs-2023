import { ConsoleChat } from '@/components/ConsoleChat';
import { Layout } from '@/components/Layout';
import { SiteProvider } from '@/contexts/Site';
import '@/global.css';
import { config as fontAweConfig } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { DefaultSeo } from 'next-seo';
import type { AppProps } from 'next/app';

fontAweConfig.autoAddCss = false;

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
