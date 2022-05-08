const calc = (num) => {
  const s = num.toString();
  let sum = 0;
  for (let i = s.length - 1; i >= 0; i--) {
    const n = parseInt(s[i]);
    if (i % 2) {
      sum += n * 3;
    } else {
      sum += n;
    }
  }
  return (10 - sum % 10) % 10;
};

const check = (num) => {
  const s = num.toString();
  return calc(s.substring(0, s.length - 1)) == s[s.length - 1];
};

const addCheckDigit = (num) => {
  if (typeof num == "string") {
    return num + calc(num);
  }
  return num * 10 + calc(num);
};

export const Modulus10 = { calc, check, addCheckDigit };
