import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { useSiteContext } from '@/contexts/Site';
import { c } from '@/utils/c';
import { AnimatePresence, motion } from 'framer-motion';
import { useRouter } from 'next/router';
import type { ReactNode } from 'react';

type TProps = {
	children: ReactNode;
};

export const Layout = ({ children }: TProps) => {
	const router = useRouter();
	const { theme } = useSiteContext();

	return (
		<div className={theme === 'dark' ? 'dark' : ''}>
			<div
				className={c(
					'flex',
					'min-h-screen',
					'flex-col',
					'bg-stone-100',
					'px-[5vw]',
					'font-body',
					'text-slate-700',
					'transition-colors',
					'dark:bg-slate-800',
					'dark:text-stone-100'
				)}
			>
				<Header />
				<AnimatePresence mode="wait">
					<motion.main
						key={router.route}
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						transition={{ duration: 0.2 }}
						className="flex grow flex-col"
					>
						{children}
					</motion.main>
				</AnimatePresence>
				<Footer />
			</div>
		</div>
	);
};
