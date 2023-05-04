exports.isEmpty = function (obj) {
    if (obj === null || typeof obj === 'undefined') {
        return true;
    }
    if (typeof obj === 'string' && (!obj || !obj.trim())) {
        return true;
    }
    if (Array.isArray(obj) && obj.length == 0) {
        return true;
    }
    if (typeof obj === 'object' && !Array.isArray(obj)) {
        for (var name in obj) {
            return false;
        }
        return true;
    }
    return false;
};

exports.isNotEmpty = function (obj) {
    return !isEmpty(obj);
};

exports.isNumber = function (numberValue) {
    return !isNaN(parseFloat(numberValue)) && isFinite(numberValue);
};

exports.isInteger = function (n, options) {
    if (options && options.allowString && typeof n === 'string') {
        var oldN = n;
        n = parseInt(n);
        return oldN === '' + n && Number(n) === n && n % 1 === 0;
    } else {
        return Number(n) === n && n % 1 === 0;
    }
};

exports.isBoolean = function (booleanValue) {
    return booleanValue == true || booleanValue == false;
};

exports.isObject = function (value) {
    return !isEmpty(value) && typeof (value) === 'object';
};

exports.isString = function (value) {
    return (typeof value === 'string');
};

let isFunction = function (object) {
    let getType = {};
    return !isEmpty(object) && getType.toString.call(object) === '[object Function]';
};