var Director = (function(){
  function Director(name){
    var attrs = [];
    attrs.quotes = [];
    attrs.name = name;

    this.get = function(attr){
      return attrs[attr];
    };
    this.set = function(attr,val){
      attrs[attr] = val;
    };
    this.speak = function(){
      return attrs.quotes;
    };
  }
  return Director;
})();