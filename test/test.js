'use strict';

var path = require('path');
var test = require('tape');
var findModulesDown = require('../');

test('find-node-modules-down', function (t) {
	t.plan(2);

	var n = 'node_modules'; // i cba to type this so much

	t.deepEquals(findModulesDown('test'), [
		'test/' + n, 'test/something/' + n, 'test/something/' + n + '/' + n
	]);

	t.deepEquals(findModulesDown('test/something'), [
		'test/something/' + n, 'test/something/' + n + '/' + n
	]);
});
