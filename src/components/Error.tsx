type TProps = {
	title: string;
	text: string;
};

export const Error = ({ title, text }: TProps) => {
	return (
		<div className="flex h-full grow gap-4 flex-col items-center justify-center">
			<h1 className="mb-2 text-center text-6xl font-bold text-cyan-800 dark:text-cyan-200">
				{title}
			</h1>
			<p className="mb-12 text-center text-3xl font-bold text-pink-600 dark:text-pink-500">
				{text}
			</p>
		</div>
	);
};
