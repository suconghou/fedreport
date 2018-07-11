import { ERR_TYPES } from '../config.js';
import notify from '../notify.js';

export default () => {
	window.addEventListener(
		'error',
		e => {
			if (e instanceof ErrorEvent) {
				// window.onerror may already reported
				const error = e.error;
				const stack = error ? `${error.name} ${error.message} ${error.stack}` : '';
				const data = {
					type: ERR_TYPES.SCRIPT,
					msg: e.message,
					filename: e.filename,
					lineno: e.lineno,
					colno: e.colno,
					stack
				};
				notify(data);
			} else {
				const data = {
					type: ERR_TYPES.RESOURCE,
					src: e.target.src,
					html: e.target.outerHTML
				};
				notify(data);
			}
		},
		true
	);
};
