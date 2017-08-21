// this is what you would do if you were one to do things the easy way:
// var parseJSON = JSON.parse;

// but you're not, so you'll write it from scratch:
var parseJSON = function(json) {
  // your code goes here
  var escapeChars = {
    b: '\b',
    f: '\f',
    n: '\n',
    r: '\r',
    t: '\t',
    '"': '\"',
    '/': '\\'
  };
  var index = 0;
  var currChar = json.charAt(index);
  var skip = function(currChar) {
    if (currChar) {
      index++;
      return currChar;
    }
  };
  var determineValue = function (currChar) {
    if (currChar.constructor === Array) {
      parseArray(currChar);
    } else if (currChar.constructor === Object) {
      parseObject(currChar);
    } else if (currChar.constructor === Number) {
      parseNumber(currChar);
    } else if (currChar.constructor === String) {
      parseString(currChar);
    } else {
      parseOther(currChar);
    }
  };
  var removeWhiteSpace = function (currChar) {
    if (currChar <= ' ') {
      skip(currChar);
    }
  };
  var parseString = function (currChar) {
    var resultString = '';
    if (currChar === '"') {
      while (skip()) {
        if (escapeChars.hasOwnProperty(currChar)) {
          resultString += escapeChars(currChar);
          skip();
        }
        resultString += currChar;
        skip();
      } 
      return resultString;
    } else {
      throw new SyntaxError('Does not start with opening quote');
    }
  };
  var parseNumber = function (currChar) {

  };
};
