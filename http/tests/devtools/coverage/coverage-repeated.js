// Copyright 2017 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

(async function() {
  TestRunner.addResult(`Tests the coverage list view after finishing recording in the Coverage view.\n`);
  await TestRunner.loadLegacyModule('panels/coverage'); await TestRunner.loadTestModule('coverage_test_runner');
  await TestRunner.loadHTML(`
      <p class="class">
      </p>
    `);
  await TestRunner.addStylesheetTag('resources/highlight-in-source.css');

  await CoverageTestRunner.startCoverage(true);
  await TestRunner.addScriptTag('resources/coverage.js');
  await TestRunner.evaluateInPagePromise('performActions()');
  await CoverageTestRunner.stopCoverage();
  TestRunner.addResult('Initial');
  CoverageTestRunner.dumpCoverageListView();

  await CoverageTestRunner.startCoverage(true);
  await CoverageTestRunner.stopCoverage();
  TestRunner.addResult('After second session');
  CoverageTestRunner.dumpCoverageListView();

  var coverageView = Coverage.CoverageView.instance();
  coverageView.clear();
  await CoverageTestRunner.startCoverage(true);
  await CoverageTestRunner.stopCoverage();
  TestRunner.addResult('After clear');
  CoverageTestRunner.dumpCoverageListView();

  TestRunner.completeTest();
})();
