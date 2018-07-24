export const getUrl = () => {
	return window.location.href;
};

export const getScreen = () => {
	return `${window.screen.width}x${window.screen.height}`;
};

export const getTitle = () => {
	return document.title;
};

export const getDpr = () => {
	return window.devicePixelRatio;
};

export const isObject = value => {
	return value && typeof value === 'object' && value.constructor === Object;
};
