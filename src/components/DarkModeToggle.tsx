import { useSiteContext } from '@/contexts/Site';
import { faMoon, faSun } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const DarkModeToggle = () => {
	const { theme, setTheme } = useSiteContext();
	return (
		<button
			title="Toggle dark mode"
			onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
			className="group flex h-10 w-10 items-center overflow-hidden rounded-full bg-cyan-900 outline-none ring-pink-500 transition-all duration-300 hover:bg-cyan-800 focus-visible:ring-4 active:scale-90 dark:bg-cyan-700 hover:dark:bg-cyan-800 md:h-12 md:w-12"
		>
			<div
				className={`flex transition-transform ${
					theme === 'light'
						? ''
						: '-translate-x-10 md:-translate-x-12'
				}`}
			>
				<div className="flex h-10 w-10 items-center justify-center text-2xl text-stone-50 md:h-12 md:w-12">
					<FontAwesomeIcon icon={faMoon} />
				</div>
				<div className="flex h-10 w-10 items-center justify-center text-2xl text-stone-50 md:h-12 md:w-12">
					<FontAwesomeIcon icon={faSun} />
				</div>
			</div>
		</button>
	);
};
