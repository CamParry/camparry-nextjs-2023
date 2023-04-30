import type { ReactNode } from 'react';

type TProps = {
	children: ReactNode;
	className?: string;
};

export const PageTitle = ({
	children,
	className = '',
}: TProps) => {
	return (
		<h1 className={`text-3xl font-bold leading-tight ${className}`}>
			{children}
		</h1>
	);
};
