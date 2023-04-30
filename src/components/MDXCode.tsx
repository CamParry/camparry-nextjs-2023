import { useSiteContext } from '@/contexts/Site';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/cjs/styles/prism';

export const MDXCode = ({ className, children, ...TProps }: any) => {
	children = children.replace(/\n+$/, '');
	const match = /language-(\w+)/.exec(className || '');
	return match ? (
		<SyntaxHighlighter
			language={match[1]}
			{...TProps}
			style={vscDarkPlus}
			customStyle={{
				opacity: '1',
				borderRadius: '0.5rem',
				padding: '0',
				margin: '0',
				fontSize: '1.75rem',
				lineHeight: '1',
				background: 'transparent'
			}}
			codeTagProps={{
				style: {
					fontSize: '1rem'
				}
			}}
		>
			{children}
		</SyntaxHighlighter>
	) : (
		<code
			className="inline-block rounded-lg px-2 font-normal before:content-none after:content-none"
			{...TProps}
		>
			{children}
		</code>
	);
};
