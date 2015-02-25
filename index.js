'use strict';

var fs = require('graceful-fs');
var path = require('path');
var _ = require('lodash');

function findModulesDown(dirPath) {
	if (!_.isString(dirPath)) {
		dirPath = '.';
	}

	return _(fs.readdirSync(dirPath))
		.map(function (child) {
			return path.join(dirPath, child);
		})
		//.map(_.curry(path.join, 2)(dirPath)) // lodash/lodash#998
		.filter(function (child) {
			return fs.lstatSync(child).isDirectory();
		})
		.map(function (child) {
			var modules = [];

			if (path.basename(child) === 'node_modules') {
				modules.push(path.join(child));
			}

			return modules.concat(findModulesDown(child));
		})
		.flattenDeep()
		.value();
}

module.exports = findModulesDown;
