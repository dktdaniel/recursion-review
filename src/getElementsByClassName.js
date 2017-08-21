// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  // your code here
  var results = [];
  var rootElement = document.body;
  getElementsByClassNameHelper(rootElement, className, results);
  return results;
};

var getElementsByClassNameHelper = function(rootElement, className, resultsSoFar) {
  if (_.contains(rootElement.classList, className)) {  
    resultsSoFar.push(rootElement);
  }
  for (var i = 0; i < rootElement.childNodes.length; i++) {
    getElementsByClassNameHelper(rootElement.childNodes[i], className, resultsSoFar);
  }
};

