import type { ReactNode } from 'react';

type TProps = {
	children: ReactNode;
};

export const Content = ({ children }: TProps) => {
	return (
		<div className="mx-auto flex w-[56rem] max-w-full grow flex-col pb-24">
			{children}
		</div>
	);
};
