function foo() {
    return new Array();
}

function bar() {
    for (var i = 0; i < 10000000; ++i)
        foo();
}

bar();


