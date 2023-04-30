import {
	ReactNode,
	createContext,
	useContext,
	useEffect,
	useState
} from 'react';

type TTheme = 'light' | 'dark';

type TSiteContext = {
	theme: TTheme;
	setTheme: (theme: TTheme) => void;
};

export const SiteContext = createContext<TSiteContext | null>(null);

type TProps = {
	children: ReactNode;
};

export const SiteProvider = ({ children }: TProps) => {
	const [theme, _setTheme] = useState<TTheme>('dark');

	const setTheme = (theme: TTheme) => {
		localStorage.setItem('theme', theme);
		_setTheme(theme);
	};

	useEffect(() => {
		const theme = localStorage.getItem('theme');
		if (theme === 'dark') {
			_setTheme('dark');
		} else if (theme === 'light') {
			_setTheme('light');
		}
	}, []);

	return (
		<SiteContext.Provider
			value={{
				theme,
				setTheme
			}}
		>
			{children}
		</SiteContext.Provider>
	);
};

export const useSiteContext = () => {
	return useContext(SiteContext) as TSiteContext;
};
