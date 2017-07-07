module.exports = {
  inputFiles: [
    'static/imgs/**/*.png'
  ],
  excludeFiles: [
    'static/imgs/**/*-*.png'
  ],
  outputFiles: file => file.replace('.ejs', ''),
  json: false,
  ejsOptions: {
    rmWhitespace: true
  },
  sha: 256,
  customNewFileName: (filePath, fileString, md5String, baseName, extensionName) => baseName + '-' + md5String + extensionName,
  es6: 'src/front/variables.ts',
  base: 'static/imgs'
}
