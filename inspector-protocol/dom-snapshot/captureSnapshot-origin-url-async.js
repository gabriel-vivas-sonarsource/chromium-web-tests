(async function(testRunner) {
  var {page, session, dp} = await testRunner.startBlank('Tests that DOMSnapshot.captureSnapshot records origin url of dom nodes generated by script.');
  await dp.DOMSnapshot.enable();
  await dp.Runtime.enable();
  const res = await dp.Runtime.setAsyncCallStackDepth({maxDepth: 10});

  await session.evaluateAsync(`
      setTimeout("document.body.appendChild(document.createElement('div'))", 0);
      new Promise(fulfill => setTimeout(fulfill), 0);
      \n//# sourceURL=http://a.test/script.js`);

  const {result} = await dp.DOMSnapshot.captureSnapshot({'computedStyles': []});
  function lookupRareString(table, index) {
    const entryIndex = table.index.indexOf(index);
    return entryIndex >= 0 ? result.strings[table.value[entryIndex]] : "";
  }
  const nodes = result.documents[0].nodes;
  let nodeIndex = 0;
  for (const nameIndex of nodes.nodeName) {
    const name = result.strings[nameIndex];
    if (name === 'DIV') {
      const originURL = lookupRareString(nodes.originURL, nodeIndex);
      testRunner.log(`${name}: ${originURL}`);
    }
    ++nodeIndex;
  }
  testRunner.completeTest();
})