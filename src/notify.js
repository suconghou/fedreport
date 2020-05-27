import { isObject, buildQuery } from './util.js';
const base = "http://127.0.0.1:6060/stat/";

export default (type, data) => {
	if (isObject(data)) {
		const img = new Image();
		img.src = base + type + '?' + buildQuery(data)
	} else {
		console.error("not support data")
	}
};
