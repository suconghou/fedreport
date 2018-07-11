import { isObject, getUrl, getUa, getScreen, getCookie, getTitle, uuid } from './util.js';
const config = {
	url: ''
};
const post = data => {
	const xhr = window.XMLHttpRequest;
	if (xhr) {
		try {
			const xmlhttp = new xhr();
			xmlhttp.open('POST', config.url, true);
			xmlhttp.send(JSON.stringify(data));
		} catch (e) {
			console.error(e);
		}
	}
};

export default data => {
	if (isObject(data)) {
		data.uuid = uuid();
		data.ua = getUa();
		data.pageUrl = getUrl();
		data.cookie = getCookie();
		data.screen = getScreen();
		data.title = getTitle();
		post(data);
	}
};

export const url = url => {
	config.url = url;
};
