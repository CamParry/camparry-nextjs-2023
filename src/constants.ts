import {
	faGithub,
	faInstagram,
	faLinkedinIn,
	faTwitter
} from '@fortawesome/free-brands-svg-icons';

export const POSTS_DIR = 'content/posts';
export const CATS_DIR = 'content/categories';

export const MENU = [
	{
		title: 'Writing',
		path: '/writing'
	},
	{
		title: 'Coding',
		path: '/coding'
	},
	{
		title: 'About',
		path: '/about'
	}
];

export const SOCIALS = [
	{
		title: 'Chat with me on Twitter',
		url: 'https://twitter.com/camjparry',
		icon: faTwitter
	},
	{
		title: 'Follow me on Instagram',
		url: 'https://instagram.com/mrcamparry',
		icon: faInstagram
	},
	{
		title: 'Read my code on GitHub',
		url: 'https://github.com/camparry',
		icon: faGithub
	},
	{
		title: 'Connect with me on LinkedIn',
		url: 'https://www.linkedin.com/in/cam-parry/',
		icon: faLinkedinIn
	}
];
