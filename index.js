const has = (obj, path) => obj != null && Object.prototype.hasOwnProperty.call(obj, path);

module.exports = (obj, path) => {
	if (!Array.isArray(path)) {
		return has(obj, path);
	}
	const { length } = path;

	for (let i = 0; i < length; i++) {
		const key = path[i];

		if (obj == null || !Object.prototype.hasOwnProperty.call(obj, key)) {
			return false;
		}
		obj = obj[key];
	}

	return !!length;
};