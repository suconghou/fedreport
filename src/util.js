var toString = Object.prototype.toString;
let uid = '';
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

export const isDate = value => {
	return toString.apply(value) == '[object Date]';
};

export const isArray = value => {
	return toString.apply(value) == '[object Array]';
};

export const buildQuery = params => {
	if (!params) {
		return '';
	}
	var esc = encodeURIComponent;
	return Object.keys(params)
		.map(k => esc(k) + '=' + esc(params[k]))
		.join('&');
};

export const uuid = () => {
	if (uid) {
		return uid;
	}
	uid = localStorage.getItem('uuid')
	if (!uid) {
		function S4() {
			return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
		}
		uid = (S4() + S4() + "-" + S4() + "-" + S4() + "-" + S4() + "-" + S4() + S4() + S4());
		localStorage.setItem('uuid', uid)
	}
	return uid
}