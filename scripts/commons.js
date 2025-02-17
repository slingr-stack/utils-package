/****************************************************
 Helpers
 ****************************************************/

exports.isEmpty = function (obj) {
    // Check for null or undefined
    if (obj === null || typeof obj === 'undefined') {
        return true;
    }
    // Check for empty string
    if (typeof obj === 'string' && (!obj || !obj.trim())) {
        return true;
    }
    // Check for empty array
    if (Array.isArray(obj) && obj.length === 0) {
        return true;
    }
    // Check for empty object
    if (typeof obj === 'object' && !Array.isArray(obj)) {
        return Object.keys(obj).length === 0;
    }
    // If none of the above, it's not empty
    return false;
};

exports.isNotEmpty = function (obj) {
    return !exports.isEmpty(obj);
};

exports.isNumber = function (numberValue) {
    return !isNaN(parseFloat(numberValue)) && isFinite(numberValue);
};

exports.isBoolean = function (booleanValue) {
    return booleanValue === true || booleanValue === false;
};

exports.isObject = function (value) {
    return !exports.isEmpty(value) && typeof (value) === 'object';
};

exports.isString = function (value) {
    return (typeof value === 'string');
};

exports.isFunction = function (object) {
    let getType = {};
    return !exports.isEmpty(object) && getType.toString.call(object) === '[object Function]';
};
