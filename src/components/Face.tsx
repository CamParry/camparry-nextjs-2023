import { FunctionComponent } from 'react';

type TProps = {
	className?: string;
	leftEyeClass?: string;
	rightEyeClass?: string;
};

export const Face: FunctionComponent<TProps> = ({
	className = '',
	leftEyeClass = '',
	rightEyeClass = ''
}) => {
	return (
		<svg
			className={className}
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 1000 1000"
		>
			<path d="M860.92,10.22V227.57H763.07V135.34h-555v92.23H110.23V10.22Z" />
			<circle className={leftEyeClass} cx="625" cy="343" r="80" />
			<circle className={rightEyeClass} cx="338" cy="343" r="80" />
			<path d="M485.57,623.76c-11.23,36.89-34.49,53.74-89.82,53.74H267.42c-37.69,0-59.35,19.24-59.35,58.54v14.44H110.23V704c0-100.25,51.33-151.58,143.56-151.58H399c25.67,0,37.7-13.63,37.7-35.29V490.63h97.84v26.46c0,21.66,12,35.29,37.7,35.29H717.35c92.24,0,143.57,51.33,143.57,151.58v46.52H763.07V736c0-39.3-21.66-58.54-59.35-58.54H575.4C520.06,677.5,496.8,660.65,485.57,623.76Z" />
			<path d="M110.23,774.53h97.84V866h555V774.53h97.85V991.08H110.23Z" />
			<path d="M268.62,710.25c70.18,40.23,140.36,57.08,219,57.08s148.78-16.85,219-57.08V780c-55.68,38.36-132.87,58.95-219,58.95S325.23,818.32,268.62,780Z" />
		</svg>
	);
};
