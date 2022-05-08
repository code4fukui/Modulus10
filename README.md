# Modulus10.js

A checksums, Modulus10 Algorithm in JavaScript (ES module)

- [EAN/JAN(バーコード)](https://ja.wikipedia.org/wiki/EAN%E3%82%B3%E3%83%BC%E3%83%89)
- [ISBN](http://www.infonet.co.jp/ueyama/ip/glossary/isbn.html)

## how to use

```js
import { Modulus10 } from "https://code4fukui.github.io/Modulus10.js/Modulus10.js";

console.log(Modulus10.calc("978477101067")); // 3
console.log(Modulus10.check("9784771010673")); // true
console.log(Modulus10.addCheckDigit("978477101067")); // "9784771010673"
```

## test

```
deno test
```

## shortcut

```js
import { Modulus10 } from "https://js.sabae.cc/Modulus10.js";
```

## sample app

[Modulus10.js test](https://code4fukui.github.io/Modulus10.js/)

## related

- [Verhoeff.js](https://github.com/code4fukui/Verhoeff.js)
- [Luhn.js](https://github.com/code4fukui/Luhn.js)
- [Modulu11.js](https://github.com/code4fukui/Modulus11.js)
