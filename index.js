function dotStr2ObjKey(name, value) {
  var result = {};
  if (name) {
    if (/\.\w+$/.test(name)) {
      var match = name.match(/\.(\w+)$/);
      var tempKey = match[1];
      result[tempKey] = value;
      value = result;
      name = name.replace(/\.\w+$/, '');
      return dotStr2ObjKey(name, value);
    } else {
      result[name] = value;
      return result;
    }
  } else {
    return 'key值异常';
  }
}

module.exports = function (name, value) {
  dotStr2ObjKey(name, value);
}