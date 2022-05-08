import * as t from "https://deno.land/std/testing/asserts.ts";
import { Modulus10 } from "./Modulus10.js";

Deno.test("calc", () => {
  t.assertEquals(Modulus10.calc(978477101067), 3);
  t.assertEquals(Modulus10.calc("978477101067"), 3);
  t.assertEquals(Modulus10.calc("494887241497"), 5);
});
Deno.test("check", () => {
  t.assert(Modulus10.check("9784771010673"));
  t.assert(Modulus10.check(9784771010673));
  t.assert(Modulus10.check("4948872414975"));
});
Deno.test("addCheckDigit", () => {
  t.assertEquals(Modulus10.addCheckDigit("978477101067"), "9784771010673");
});
Deno.test("algorithm", () => {
  t.assertEquals(Modulus10.calc("1"), 9);
  t.assertEquals(Modulus10.calc("11"), 6);
  t.assertEquals(Modulus10.calc("111"), 5);
  t.assertEquals(Modulus10.calc("1111"), 2);
  t.assertEquals(Modulus10.calc("00001111"), 2);
  t.assertEquals(Modulus10.calc("11110"), 2);
});
