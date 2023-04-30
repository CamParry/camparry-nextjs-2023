export const filesToPaths = (files: string[]) => {
	return files.map((file) => ({
		params: { post: file.split('.')[0] }
	}));
};
