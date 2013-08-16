window.$ = function(selector) {
  // an object containing the matching keys and native get commands\
  var matches = {
    '#': 'getElementById',
    '.': 'getElementsByClassName',
    '@': 'getElementsByName',
    '=': 'getElementsByTagName',
    '*': 'querySelectorAll'
  }[selector[0]]; // you can treat a string as an array of characters
  // now pass the target without the key
  return (document[matches](selector.slice(1)));
};
window.NodeList.prototype.on = function(eventType,callback){
  Array.prototype.forEach.call(this,function(el){
    el.addEventListener(eventType,callback);
  });
}