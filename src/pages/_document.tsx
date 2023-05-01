import { Head, Html, Main, NextScript } from 'next/document';

const Document = () => {
	return (
		<Html style={{ backgroundColor: 'rgb(15,23,42)' }}>
			<Head />
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
};

export default Document;
