import { ERR_TYPES } from '../config.js';
import notify from '../notify.js';

export default () => {
	if (window.frames[0]) {
		window.frames[0].onerror = function(msg, filename, lineno, colno, error) {
			const stack = error ? `${error.name} ${error.message} ${error.stack}` : '';
			const data = {
				type: ERR_TYPES.IFRAME,
				msg,
				filename,
				lineno,
				colno,
				stack
			};
			notify(data);
		};
	}
};
