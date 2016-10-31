"use strict";
var classes_1 = require("./classes");
console.log("File System started.");
var fs = new classes_1.FileSystem();
var file = new classes_1.File();
file.id = 'GUID';
file.title = 'First File';
fs.add(file, '/');
var items = fs.getItems('/');
console.log("Number of files: " + items.length);
//# sourceMappingURL=app.js.map