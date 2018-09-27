import { isObject, getUrl, getScreen, getTitle, getDpr } from './util.js';
import performance from './performance.js';

const config = {
	url: '',
	rate: 0.5
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

const notify = data => {
	if (isObject(data)) {
		data.url = getUrl();
		data.screen = getScreen();
		data.title = getTitle();
		data.dpr = getDpr();
		if (data.timing || Math.random() > config.rate) {
			data.timing = performance.timing();
		}
		post(data);
	}
};

const url = url => {
	config.url = url;
};

export default notify;
export { url };
