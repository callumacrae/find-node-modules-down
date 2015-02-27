'use strict';

var fs = require('graceful-fs');
var path = require('path');
var _ = require('lodash');
var isDir = require('is-directory');

function findModulesDown(dirPath) {
	if (!_.isString(dirPath)) {
		dirPath = '.';
	}

	return _(fs.readdirSync(dirPath))
		.map(_.partial(_.ary(path.join, 2), dirPath)) // Get full path
		.filter(isDir)
		.map(function (child) {
			var modulesDown = findModulesDown(child);

			if (path.basename(child) === 'node_modules') {
				modulesDown.unshift(path.join(child));
			}

			return modulesDown;
		})
		.flattenDeep()
		.value();
}

module.exports = findModulesDown;
