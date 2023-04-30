import { motion } from 'framer-motion';

type TProps = {
	name: string;
	value: string;
	label?: string;
	type?: string;
	placeholder?: string;
	error?: string;
	handleChange: (name: string, value: string) => void;
};

export const Input = ({
	name,
	value,
	label,
	placeholder,
	type = 'text',
	error,
	handleChange
}: TProps) => {
	return (
		<p className="relative mt-6">
			{label && (
				<label className="block" htmlFor={name}>
					{label}
				</label>
			)}

			{type === 'textarea' ? (
				<textarea
					className="w-full h-40 py-2 text-lg bg-transparent border-0 resize-y border-b-3 border-dark focus:border-yellow focus:ring-0"
					name={name}
					id={name}
					value={value}
					onChange={(e) => handleChange(name, e.target.value)}
					placeholder={placeholder}
				/>
			) : (
				<input
					className="w-full py-2 text-lg bg-transparent border-0 resize-y border-b-3 border-dark focus:border-yellow focus:ring-0"
					type={type}
					name={name}
					id={name}
					value={value}
					onChange={(e) => handleChange(name, e.target.value)}
					placeholder={placeholder}
				/>
			)}

			{error && (
				<motion.span
					className="absolute -right-8 -top-2 rotate-[20deg] text-sm text-pink"
					initial={{
						transform: 'rotate(-20) scale(0)',
						opacity: 0
					}}
					animate={{
						transform: 'rotate(20deg) scale(1)',
						opacity: 1
					}}
					exit={{ opacity: 0 }}
					transition={{
						duration: 0.2,
						type: 'spring',
						stiffness: 500,
						damping: 20
					}}
				>
					{error}
				</motion.span>
			)}
		</p>
	);
};
