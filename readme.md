# Mask.js

Mask.js makes it easy to add a opacity layer to DOM Element. Especially for the annoying IE bug.

## Usage:

a `Mask` object will be automatically created and attached to `window`. It has 3 Public APIs:

```js
// debug: once the `debug` method is called, the layer's value 
// 	of opacity will set to 0.6
// NOTE: make sure the method is called before `set`
Mask.debug()

// create mask for dom element(s)
Mask.set(element1, element2, ... elementN);

// remove the mask over the dom element(s)
Mask.remove(element1, element2, ... elementN);
```

## License:

Licensed under MIT. (c) Sofish Lin
