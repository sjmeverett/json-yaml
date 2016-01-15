
var expect = require('chai').expect;
var jsonYaml = require('../index');

describe('json-yaml', function () {
  it('parses json', function () {
    expect(jsonYaml('{"a": 1, "b": 2}')).to.eql({a: 1, b: 2});
  });

  it('parses json with surrounding whitespace', function () {
    expect(jsonYaml('\n\t {"a": 1, "b": 2}\n\t ')).to.eql({a: 1, b: 2});
  });

  it('parses json with comments', function () {
    expect(jsonYaml('//json\n{/*a comment*/"a": 1, "b": 2}')).to.eql({a: 1, b: 2});
  });

  it('parses yaml', function () {
    expect(jsonYaml('a: 1\nb: 2')).to.eql({a: 1, b: 2});
  });

  it('can read a file', function () {
    expect(jsonYaml.readFileSync(__dirname + '/test.yaml', 'utf8')).to.eql({a: 1, b: 2});
  });

  it('can read a file asynchronously', function (done) {
    jsonYaml.readFile(__dirname + '/test.yaml', 'utf8', function (err, result) {
      if (err) done(err);
      expect(result).to.eql({a: 1, b: 2});
      done();
    });
  })
});
