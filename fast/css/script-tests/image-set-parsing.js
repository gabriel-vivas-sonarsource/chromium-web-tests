description('Test the parsing of the image-set functions.');

var result;

function testImageSetRule(description, property, rule, isPrefixed) {
  rule = `${isPrefixed ? '-webkit-' : ''}image-set(${rule})`;

  debug('');
  debug(`${description} : ${rule}`);

  var div = document.createElement('div');
  div.style[property] = rule;
  document.body.appendChild(div);

  result = div.style[property].replace(/url\("[^#]*#/g, 'url("#');
  shouldBeEqualToString('result', rule);

  document.body.removeChild(div);
}

function testImageSetRules(description, property, rule) {
  // Test standard image-set
  testImageSetRule(description, property, rule, false);

  // Test '-webkit-' prefixed image set
  testImageSetRule(description, property, rule, true);
}

testImageSetRules(
    'Single value for background-image', 'background-image', 'url("#a") 1x');

testImageSetRules(
    'Multiple values for background-image', 'background-image',
    'url("#a") 1x, url("#b") 2x');

testImageSetRules(
    'Multiple values for background-image, out of order', 'background-image',
    'url("#c") 3x, url("#b") 2x, url("#a") 1x');

testImageSetRules('Single value for content', 'content', 'url("#a") 1x');

testImageSetRules(
    'Multiple values for content', 'content', 'url("#a") 1x, url("#b") 2x');

testImageSetRules(
    'Single value for border-image', '-webkit-border-image', 'url("#a") 1x');

testImageSetRules(
    'Multiple values for border-image', '-webkit-border-image',
    'url("#a") 1x, url("#b") 2x');

testImageSetRules(
    'Single value for -webkit-mask-box-image-source',
    '-webkit-mask-box-image-source', 'url("#a") 1x');

testImageSetRules(
    'Multiple values for -webkit-mask-box-image-source',
    '-webkit-mask-box-image-source', 'url("#a") 1x, url("#b") 2x');

successfullyParsed = true;
