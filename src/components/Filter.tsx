type TProps = {
	tags: string[];
	filter: string | null;
	setFilter: (filter: string | null) => void;
};

export const Filter = ({ tags, filter, setFilter }: TProps) => {
	return (
		<ul className="mb-8 flex flex-wrap items-center gap-4">
			<li>
				<button
					onClick={() => setFilter(null)}
					className={`flex h-8 items-center justify-center rounded-lg px-4 pt-0.5 font-bold leading-none ${
						!filter
							? ' bg-pink-600 text-stone-50 dark:bg-pink-600 dark:text-stone-50'
							: ' bg-stone-200 text-cyan-800 dark:bg-slate-700 dark:text-stone-50'
					}`}
				>
					All
				</button>
			</li>
			{tags.map((tag, idx) => (
				<li key={idx}>
					<button
						onClick={() => setFilter(tag)}
						className={`flex h-8 items-center justify-center rounded-lg px-4 pt-0.5 font-bold leading-none ${
							filter === tag
								? ' bg-pink-600 text-stone-50 dark:bg-pink-600 dark:text-stone-50'
								: ' bg-stone-200 text-cyan-800 dark:bg-slate-700 dark:text-stone-50'
						}`}
					>
						{tag}
					</button>
				</li>
			))}
		</ul>
	);
};
