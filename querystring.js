/**
* Array.isArray shim.
*/

var isArray = Array.isArray || function(arr) {
  return toString.call(arr) == '[object Array]';
};


/**
* Object.keys shim.
*/

var objectKeys = Object.keys || function(obj) {
  var ret = [];
  for (var key in obj) ret.push(key);
  return ret;
};



/**
* Turn the given `obj` into a query string
*
* @param {Object} obj
* @return {String}
* @api public
*/

var stringify  = function(obj, prefix) {
  if (isArray(obj)) {
    return stringifyArray(obj, prefix);
  } else if ('[object Object]' == toString.call(obj)) {
    return stringifyObject(obj, prefix);
  } else if ('string' == typeof obj) {
    return stringifyString(obj, prefix);
  } else {
    return prefix + '=' + encodeURIComponent(String(obj));
  }
};

/**
* Stringify the given `str`.
*
* @param {String} str
* @param {String} prefix
* @return {String}
* @api private
*/

function stringifyString(str, prefix) {
  if (!prefix) throw new TypeError('stringify expects an object');
  return prefix + '=' + encodeURIComponent(str);
}

/**
* Stringify the given `arr`.
*
* @param {Array} arr
* @param {String} prefix
* @return {String}
* @api private
*/

function stringifyArray(arr, prefix) {
  var ret = [];
  if (!prefix) throw new TypeError('stringify expects an object');
  for (var i = 0; i < arr.length; i++) {
    ret.push(stringify(arr[i], prefix + '[' + i + ']'));
  }
  return ret.join('&');
}

/**
* Stringify the given `obj`.
*
* @param {Object} obj
* @param {String} prefix
* @return {String}
* @api private
*/

function stringifyObject(obj, prefix) {
  var ret = []
    , keys = objectKeys(obj)
    , key;

  for (var i = 0, len = keys.length; i < len; ++i) {
    key = keys[i];
    if ('' == key) continue;
    if (null == obj[key]) {
      ret.push(encodeURIComponent(key) + '=');
    } else {
      ret.push(stringify(obj[key], prefix
        ? prefix + '[' + encodeURIComponent(key) + ']'
        : encodeURIComponent(key)));
    }
  }

  return ret.join('&');
}

