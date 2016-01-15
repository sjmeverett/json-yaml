
var fs = require('fs');
var strip = require('strip-json-comments');
var yaml = require('yaml-js');

function parse(str) {
  var json = strip(str, {whitespace: false});

  if (/^\s*{.*}\s*$/.test(json)) {
    return JSON.parse(json);
  } else {
    return yaml.load(str);
  }
}

function readFileSync(path, encoding) {
  return parse(fs.readFileSync(path, encoding));
}

function readFile(path, encoding, callback) {
  fs.readFile(path, encoding, function (err, contents) {
    if (err) {
      callback(err);
    } else {
      callback(null, parse(contents));
    }
  });
}

module.exports = parse;
module.exports.readFileSync = readFileSync;
module.exports.readFile = readFile;
