// DO NOT EDIT! This test has been generated by /html/canvas/tools/gentest.py.
// OffscreenCanvas test in a worker:size.attributes.parse.octal
// Description:Parsing of non-negative integers
// Note:

importScripts("/resources/testharness.js");
importScripts("/html/canvas/resources/canvas-tests.js");

var t = async_test("Parsing of non-negative integers");
var t_pass = t.done.bind(t);
var t_fail = t.step_func(function(reason) {
    throw reason;
});
t.step(function() {

var canvas = new OffscreenCanvas(100, 50);
var ctx = canvas.getContext('2d');

canvas.width = '0100';
canvas.height = '0100';
_assertSame(canvas.width, 100, "canvas.width", "100");
_assertSame(canvas.height, 100, "canvas.height", "100");
t.done();

});
done();
