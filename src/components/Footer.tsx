import { DarkModeToggle } from '@/components/DarkModeToggle';
import { socials } from '@/content/socials';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Footer = () => {
	return (
		<footer className="fixed bottom-8 left-[5vw] right-[5vw] hidden md:block">
			<div className="absolute bottom-0 left-0 flex list-none flex-col justify-end gap-4">
				<DarkModeToggle />
			</div>
			<div className="absolute bottom-0 right-0 flex flex-col justify-end gap-4">
				{socials.map((item, key) => (
					<a
						key={key}
						href={item.url}
						title={item.title}
						target="_blank"
						className="flex h-12 w-12 items-center justify-center rounded-full bg-cyan-900 text-2xl text-stone-50 outline-none ring-pink-500 transition-all duration-300 hover:bg-cyan-800 focus-visible:ring-4 active:scale-90 dark:bg-cyan-700 hover:dark:bg-cyan-800"
					>
						<FontAwesomeIcon icon={item.icon} />
					</a>
				))}
			</div>
		</footer>
	);
};
