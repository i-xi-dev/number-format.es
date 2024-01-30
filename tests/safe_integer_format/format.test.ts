import { assertStrictEquals, assertThrows } from "../deps.ts";
import { SafeIntegerFormat } from "../../mod.ts";

Deno.test("SafeIntegerFormat.format(number)", () => {
  assertStrictEquals(
    SafeIntegerFormat.format(Number.MAX_SAFE_INTEGER),
    Number.MAX_SAFE_INTEGER.toString(10),
  );
  assertStrictEquals(SafeIntegerFormat.format(10), "10");
  assertStrictEquals(SafeIntegerFormat.format(9), "9");
  assertStrictEquals(SafeIntegerFormat.format(8), "8");
  assertStrictEquals(SafeIntegerFormat.format(7), "7");
  assertStrictEquals(SafeIntegerFormat.format(6), "6");
  assertStrictEquals(SafeIntegerFormat.format(5), "5");
  assertStrictEquals(SafeIntegerFormat.format(4), "4");
  assertStrictEquals(SafeIntegerFormat.format(3), "3");
  assertStrictEquals(SafeIntegerFormat.format(2), "2");
  assertStrictEquals(SafeIntegerFormat.format(1), "1");
  assertStrictEquals(SafeIntegerFormat.format(0), "0");
  assertStrictEquals(SafeIntegerFormat.format(-0), "0");
  assertStrictEquals(SafeIntegerFormat.format(-1), "-1");
  assertStrictEquals(SafeIntegerFormat.format(-2), "-2");
  assertStrictEquals(SafeIntegerFormat.format(-3), "-3");
  assertStrictEquals(SafeIntegerFormat.format(-4), "-4");
  assertStrictEquals(SafeIntegerFormat.format(-5), "-5");
  assertStrictEquals(SafeIntegerFormat.format(-6), "-6");
  assertStrictEquals(SafeIntegerFormat.format(-7), "-7");
  assertStrictEquals(SafeIntegerFormat.format(-8), "-8");
  assertStrictEquals(SafeIntegerFormat.format(-9), "-9");
  assertStrictEquals(SafeIntegerFormat.format(-10), "-10");
  assertStrictEquals(
    SafeIntegerFormat.format(Number.MIN_SAFE_INTEGER),
    Number.MIN_SAFE_INTEGER.toString(10),
  );

  assertThrows(
    () => {
      SafeIntegerFormat.format(undefined as unknown as number);
    },
    TypeError,
    "int",
  );
  assertThrows(
    () => {
      SafeIntegerFormat.format(1.1);
    },
    TypeError,
    "int",
  );
  assertThrows(
    () => {
      SafeIntegerFormat.format(99999999999999999);
    },
    TypeError,
    "int",
  );
});

Deno.test("SafeIntegerFormat.format(number, {}) - radix:10", () => {
  const op = { radix: 10 } as const;

  assertStrictEquals(
    SafeIntegerFormat.format(Number.MAX_SAFE_INTEGER, op),
    Number.MAX_SAFE_INTEGER.toString(10),
  );
  assertStrictEquals(SafeIntegerFormat.format(10, op), "10");
  assertStrictEquals(SafeIntegerFormat.format(9, op), "9");
  assertStrictEquals(SafeIntegerFormat.format(8, op), "8");
  assertStrictEquals(SafeIntegerFormat.format(7, op), "7");
  assertStrictEquals(SafeIntegerFormat.format(6, op), "6");
  assertStrictEquals(SafeIntegerFormat.format(5, op), "5");
  assertStrictEquals(SafeIntegerFormat.format(4, op), "4");
  assertStrictEquals(SafeIntegerFormat.format(3, op), "3");
  assertStrictEquals(SafeIntegerFormat.format(2, op), "2");
  assertStrictEquals(SafeIntegerFormat.format(1, op), "1");
  assertStrictEquals(SafeIntegerFormat.format(0, op), "0");
  assertStrictEquals(SafeIntegerFormat.format(-0, op), "0");
  assertStrictEquals(SafeIntegerFormat.format(-1, op), "-1");
  assertStrictEquals(SafeIntegerFormat.format(-2, op), "-2");
  assertStrictEquals(SafeIntegerFormat.format(-3, op), "-3");
  assertStrictEquals(SafeIntegerFormat.format(-4, op), "-4");
  assertStrictEquals(SafeIntegerFormat.format(-5, op), "-5");
  assertStrictEquals(SafeIntegerFormat.format(-6, op), "-6");
  assertStrictEquals(SafeIntegerFormat.format(-7, op), "-7");
  assertStrictEquals(SafeIntegerFormat.format(-8, op), "-8");
  assertStrictEquals(SafeIntegerFormat.format(-9, op), "-9");
  assertStrictEquals(SafeIntegerFormat.format(-10, op), "-10");
  assertStrictEquals(
    SafeIntegerFormat.format(Number.MIN_SAFE_INTEGER, op),
    Number.MIN_SAFE_INTEGER.toString(10),
  );
});

