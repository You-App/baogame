module.exports = {
    inputFiles: [
        "static/scripts/index.js",
        "static/index.css",
        "static/*.ejs.html",
    ],
    excludeFiles: [],
    outputFiles: file => file.replace(".ejs", ""),
    json: false,
    ejsOptions: {
        rmWhitespace: true
    },
    sha: 256,
    customNewFileName: (filePath, fileString, md5String, baseName, extensionName) => baseName + "-" + md5String + extensionName,
    noOutputFiles: [],
};