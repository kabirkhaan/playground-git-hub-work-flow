/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 936:
/***/ ((module) => {

module.exports = eval("require")("@actions/core");


/***/ }),

/***/ 147:
/***/ ((module) => {

"use strict";
module.exports = require("fs");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __nccwpck_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			__webpack_modules__[moduleId](module, module.exports, __nccwpck_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete __webpack_module_cache__[moduleId];
/******/ 		}
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat */
/******/ 	
/******/ 	if (typeof __nccwpck_require__ !== 'undefined') __nccwpck_require__.ab = __dirname + "/";
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
const core = __nccwpck_require__(936);
const fs = __nccwpck_require__(147);

try {
  const workflowStartDate = core.getInput('workflow-start-time');
  // const runnerName = core.getInput('runner-name');
  var proj = {
    startDate : workflowStartDate
  };

  const result = JSON.stringify(proj);
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

})();

module.exports = __webpack_exports__;
/******/ })()
;