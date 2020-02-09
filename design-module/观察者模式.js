Events = function() {
  let depend, obj, one, remove, notify, __this;
  obj = {};
  __this = this;

  depend = function(key, eventfn) { //把简历扔盒子, key就是联系方式.
    let stack, _ref; //stack是盒子
    stack = (_ref = obj[key]) != null ? _ref : obj[key] = [];
    return stack.push(eventfn);
  };

  one = function(key, eventfn) {
    remove(key);
    return listen(key, eventfn);
  };

  remove = function(key) {
    let _ref;
    return (_ref = obj[key]) != null ? _ref.length = 0 : void 0;
  };

  notify = function() { //面试官打电话通知面试者
    let fn, stack, _i, _len, _ref, key;
    key = Array.prototype.shift.call(arguments);
    stack = (_ref = obj[key]) != null ? _ref : obj[key] = [];
    for (_i = 0, _len = stack.length; _i < _len; _i++) {
      fn = stack[_i];
      if (fn.apply(__this, arguments) === false) {
        return false;
      }
    }
  };

  return {
    depend: depend,
    one: one,
    remove: remove,
    notify: notify
  }
}

/**
 * 测试
 */
let TV = Events();

TV.depend('play', function(data) {
  console.log("今天是谁的电影：" + data.name);
});

//发布者
TV.notify('play', { 'name': '成龙' })