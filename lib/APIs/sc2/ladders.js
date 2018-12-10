"use strict";

var API = void 0;
var params = void 0;

module.exports = {
	init: function init(axios, apiParams) {
		API = axios;
		params = apiParams;
	},

	get: function get(ladderId) {
		return new Promise(function (resolve, reject) {
			API.get(params.baseUrl + "/ladder/" + ladderId + "/").then(function (result) {
				return resolve(result.data);
			}).catch(function (error) {
				return reject(error);
			});
		});
	}
};