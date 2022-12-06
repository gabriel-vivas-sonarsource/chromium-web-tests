// DO NOT EDIT! This test has been generated by /html/canvas/tools/gentest.py.
// OffscreenCanvas test in a worker:2d.state.saverestore.lineCap
// Description:save()/restore() works for lineCap
// Note:

importScripts("/resources/testharness.js");
importScripts("/html/canvas/resources/canvas-tests.js");

var t = async_test("save()/restore() works for lineCap");
var t_pass = t.done.bind(t);
var t_fail = t.step_func(function(reason) {
    throw reason;
});
t.step(function() {

var canvas = new OffscreenCanvas(100, 50);
var ctx = canvas.getContext('2d');

// Test that restore() undoes any modifications
var old = ctx.lineCap;
ctx.save();
ctx.lineCap = "round";
ctx.restore();
_assertSame(ctx.lineCap, old, "ctx.lineCap", "old");

// Also test that save() doesn't modify the values
ctx.lineCap = "round";
old = ctx.lineCap;
    // we're not interested in failures caused by get(set(x)) != x (e.g.
    // from rounding), so compare against 'old' instead of against "round"
ctx.save();
_assertSame(ctx.lineCap, old, "ctx.lineCap", "old");
ctx.restore();
t.done();

});
done();
