const core = require('@actions/core');
const fs = require('fs');

try {
  const defaultVersion = core.getInput('default_version');
  const forceVersion = core.getInput('force_version');
  if (forceVersion) {
    core.info(`Overriding Xcode version to: ${forceVersion}`);
    core.setOutput('xcode_version', forceVersion);
    return
  }

  try {
    const xcodeVersion = fs.readFileSync('.xcode-version', 'utf8').trim();
    if (xcodeVersion) {
      core.info(`Parsed Xcode version: ${xcodeVersion}`);
      core.setOutput('xcode_version', xcodeVersion);
    } else {
      core.info(`Could not parse Xcode version from .xcode-version file. Using Xcode ${defaultVersion} as default.`);
      core.setOutput('xcode_version', defaultVersion);
    }
  } catch {
    core.info(`Could not read .xcode-version file. Using Xcode ${defaultVersion} as default.`);
    core.setOutput('xcode_version', defaultVersion);
  }
} catch (error) {
  core.setFailed(error.message);
}
