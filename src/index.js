import timingInfo from './performance'
import { getUrl, uuid } from './util.js';
import notify from './notify.js';

const stat = {
	online(uid, e, u) {
		if (!uid) {
			uid = uuid()
		}
		notify("1", { uid, e, u })
	},
	timing() {
		const s = timingInfo()
		if (s) {
			s.url = getUrl()
		}
		notify("2", s)
	}
};

setTimeout(() => {
	stat.timing()
}, 5e3)

export default stat