// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

(async function(testRunner) {
  const {dp} = await testRunner.startURL(
      'https://devtools.test:8443/inspector-protocol/attribution-reporting/resources/permissions-policy-no-conversion-measurement.php',
      'Test that registering a trigger using a subresource request triggers an issue when the attribution-reporting Permissions Policy is disabled.');

  await dp.Audits.enable();

  const issue = dp.Audits.onceIssueAdded();

  await dp.Runtime.evaluate({expression: `
    document.body.innerHTML = '<img src="https://devtools.test:8443/inspector-protocol/attribution-reporting/resources/register-trigger.php">';
  `});

  testRunner.log((await issue).params.issue, 'Issue reported: ', ['request']);
  testRunner.completeTest();
})
