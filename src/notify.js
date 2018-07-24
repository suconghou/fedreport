import { isObject, getUrl, getScreen, getTitle, getDpr } from './util.js';
const config = {
	url: ''
};
const post = data => {
	const xhr = window.XMLHttpRequest;
	if (xhr) {
		try {
			const xmlhttp = new xhr();
			xmlhttp.open('POST', config.url, true);
			xmlhttp.withCredentials = true;
			xmlhttp.send(JSON.stringify(data));
		} catch (e) {
			console.error(e);
		}
	}
};

export default data => {
	if (isObject(data)) {
		data.url = getUrl();
		data.screen = getScreen();
		data.title = getTitle();
		data.dpr = getDpr();
		post(data);
	}
};

export const url = url => {
	config.url = url;
};
