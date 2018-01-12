# dotString2ObjKey
形如 x.xx.xxx的字符串转换成对象的key值

## 方法调用
const dotToObjKey = require('dotString2ObjKey');
+ 例一
```js
console.log(dotToObjKey('a', '例一')); // { a: '例一'}
```

+ 例二
```js
console.log(dotToObjKey('a.b', '例二')); // { a: { b: '例二' } }
```

+ 例三
```js
console.log(dotToObject('a.b.c', '例三')); // { a: { b: { c: '例三' } } }
```