Deno.test("SafeIntegerFormat.format(number, {}) - radix:16", () => {
  const op = { radix: 16 } as const;

  assertStrictEquals(
    SafeIntegerFormat.format(Number.MAX_SAFE_INTEGER, op),
    Number.MAX_SAFE_INTEGER.toString(16).toUpperCase(),
  );
  assertStrictEquals(SafeIntegerFormat.format(16, op), "10");
  assertStrictEquals(SafeIntegerFormat.format(15, op), "F");
  assertStrictEquals(SafeIntegerFormat.format(14, op), "E");
  assertStrictEquals(SafeIntegerFormat.format(13, op), "D");
  assertStrictEquals(SafeIntegerFormat.format(12, op), "C");
  assertStrictEquals(SafeIntegerFormat.format(11, op), "B");
  assertStrictEquals(SafeIntegerFormat.format(10, op), "A");
  assertStrictEquals(SafeIntegerFormat.format(9, op), "9");
  assertStrictEquals(SafeIntegerFormat.format(8, op), "8");
  assertStrictEquals(SafeIntegerFormat.format(7, op), "7");
  assertStrictEquals(SafeIntegerFormat.format(6, op), "6");
  assertStrictEquals(SafeIntegerFormat.format(5, op), "5");
  assertStrictEquals(SafeIntegerFormat.format(4, op), "4");
  assertStrictEquals(SafeIntegerFormat.format(3, op), "3");
  assertStrictEquals(SafeIntegerFormat.format(2, op), "2");
  assertStrictEquals(SafeIntegerFormat.format(1, op), "1");
  assertStrictEquals(SafeIntegerFormat.format(0, op), "0");
  assertStrictEquals(SafeIntegerFormat.format(-0, op), "0");
  assertStrictEquals(SafeIntegerFormat.format(-1, op), "-1");
  assertStrictEquals(SafeIntegerFormat.format(-2, op), "-2");
  assertStrictEquals(SafeIntegerFormat.format(-3, op), "-3");
  assertStrictEquals(SafeIntegerFormat.format(-4, op), "-4");
  assertStrictEquals(SafeIntegerFormat.format(-5, op), "-5");
  assertStrictEquals(SafeIntegerFormat.format(-6, op), "-6");
  assertStrictEquals(SafeIntegerFormat.format(-7, op), "-7");
  assertStrictEquals(SafeIntegerFormat.format(-8, op), "-8");
  assertStrictEquals(SafeIntegerFormat.format(-9, op), "-9");
  assertStrictEquals(SafeIntegerFormat.format(-10, op), "-A");
  assertStrictEquals(SafeIntegerFormat.format(-11, op), "-B");
  assertStrictEquals(SafeIntegerFormat.format(-12, op), "-C");
  assertStrictEquals(SafeIntegerFormat.format(-13, op), "-D");
  assertStrictEquals(SafeIntegerFormat.format(-14, op), "-E");
  assertStrictEquals(SafeIntegerFormat.format(-15, op), "-F");
  assertStrictEquals(SafeIntegerFormat.format(-16, op), "-10");
  assertStrictEquals(
    SafeIntegerFormat.format(Number.MIN_SAFE_INTEGER, op),
    Number.MIN_SAFE_INTEGER.toString(16).toUpperCase(),
  );
});

Deno.test("SafeIntegerFormat.format(number, {}) - radix:8", () => {
  const op = { radix: 8 } as const;

  assertStrictEquals(
    SafeIntegerFormat.format(Number.MAX_SAFE_INTEGER, op),
    Number.MAX_SAFE_INTEGER.toString(8),
  );
  assertStrictEquals(SafeIntegerFormat.format(8, op), "10");
  assertStrictEquals(SafeIntegerFormat.format(7, op), "7");
  assertStrictEquals(SafeIntegerFormat.format(6, op), "6");
  assertStrictEquals(SafeIntegerFormat.format(5, op), "5");
  assertStrictEquals(SafeIntegerFormat.format(4, op), "4");
  assertStrictEquals(SafeIntegerFormat.format(3, op), "3");
  assertStrictEquals(SafeIntegerFormat.format(2, op), "2");
  assertStrictEquals(SafeIntegerFormat.format(1, op), "1");
  assertStrictEquals(SafeIntegerFormat.format(0, op), "0");
  assertStrictEquals(SafeIntegerFormat.format(-0, op), "0");
  assertStrictEquals(SafeIntegerFormat.format(-1, op), "-1");
  assertStrictEquals(SafeIntegerFormat.format(-2, op), "-2");
  assertStrictEquals(SafeIntegerFormat.format(-3, op), "-3");
  assertStrictEquals(SafeIntegerFormat.format(-4, op), "-4");
  assertStrictEquals(SafeIntegerFormat.format(-5, op), "-5");
  assertStrictEquals(SafeIntegerFormat.format(-6, op), "-6");
  assertStrictEquals(SafeIntegerFormat.format(-7, op), "-7");
  assertStrictEquals(SafeIntegerFormat.format(-8, op), "-10");
  assertStrictEquals(
    SafeIntegerFormat.format(Number.MIN_SAFE_INTEGER, op),
    Number.MIN_SAFE_INTEGER.toString(8),
  );
});

