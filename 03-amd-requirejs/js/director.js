var Director = (function(){
  var attrs = [];
  attrs.quotes = [];

  function Director(name){
    attrs.name = name;
  }
  Director.prototype.get = function(attr){
    return attrs[attr];
  };
  Director.prototype.set = function(attr,val){
    attrs[attr] = val;
  };
  Director.prototype.speak = function(){
    return attrs.quotes;
  };
  return Director;
})();