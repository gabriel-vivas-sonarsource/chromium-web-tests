description("This test checks the SVGStringList API - utilizing the requiredExtensions property of SVGRectElement");

var svgElement = document.createElementNS("http://www.w3.org/2000/svg", "svg");
var rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
rect.setAttribute("requiredExtensions", "foo bar");

debug("");
debug("Check initial requiredExtensions values");
shouldBe("rect.requiredExtensions.numberOfItems", "2");
shouldBeEqualToString("rect.requiredExtensions.getItem(0)", "foo");
shouldBeEqualToString("rect.requiredExtensions.getItem(1)", "bar");

debug("");
debug("Check that getItem() does NOT return live strings, as the IDL defines the return types as plain DOMString");
var firstItem = rect.requiredExtensions.getItem(0);
shouldBeEqualToString("firstItem = 'test'", "test");
shouldBe("rect.requiredExtensions.numberOfItems", "2");
shouldBeEqualToString("rect.requiredExtensions.getItem(0)", "foo");
shouldBeEqualToString("rect.requiredExtensions.getItem(1)", "bar");

successfullyParsed = true;
