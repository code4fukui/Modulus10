# Modulus10

A check digit algorithm, Modulus10

- [EAN/JAN(バーコード)](https://ja.wikipedia.org/wiki/EAN%E3%82%B3%E3%83%BC%E3%83%89)
- [ISBN](http://www.infonet.co.jp/ueyama/ip/glossary/isbn.html)

## in JavaScript (ES module)

- [Modulus10.js](Modulus10.js)

### how to use

```js
import { Modulus10 } from "https://code4fukui.github.io/Modulus10/Modulus10.js";

console.log(Modulus10.calc("978477101067")); // 3
console.log(Modulus10.check("9784771010673")); // true
console.log(Modulus10.addCheckDigit("978477101067")); // "9784771010673"
```

### test

```
deno test
```

### sample app

[Modulus10.js test](https://code4fukui.github.io/Modulus10/)

## related

- [Verhoeff](https://github.com/code4fukui/Verhoeff)
- [Luhn](https://github.com/code4fukui/Luhn)
- [Modulu11](https://github.com/code4fukui/Modulus11)
- [Modulu9](https://github.com/code4fukui/Modulus9)
