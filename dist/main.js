/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.jj = exports.emit = void 0;\nconst fs = __webpack_require__(/*! fs */ \"fs\");\nconst readFile = async () => { };\nconst callConfigFile = () => {\n    const file = fs.readFileSync(\"csv-sql.config.json\");\n    const data = JSON.parse(file.toString());\n    return data;\n};\nconst convertCsv = async ({ sql: sqlPath, csv, tableName }) => {\n    try {\n        const csvFile = await new Promise((res, rej) => {\n            fs.readFile(csv, (err, data) => {\n                if (err)\n                    rej(`Cannot loaded file ${csv}`);\n                res(data);\n            });\n        });\n        const csvRes = csvFile.toString();\n        const lines = csvRes.split(\"\\n\");\n        const sql = lines.reduce((sql, line) => {\n            const columns = line.split(\",\");\n            const newLine = `INSERT INTO ${tableName} VALUES (${columns.map((x) => `'${x.trim()}'`).join(\", \")});\\n`;\n            return sql + newLine;\n        }, \"\");\n        fs.writeFile(sqlPath, sql, (err) => { });\n    }\n    catch (e) {\n        console.log(e);\n    }\n};\nconst emit = () => {\n    const configs = callConfigFile();\n    configs.map(convertCsv);\n};\nexports.emit = emit;\nconst jj2j2 = 12;\nexports.jj = 12;\nexports[\"default\"] = jj2j2;\n\n\n//# sourceURL=webpack://csv-sql-gen/./src/main.ts?");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
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
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/main.ts");
/******/ 	
/******/ })()
;