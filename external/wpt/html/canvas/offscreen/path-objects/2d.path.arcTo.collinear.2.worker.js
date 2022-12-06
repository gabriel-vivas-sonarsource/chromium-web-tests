// DO NOT EDIT! This test has been generated by /html/canvas/tools/gentest.py.
// OffscreenCanvas test in a worker:2d.path.arcTo.collinear.2
// Description:arcTo() with all points on a line, and P2 between P0/P1, draws a straight line to P1
// Note:

importScripts("/resources/testharness.js");
importScripts("/html/canvas/resources/canvas-tests.js");

var t = async_test("arcTo() with all points on a line, and P2 between P0/P1, draws a straight line to P1");
var t_pass = t.done.bind(t);
var t_fail = t.step_func(function(reason) {
    throw reason;
});
t.step(function() {

var canvas = new OffscreenCanvas(100, 50);
var ctx = canvas.getContext('2d');

ctx.fillStyle = '#f00';
ctx.fillRect(0, 0, 100, 50);
ctx.lineWidth = 50;
ctx.strokeStyle = '#0f0';
ctx.beginPath();
ctx.moveTo(0, 25);
ctx.arcTo(100, 25, 10, 25, 1);
ctx.stroke();
ctx.strokeStyle = '#f00';
ctx.beginPath();
ctx.moveTo(100, 25);
ctx.arcTo(200, 25, 110, 25, 1);
ctx.stroke();
_assertPixel(canvas, 50,25, 0,255,0,255);
t.done();

});
done();
