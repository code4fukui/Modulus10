# Modulus10

チェックディジットアルゴリズム、Modulus10。

## 特徴

- EAN/JAN（バーコード）およびISBNのチェックディジット計算をサポート
- JavaScript（ESモジュール）による実装

## 使い方

```js
import { Modulus10 } from "https://code4fukui.github.io/Modulus10/Modulus10.js";

console.log(Modulus10.calc("978477101067")); // 3
console.log(Modulus10.check("9784771010673")); // true
console.log(Modulus10.addCheckDigit("978477101067")); // "9784771010673"
```

## テスト

```
deno test
```

## デモ

[Modulus10.js test](https://code4fukui.github.io/Modulus10/)

## ライセンス

MIT License — 詳細は [LICENSE](LICENSE) を参照してください。
