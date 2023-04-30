import { ReactNode } from 'react';

type TProps = {
	children: ReactNode;
};

export const PageHeader = ({ children }: TProps) => {
	return <div className="my-8 text-center text-xl md:my-12">{children}</div>;
};
