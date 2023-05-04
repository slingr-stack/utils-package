exports.integer = function (min, max) {
    min = min || 0;
    max = max || 100;
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

exports.decimal = function (min, max) {
    min = min || 0;
    max = max || 100;
    // Generate a random decimal between 0 and 1
    const randomDecimal = Math.random();
    // Scale the decimal to the range (max - min) and shift it by min
    const scaledDecimal = randomDecimal * (max - min) + min;
    // Return the scaled decimal
    return scaledDecimal;
};

exports.string = function (length) {
    length = length || 10;
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
};

exports.boolean = function () {
    // Generate a random number between 0 and 1
    const randomNum = Math.random();
    // Convert the number to a boolean value (true if > 0.5, false otherwise)
    const randomBool = randomNum > 0.5;
    // Return the boolean value
    return randomBool;
};

exports.uuid = function () {
    var d = new Date().getTime();//Timestamp
    var d2 = ((typeof performance !== 'undefined') && performance.now && (performance.now() * 1000)) || 0;//Time in microseconds since page-load or 0 if unsupported
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = Math.random() * 16;//random number between 0 and 16
        if (d > 0) {//Use timestamp until depleted
            r = (d + r) % 16 | 0;
            d = Math.floor(d / 16);
        } else {//Use microseconds since page-load if supported
            r = (d2 + r) % 16 | 0;
            d2 = Math.floor(d2 / 16);
        }
        return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
    });
};