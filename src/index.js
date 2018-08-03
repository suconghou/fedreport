import { isObject } from './util.js';
import iframe from './handlers/iframe.js';
import jsonp from './handlers/jsonp.js';
import promise from './handlers/promise.js';
import resource from './handlers/resource.js';
import script from './handlers/script.js';
import notify, { url as setUrl } from './notify.js';

export default {
	install(args) {
		// 安装监控,默认全部安装
		const { url, i, j, p, r, s } = args;
		setUrl(url);
		if (!i) {
			iframe();
		}
		if (!j) {
			jsonp();
		}
		if (!p) {
			promise();
		}
		if (!r) {
			resource();
		}
		if (!s) {
			script();
		}
	},
	notify(data) {
		// 自定义事件
		if (data instanceof Error) {
			notify({
				msg: data.toString(),
				stack: `${data.name} ${data.message} ${data.stack}`
			});
		} else if (isObject(data)) {
			notify(data);
		} else {
			notify({ data });
		}
	}
};

/**
 * 参数
 * url
 * 自定义事件格式
 * error 对象
 * object
 */
