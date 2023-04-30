import { AnimatePresence, LayoutGroup } from 'framer-motion';
import { ReactNode } from 'react';

type TProps = {
	children: ReactNode;
};

export const PostList = ({ children }: TProps) => {
	return (
		<div className="grid grid-cols-1 gap-8 md:grid-cols-2">
			<LayoutGroup>
				<AnimatePresence>{children}</AnimatePresence>
			</LayoutGroup>
		</div>
	);
};
