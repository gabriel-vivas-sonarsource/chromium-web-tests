// [Name] SVGFESpotLightElement-dom-z-attr.js
// [Expected rendering result] A shining cone (performed by diffuse lighting) - and a series of PASS messages

description("Tests dynamic updates of the 'z' attribute of the SVGFESpotLightElement object")
createSVGTestCase();

var spotLightElement = createSVGElement("feSpotLight");
spotLightElement.setAttribute("x", "83");
spotLightElement.setAttribute("y", "-30");
spotLightElement.setAttribute("z", "0");
spotLightElement.setAttribute("pointsAtX", "83");
spotLightElement.setAttribute("pointsAtY", "70");
spotLightElement.setAttribute("pointsAtZ", "0");
spotLightElement.setAttribute("specularExponent", "1");
spotLightElement.setAttribute("limitingConeAngle", "15");

var gradientElement = createSVGElement("feDiffuseLighting");
gradientElement.setAttribute("surfaceScale", "1");
gradientElement.setAttribute("diffuseConstant", "1");
gradientElement.setAttribute("lighting-color", "aqua");
gradientElement.appendChild(spotLightElement);

var filterElement = createSVGElement("filter");
filterElement.setAttribute("id", "myFilter");
filterElement.setAttribute("filterUnits", "userSpaceOnUse");
filterElement.setAttribute("width", "200");
filterElement.setAttribute("height", "200");
filterElement.appendChild(gradientElement);

var defsElement = createSVGElement("defs");
defsElement.appendChild(filterElement);

rootSVGElement.appendChild(defsElement);

var rectElement = createSVGElement("rect");
rectElement.setAttribute("width", "200");
rectElement.setAttribute("height", "200");
rectElement.setAttribute("filter", "url(#myFilter)");
rootSVGElement.appendChild(rectElement);

shouldBeEqualToString("spotLightElement.getAttribute('z')", "0");

function repaintTest() {
    spotLightElement.setAttribute("z", "100");
    shouldBeEqualToString("spotLightElement.getAttribute('z')", "100");
}


var successfullyParsed = true;
