import { MDXCode } from '@/components/MDXCode';
import { MDXLink } from '@/components/MDXLink';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';

export const MDX = ({ source }: { source: MDXRemoteSerializeResult }) => {
	return (
		<MDXRemote
			{...source}
			components={{
				code: MDXCode,
				a: (props: any) => <MDXLink {...props} />,
				strong: (props: any) => (
					<strong
						className="text-pink-500 dark:text-pink-400"
						{...props}
					/>
				)
			}}
		/>
	);
};
