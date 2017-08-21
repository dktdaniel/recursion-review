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
    '/': '\\'
  };
  var index = 0;
  var currChar = json.charAt(index);

  var skip = function(currChar) {
    if (currChar) {
      index++;
      return currChar;
    } else {
      throw new SyntaxError('End of string');
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
    while (currChar && currChar <= ' ') {
      skip(currChar);
    }
  };

  var parseString = function (currChar) {
    var resultString = '';
    if (currChar === '"') {
      while (skip()) {
        skip();
        if (currChar === '"') {
          return resultString;
        }

      //escape chars
        


        resultString += determineValue(currChar);    
      }
    
        
    }
  };

  var parseNumber = function (currChar) {
    var resultNumString = '';
    if ((currChar >= '0' && currChar <= '9') || currChar === '.' || currChar === '-') {
      resultNumString += currChar;
      skip();
    }
    if (isNaN(index + 1)) {
      return resultNumString;
    } else {
      throw new SyntaxError('Weird number');
    }
  };

  var parseObject = function (currChar) {
    var resultObj = {};
    if (currChar === '{') {
      skip();
      determineValue(currChar);
      if (nextChar === '}') {
        return resultObj;
      }
    } else if (currChar === '}') {

        return resultObj;
    } else {
      throw new SyntaxError('Does not start with opening bracket');
    }
  };
};