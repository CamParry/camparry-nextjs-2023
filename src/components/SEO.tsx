import Head from 'next/head';

type TProps = {
	title: string;
	description: string;
};

export const SEO = ({ title, description }: TProps) => {
	return (
		<Head>
			<title>{title} | Cam Parry</title>
			<meta name="description" content={description} />
		</Head>
	);
};
