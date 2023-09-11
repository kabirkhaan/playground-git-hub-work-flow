// const core = require('@actions/core');
const fs = require('fs');

try {
  const workflowStartDate = Date(); //core.getInput('workflow-start-time');
  // const runnerName = core.getInput('runner-name');
  var proj = {
    startDate : workflowStartDate,
    name: runnerName
  };

  const result = JSON.stringify(proj)
  console.log(result);

  try {
     fs.writeFile('./workflow-report.json', result, (error) => {
      if (error) {
          throw error;
      }
      console.log("File has been created");
    });
  } catch {
    // core.info(`Could not read .xcode-version file. Using Xcode ${defaultVersion} as default.`);
    // core.setOutput('xcode_version', defaultVersion);
  }
} catch (error) {
  // core.setFailed(error.message);
}