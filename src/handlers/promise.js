import { ERR_TYPES } from '../config.js';
import notify from '../notify.js';

export default () => {
	window.addEventListener('unhandledrejection', function(e) {
		const reason = e.reason;
		let msg = reason.toString(),
			stack;
		if (reason instanceof Error) {
			stack = `${reason.name} ${reason.message} ${reason.stack}`;
		}
		const data = {
			type: ERR_TYPES.PROMISE,
			msg
		};
		if (stack) {
			data.stack = stack;
		}
		notify(data);
	});
};
