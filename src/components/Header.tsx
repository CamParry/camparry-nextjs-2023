import { DarkModeToggle } from '@/components/DarkModeToggle';
import { Face } from '@/components/Face';
import { menu } from '@/content/menu';
import { socials } from '@/content/socials';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FC, useState } from 'react';

export const Header: FC = () => {
	const [navOpen, setNavOpen] = useState(false);

	const handleNavToggle = () => {
		setNavOpen(!navOpen);
	};

	const router = useRouter();

	const isActive = (url: string) => {
		return router.asPath === url;
	};

	return (
		<header className={`py-6 ${navOpen ? '' : ''}`}>
			<div className="flex items-center">
				<Link
					href="/"
					className="group relative z-10 flex items-center gap-2 rounded-xl outline-none ring-pink-500 focus-visible:ring-4 md:gap-4"
				>
					<Face
						className="h-12 fill-slate-800 dark:fill-stone-50"
						leftEyeClass="transition-transform duration-100 origin-[0%_35%] group-hover:scale-y-0"
					/>
					<h1 className="text-dark translate-y-[3px] text-3xl font-bold text-cyan-800 dark:text-cyan-200 md:text-4xl">
						Cam Parry
					</h1>
				</Link>
				<nav className="ml-auto flex items-center gap-4">
					<div className="z-10 flex list-none flex-col justify-end md:hidden">
						<DarkModeToggle />
					</div>
					<button
						className="group z-10 flex h-10 w-10 items-center justify-center overflow-hidden rounded-full bg-cyan-900 text-2xl text-stone-50 outline-none ring-pink-500 transition-all duration-300 focus-visible:ring-4 active:scale-90 dark:bg-cyan-700 dark:hover:bg-cyan-800 md:hidden"
						onClick={() => handleNavToggle()}
						title="Toggle menu"
					>
						{/* <FontAwesomeIcon icon={faHamburger} /> */}
					</button>
					<div
						className={`md:hidden fixed right-0 top-0 flex h-screen overflow-hidden transition-all duration-200 ease-out ${
							navOpen ? 'w-screen' : 'w-0'
						}`}
					>
						<ul
							className={`flex w-full list-none flex-col items-center justify-center gap-1 overflow-hidden bg-stone-50 text-3xl font-semibold dark:bg-slate-800`}
						>
							{menu.map((item, key) => (
								<li key={key}>
									<Link
										href={item.url}
										className="relative block rounded-xl px-2 py-2 outline-none ring-pink-500 focus-visible:ring-4"
										onClick={() => {
											navOpen && handleNavToggle();
										}}
									>
										{item.title}
										{isActive(item.url) && (
											<div className="absolute bottom-0 left-0 h-1 w-full bg-pink-500" />
										)}
									</Link>
								</li>
							))}
							<li className="mt-12 flex justify-end gap-4">
								{socials.map((item, key) => (
									<Link
										key={key}
										href={item.url}
										title={item.title}
										target="_blank"
										className="group flex h-12 w-12 items-center justify-center rounded-full bg-cyan-900 outline-none ring-pink-500 transition-all duration-300 focus-visible:ring-4 active:scale-90 dark:bg-cyan-700"
									>
										{/* <FontAwesomeIcon icon={item.icon} /> */}
									</Link>
								))}
							</li>
						</ul>
					</div>
					<ul className="hidden h-auto items-center gap-8 text-xl font-bold md:flex">
						{menu.map((item, key) => (
							<li key={key}>
								<Link
									href={item.url}
									className="relative block rounded-xl p-2 outline-none ring-pink-500 focus-visible:ring-4"
								>
									{item.title}
									{isActive(item.url) && (
										<motion.div
											layoutId="underline"
											className="absolute bottom-0 left-0 h-1 w-full bg-pink-500"
										/>
									)}
								</Link>
							</li>
						))}
					</ul>
				</nav>
			</div>
		</header>
	);
};
