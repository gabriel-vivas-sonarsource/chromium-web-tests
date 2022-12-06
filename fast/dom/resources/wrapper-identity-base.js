// We use a static list of window properties to avoid breaking when new properties are added.
var staticWindowProperties = [
    'CSSPrimitiveValue',
    'CSSRule',
    'CSSStyleDeclaration',
    'CSSImportRule',
    'CSSMediaRule',
    'CSSFontFaceRule',
    'CSSPageRule',
    'WebKitCSSKeyframeRule',
    'WebKitCSSKeyframesRule',
    'DOMException',
    'DOMParser',
    'Document',
    'DocumentFragment',
    'Element',
    'EvalError',
    'Event',
    'HTMLAnchorElement',
    'HTMLAreaElement',
    'HTMLBRElement',
    'HTMLBaseElement',
    'HTMLBodyElement',
    'HTMLButtonElement',
    'HTMLCanvasElement',
    'HTMLDListElement',
    'HTMLDirectoryElement',
    'HTMLDivElement',
    'HTMLDocument',
    'HTMLElement',
    'HTMLFieldSetElement',
    'HTMLFontElement',
    'HTMLFormElement',
    'HTMLHRElement',
    'HTMLHeadElement',
    'HTMLHeadingElement',
    'HTMLHtmlElement',
    'HTMLImageElement',
    'HTMLInputElement',
    'HTMLIsIndexElement',
    'HTMLLIElement',
    'HTMLLabelElement',
    'HTMLLegendElement',
    'HTMLLinkElement',
    'HTMLMapElement',
    'HTMLMenuElement',
    'HTMLMetaElement',
    'HTMLModElement',
    'HTMLOListElement',
    'HTMLOptGroupElement',
    'HTMLOptionElement',
    'HTMLParagraphElement',
    'HTMLParamElement',
    'HTMLPreElement',
    'HTMLQuoteElement',
    'HTMLScriptElement',
    'HTMLSelectElement',
    'HTMLStyleElement',
    'HTMLTextAreaElement',
    'HTMLTitleElement',
    'HTMLUListElement',
    'Image',
    'MutationEvent',
    'Node',
    'NodeFilter',
    'Option',
    'Range',
    'RangeError',
    'ReferenceError',
    'SyntaxError',
    'TypeError',
    'URIError',
    'XMLDocument',
    'XMLHttpRequest',
    'XMLSerializer',
    'XPathEvaluator',
    'XPathResult',
    'XSLTProcessor',
    'addEventListener',
    'alert',
    'atob',
    'blur',
    'btoa',
    'captureEvents',
    'clearInterval',
    'clearTimeout',
    'clientInformation',
    'close',
    'closed',
    'confirm',
    'console',
    'crypto',
    'defaultStatus',
    'defaultstatus',
    'document',
    'event',
    'find',
    'focus',
    'frameElement',
    'frames',
    'getComputedStyle',
    'getMatchedCSSRules',
    'getSelection',
    'history',
    'location',
    'locationbar',
    'log',
    'menubar',
    'moveBy',
    'moveTo',
    'name',
    'navigator',
    'offscreenBuffering',
    'onabort',
    'onbeforeunload',
    'onblur',
    'onchange',
    'onclick',
    'ondblclick',
    'onerror',
    'onfocus',
    'onkeydown',
    'onkeypress',
    'onkeyup',
    'onload',
    'onmousedown',
    'onmousemove',
    'onmouseout',
    'onmouseover',
    'onmouseup',
    'onmousewheel',
    'onreset',
    'onresize',
    'onscroll',
    'onsearch',
    'onselect',
    'onsubmit',
    'onunload',
    'open',
    'opener',
    'parent',
    'personalbar',
    'print',
    'prompt',
    'releaseEvents',
    'removeEventListener',
    'resizeBy',
    'resizeTo',
    'screen',
    'scroll',
    'scrollBy',
    'scrollTo',
    'scrollbars',
    'self',
    'setInterval',
    'setTimeout',
    'status',
    'statusbar',
    'stop',
    'test',
    'toolbar',
    'top',
    'window'
];


function isEqualJS(a, b)
{
    return a === b;
}

function isEqualObjC(a, b)
{
    return Boolean(objCController.identityIsEqual(a, b));
}

function testJS(s)
{
    shouldBeTrue("var object = " + s + "; isEqualJS(object, object);");
}

function testObjC(s)
{
    shouldBeTrue("var object = " + s + "; isEqualObjC(object, object);");
}