Deno.test("SafeIntegerFormat.format(number, {}) - radix:2", () => {
  const op = { radix: 2 } as const;

  assertStrictEquals(
    SafeIntegerFormat.format(Number.MAX_SAFE_INTEGER, op),
    Number.MAX_SAFE_INTEGER.toString(2),
  );
  assertStrictEquals(SafeIntegerFormat.format(2, op), "10");
  assertStrictEquals(SafeIntegerFormat.format(1, op), "1");
  assertStrictEquals(SafeIntegerFormat.format(0, op), "0");
  assertStrictEquals(SafeIntegerFormat.format(-0, op), "0");
  assertStrictEquals(SafeIntegerFormat.format(-1, op), "-1");
  assertStrictEquals(SafeIntegerFormat.format(-2, op), "-10");
  assertStrictEquals(
    SafeIntegerFormat.format(Number.MIN_SAFE_INTEGER, op),
    Number.MIN_SAFE_INTEGER.toString(2),
  );
});

Deno.test("SafeIntegerFormat.format(number, {}) - minIntegralDigits:number", () => {
  const op = { minIntegralDigits: 3 } as const;

  assertStrictEquals(
    SafeIntegerFormat.format(Number.MAX_SAFE_INTEGER, op),
    Number.MAX_SAFE_INTEGER.toString(10),
  );
  assertStrictEquals(SafeIntegerFormat.format(1000, op), "1000");
  assertStrictEquals(SafeIntegerFormat.format(100, op), "100");
  assertStrictEquals(SafeIntegerFormat.format(10, op), "010");
  assertStrictEquals(SafeIntegerFormat.format(1, op), "001");
  assertStrictEquals(SafeIntegerFormat.format(0, op), "000");
  assertStrictEquals(SafeIntegerFormat.format(-0, op), "000");
  assertStrictEquals(SafeIntegerFormat.format(-1, op), "-001");
  assertStrictEquals(SafeIntegerFormat.format(-10, op), "-010");
  assertStrictEquals(SafeIntegerFormat.format(-100, op), "-100");
  assertStrictEquals(SafeIntegerFormat.format(-1000, op), "-1000");
  assertStrictEquals(
    SafeIntegerFormat.format(Number.MIN_SAFE_INTEGER, op),
    Number.MIN_SAFE_INTEGER.toString(10),
  );
});

