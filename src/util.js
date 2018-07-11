function S4() {
	return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
}
export const uuid = () => {
	return S4() + S4() + '-' + S4() + '-' + S4() + '-' + S4() + '-' + S4() + S4() + S4();
};

export const getUrl = () => {
	return window.location.href;
};

export const getUa = () => {
	return window.navigator.userAgent;
};

export const getCookie = () => {
	return document.cookie;
};

export const getScreen = () => {
	return `${window.screen.width}x${window.screen.height}`;
};

export const getTitle = () => {
	return document.title;
};

export const isObject = value => {
	return value && typeof value === 'object' && value.constructor === Object;
};
