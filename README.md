# Utils package

## Overview

Set of common utilities to help with the scripting in the Slingr low code platform.

## Quick start

Once you have installed the package you can start using user helpers like this:

```js
// check data types
log(pkg.utils.commons.isEmpty(null)); // prints true
log(pkg.utils.commons.isNotEmpty('test')); // prints true
log(pkg.utils.commons.isObject({foo: 'bar'})); // prints true
log(pkg.utils.commons.isFunction({})); // prints false
log(pkg.utils.commons.isString('test')); // prints true
// generate random data utilies
log(pkg.utils.random.string(10)); // prints enO]MyDuR4
log(pkg.utils.random.integer(0, 10)); // prints 1
log(pkg.utils.random.decimal(1, 10)); // prints 6.8181
log(pkg.utils.random.boolean()); // prints false
```

## Javascript API

The following utilities are available in this package.

### Commons utilities
This is a set of utilities that allows to check data types.

#### Check if a variable is empty
```js
let company = record.field('company').val();
if (pkg.utils.commons.isEmpty(company)) {
    // do something...
}
```

#### Check if a variable is not empty**
```js
let company = record.field('company').val();
if (pkg.utils.commons.isNotEmpty(company)) {
    // do something...
}
```

#### Check if a variable is of type object
```js
let company = record.field('company').val();
if (pkg.utils.commons.isObject(company)) {
    // do something...
}
```

#### Check if a variable is of type function
```js
let company = record.field('company').equals;
if (pkg.utils.commons.isFunction(company)) {
    // do something...
}
```

#### Check if a variable is of type number**
```js
let score = record.field('score').val();
if (pkg.utils.commons.isNumber(score)) {
    // do something...
}
```

#### Check if a variable is of type string**
```js
let companyLabel = record.field('company').label();
if (pkg.utils.commons.isString(companyLabel)) {
    // do something...
}
```

#### Check if a variable is of type boolean**
```js
let isActive = record.field('active').val();
if (pkg.utils.commons.isBoolean(isActive)) {
    // do something...
}
```

### Random data utilities
This library helps to generate random data like strings, texts, numbers, etc. It is useful to generate sample data for testing purposes.

#### Generate random strings
```js
// generate a random string. By default it will return a string with random length of 10 characters.
pkg.utils.random.string(); 
// specify a length and the string will be exactly that length.
pkg.utils.random.string(5); 
// generate a random UUID
pkg.utils.random.uuid();
```

#### Generate random numbers
```js
// generate a random integer in the range 0 to 100
pkg.utils.random.integer(); 
// can optionally provide min and max
pkg.utils.random.integer(-20, 20); 
// generate a random integer in the range 0.0 to 100.0
pkg.utils.random.decimal();
// can optionally provide min and max
pkg.utils.random.decimal(-4.5, 5.5); 
```

#### Generate random boolean
```js
// generate a random boolean value
pkg.utils.random.boolean(); 
```