Deno.test("SafeIntegerFormat.format(number, {}) - radix:16, lowerCase:true", () => {
  const op = { radix: 16, lowerCase: true } as const;

  assertStrictEquals(
    SafeIntegerFormat.format(Number.MAX_SAFE_INTEGER, op),
    Number.MAX_SAFE_INTEGER.toString(16),
  );
  assertStrictEquals(SafeIntegerFormat.format(16, op), "10");
  assertStrictEquals(SafeIntegerFormat.format(15, op), "f");
  assertStrictEquals(SafeIntegerFormat.format(14, op), "e");
  assertStrictEquals(SafeIntegerFormat.format(13, op), "d");
  assertStrictEquals(SafeIntegerFormat.format(12, op), "c");
  assertStrictEquals(SafeIntegerFormat.format(11, op), "b");
  assertStrictEquals(SafeIntegerFormat.format(10, op), "a");
  assertStrictEquals(SafeIntegerFormat.format(9, op), "9");
  assertStrictEquals(SafeIntegerFormat.format(8, op), "8");
  assertStrictEquals(SafeIntegerFormat.format(7, op), "7");
  assertStrictEquals(SafeIntegerFormat.format(6, op), "6");
  assertStrictEquals(SafeIntegerFormat.format(5, op), "5");
  assertStrictEquals(SafeIntegerFormat.format(4, op), "4");
  assertStrictEquals(SafeIntegerFormat.format(3, op), "3");
  assertStrictEquals(SafeIntegerFormat.format(2, op), "2");
  assertStrictEquals(SafeIntegerFormat.format(1, op), "1");
  assertStrictEquals(SafeIntegerFormat.format(0, op), "0");
  assertStrictEquals(SafeIntegerFormat.format(-0, op), "0");
  assertStrictEquals(SafeIntegerFormat.format(-1, op), "-1");
  assertStrictEquals(SafeIntegerFormat.format(-2, op), "-2");
  assertStrictEquals(SafeIntegerFormat.format(-3, op), "-3");
  assertStrictEquals(SafeIntegerFormat.format(-4, op), "-4");
  assertStrictEquals(SafeIntegerFormat.format(-5, op), "-5");
  assertStrictEquals(SafeIntegerFormat.format(-6, op), "-6");
  assertStrictEquals(SafeIntegerFormat.format(-7, op), "-7");
  assertStrictEquals(SafeIntegerFormat.format(-8, op), "-8");
  assertStrictEquals(SafeIntegerFormat.format(-9, op), "-9");
  assertStrictEquals(SafeIntegerFormat.format(-10, op), "-a");
  assertStrictEquals(SafeIntegerFormat.format(-11, op), "-b");
  assertStrictEquals(SafeIntegerFormat.format(-12, op), "-c");
  assertStrictEquals(SafeIntegerFormat.format(-13, op), "-d");
  assertStrictEquals(SafeIntegerFormat.format(-14, op), "-e");
  assertStrictEquals(SafeIntegerFormat.format(-15, op), "-f");
  assertStrictEquals(SafeIntegerFormat.format(-16, op), "-10");
  assertStrictEquals(
    SafeIntegerFormat.format(Number.MIN_SAFE_INTEGER, op),
    Number.MIN_SAFE_INTEGER.toString(16),
  );
});

Deno.test("SafeIntegerFormat.format(number, {}) - prefix:string", () => {
  const op = { prefix: "#$ " } as const;

  assertStrictEquals(
    SafeIntegerFormat.format(Number.MAX_SAFE_INTEGER, op),
    "#$ " + Number.MAX_SAFE_INTEGER.toString(10),
  );
  assertStrictEquals(SafeIntegerFormat.format(1000, op), "#$ 1000");
  assertStrictEquals(SafeIntegerFormat.format(100, op), "#$ 100");
  assertStrictEquals(SafeIntegerFormat.format(10, op), "#$ 10");
  assertStrictEquals(SafeIntegerFormat.format(1, op), "#$ 1");
  assertStrictEquals(SafeIntegerFormat.format(0, op), "#$ 0");
  assertStrictEquals(SafeIntegerFormat.format(-0, op), "#$ 0");
  assertStrictEquals(SafeIntegerFormat.format(-1, op), "#$ -1");
  assertStrictEquals(SafeIntegerFormat.format(-10, op), "#$ -10");
  assertStrictEquals(SafeIntegerFormat.format(-100, op), "#$ -100");
  assertStrictEquals(SafeIntegerFormat.format(-1000, op), "#$ -1000");
  assertStrictEquals(
    SafeIntegerFormat.format(Number.MIN_SAFE_INTEGER, op),
    "#$ " + Number.MIN_SAFE_INTEGER.toString(10),
  );
});

Deno.test("SafeIntegerFormat.format(number, {}) - suffix:string", () => {
  const op = { suffix: " %&" } as const;

  assertStrictEquals(
    SafeIntegerFormat.format(Number.MAX_SAFE_INTEGER, op),
    Number.MAX_SAFE_INTEGER.toString(10) + " %&",
  );
  assertStrictEquals(SafeIntegerFormat.format(1000, op), "1000 %&");
  assertStrictEquals(SafeIntegerFormat.format(100, op), "100 %&");
  assertStrictEquals(SafeIntegerFormat.format(10, op), "10 %&");
  assertStrictEquals(SafeIntegerFormat.format(1, op), "1 %&");
  assertStrictEquals(SafeIntegerFormat.format(0, op), "0 %&");
  assertStrictEquals(SafeIntegerFormat.format(-0, op), "0 %&");
  assertStrictEquals(SafeIntegerFormat.format(-1, op), "-1 %&");
  assertStrictEquals(SafeIntegerFormat.format(-10, op), "-10 %&");
  assertStrictEquals(SafeIntegerFormat.format(-100, op), "-100 %&");
  assertStrictEquals(SafeIntegerFormat.format(-1000, op), "-1000 %&");
  assertStrictEquals(
    SafeIntegerFormat.format(Number.MIN_SAFE_INTEGER, op),
    Number.MIN_SAFE_INTEGER.toString(10) + " %&",
  );
});
