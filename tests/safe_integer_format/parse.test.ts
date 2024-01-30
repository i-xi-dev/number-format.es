import { assertStrictEquals, assertThrows } from "../deps.ts";
import { SafeIntegerFormat } from "../../mod.ts";

Deno.test("SafeIntegerFormat.parse(string)", () => {
  assertStrictEquals(
    SafeIntegerFormat.parse(Number.MAX_SAFE_INTEGER.toString(10)),
    Number.MAX_SAFE_INTEGER,
  );
  assertStrictEquals(SafeIntegerFormat.parse("10"), 10);
  assertStrictEquals(SafeIntegerFormat.parse("9"), 9);
  assertStrictEquals(SafeIntegerFormat.parse("8"), 8);
  assertStrictEquals(SafeIntegerFormat.parse("7"), 7);
  assertStrictEquals(SafeIntegerFormat.parse("6"), 6);
  assertStrictEquals(SafeIntegerFormat.parse("5"), 5);
  assertStrictEquals(SafeIntegerFormat.parse("4"), 4);
  assertStrictEquals(SafeIntegerFormat.parse("3"), 3);
  assertStrictEquals(SafeIntegerFormat.parse("2"), 2);
  assertStrictEquals(SafeIntegerFormat.parse("1"), 1);
  assertStrictEquals(SafeIntegerFormat.parse("0"), 0);
  assertStrictEquals(SafeIntegerFormat.parse("-0"), 0);
  assertStrictEquals(SafeIntegerFormat.parse("-1"), -1);
  assertStrictEquals(SafeIntegerFormat.parse("-2"), -2);
  assertStrictEquals(SafeIntegerFormat.parse("-3"), -3);
  assertStrictEquals(SafeIntegerFormat.parse("-4"), -4);
  assertStrictEquals(SafeIntegerFormat.parse("-5"), -5);
  assertStrictEquals(SafeIntegerFormat.parse("-6"), -6);
  assertStrictEquals(SafeIntegerFormat.parse("-7"), -7);
  assertStrictEquals(SafeIntegerFormat.parse("-8"), -8);
  assertStrictEquals(SafeIntegerFormat.parse("-9"), -9);
  assertStrictEquals(SafeIntegerFormat.parse("-10"), -10);
  assertStrictEquals(
    SafeIntegerFormat.parse(Number.MIN_SAFE_INTEGER.toString(10)),
    Number.MIN_SAFE_INTEGER,
  );

  assertStrictEquals(SafeIntegerFormat.parse("010"), 10);
  assertStrictEquals(SafeIntegerFormat.parse("-010"), -10);

  assertThrows(
    () => {
      SafeIntegerFormat.parse(undefined as unknown as string);
    },
    TypeError,
    "str",
  );
  assertThrows(
    () => {
      SafeIntegerFormat.parse(null as unknown as string);
    },
    TypeError,
    "str",
  );
  assertThrows(
    () => {
      SafeIntegerFormat.parse(0 as unknown as string);
    },
    TypeError,
    "str",
  );

  assertThrows(
    () => {
      SafeIntegerFormat.parse("a");
    },
    TypeError,
    "parse error: a",
  );

  assertThrows(
    () => {
      SafeIntegerFormat.parse("1.1");
    },
    TypeError,
    "parse error: 1.1",
  );

  assertThrows(
    () => {
      SafeIntegerFormat.parse(
        "99999999999999999999999999999999999999999999999999",
      );
    },
    RangeError,
    "str",
  );
});

Deno.test("SafeIntegerFormat.parse(string, {}) - radix:10", () => {
  const op = { radix: 10 } as const;

  assertStrictEquals(
    SafeIntegerFormat.parse(Number.MAX_SAFE_INTEGER.toString(10), op),
    Number.MAX_SAFE_INTEGER,
  );
  assertStrictEquals(SafeIntegerFormat.parse("10", op), 10);
  assertStrictEquals(SafeIntegerFormat.parse("9", op), 9);
  assertStrictEquals(SafeIntegerFormat.parse("8", op), 8);
  assertStrictEquals(SafeIntegerFormat.parse("7", op), 7);
  assertStrictEquals(SafeIntegerFormat.parse("6", op), 6);
  assertStrictEquals(SafeIntegerFormat.parse("5", op), 5);
  assertStrictEquals(SafeIntegerFormat.parse("4", op), 4);
  assertStrictEquals(SafeIntegerFormat.parse("3", op), 3);
  assertStrictEquals(SafeIntegerFormat.parse("2", op), 2);
  assertStrictEquals(SafeIntegerFormat.parse("1", op), 1);
  assertStrictEquals(SafeIntegerFormat.parse("0", op), 0);
  assertStrictEquals(SafeIntegerFormat.parse("-0", op), 0);
  assertStrictEquals(SafeIntegerFormat.parse("-1", op), -1);
  assertStrictEquals(SafeIntegerFormat.parse("-2", op), -2);
  assertStrictEquals(SafeIntegerFormat.parse("-3", op), -3);
  assertStrictEquals(SafeIntegerFormat.parse("-4", op), -4);
  assertStrictEquals(SafeIntegerFormat.parse("-5", op), -5);
  assertStrictEquals(SafeIntegerFormat.parse("-6", op), -6);
  assertStrictEquals(SafeIntegerFormat.parse("-7", op), -7);
  assertStrictEquals(SafeIntegerFormat.parse("-8", op), -8);
  assertStrictEquals(SafeIntegerFormat.parse("-9", op), -9);
  assertStrictEquals(SafeIntegerFormat.parse("-10", op), -10);
  assertStrictEquals(
    SafeIntegerFormat.parse(Number.MIN_SAFE_INTEGER.toString(10), op),
    Number.MIN_SAFE_INTEGER,
  );

  assertStrictEquals(SafeIntegerFormat.parse("010", op), 10);
  assertStrictEquals(SafeIntegerFormat.parse("-010", op), -10);

  assertThrows(
    () => {
      SafeIntegerFormat.parse("1a", op);
    },
    TypeError,
    "parse error: 1a",
  );
});

Deno.test("SafeIntegerFormat.parse(string, {}) - radix:16", () => {
  const op = { radix: 16 } as const;

  assertStrictEquals(
    SafeIntegerFormat.parse(Number.MAX_SAFE_INTEGER.toString(16), op),
    Number.MAX_SAFE_INTEGER,
  );
  assertStrictEquals(SafeIntegerFormat.parse("10", op), 16);
  assertStrictEquals(SafeIntegerFormat.parse("f", op), 15);
  assertStrictEquals(SafeIntegerFormat.parse("F", op), 15);
  assertStrictEquals(SafeIntegerFormat.parse("e", op), 14);
  assertStrictEquals(SafeIntegerFormat.parse("E", op), 14);
  assertStrictEquals(SafeIntegerFormat.parse("d", op), 13);
  assertStrictEquals(SafeIntegerFormat.parse("D", op), 13);
  assertStrictEquals(SafeIntegerFormat.parse("c", op), 12);
  assertStrictEquals(SafeIntegerFormat.parse("C", op), 12);
  assertStrictEquals(SafeIntegerFormat.parse("b", op), 11);
  assertStrictEquals(SafeIntegerFormat.parse("B", op), 11);
  assertStrictEquals(SafeIntegerFormat.parse("a", op), 10);
  assertStrictEquals(SafeIntegerFormat.parse("A", op), 10);
  assertStrictEquals(SafeIntegerFormat.parse("9", op), 9);
  assertStrictEquals(SafeIntegerFormat.parse("8", op), 8);
  assertStrictEquals(SafeIntegerFormat.parse("7", op), 7);
  assertStrictEquals(SafeIntegerFormat.parse("6", op), 6);
  assertStrictEquals(SafeIntegerFormat.parse("5", op), 5);
  assertStrictEquals(SafeIntegerFormat.parse("4", op), 4);
  assertStrictEquals(SafeIntegerFormat.parse("3", op), 3);
  assertStrictEquals(SafeIntegerFormat.parse("2", op), 2);
  assertStrictEquals(SafeIntegerFormat.parse("1", op), 1);
  assertStrictEquals(SafeIntegerFormat.parse("0", op), 0);
  assertStrictEquals(SafeIntegerFormat.parse("-0", op), 0);
  assertStrictEquals(SafeIntegerFormat.parse("-1", op), -1);
  assertStrictEquals(SafeIntegerFormat.parse("-2", op), -2);
  assertStrictEquals(SafeIntegerFormat.parse("-3", op), -3);
  assertStrictEquals(SafeIntegerFormat.parse("-4", op), -4);
  assertStrictEquals(SafeIntegerFormat.parse("-5", op), -5);
  assertStrictEquals(SafeIntegerFormat.parse("-6", op), -6);
  assertStrictEquals(SafeIntegerFormat.parse("-7", op), -7);
  assertStrictEquals(SafeIntegerFormat.parse("-8", op), -8);
  assertStrictEquals(SafeIntegerFormat.parse("-9", op), -9);
  assertStrictEquals(SafeIntegerFormat.parse("-a", op), -10);
  assertStrictEquals(SafeIntegerFormat.parse("-A", op), -10);
  assertStrictEquals(SafeIntegerFormat.parse("-b", op), -11);
  assertStrictEquals(SafeIntegerFormat.parse("-B", op), -11);
  assertStrictEquals(SafeIntegerFormat.parse("-c", op), -12);
  assertStrictEquals(SafeIntegerFormat.parse("-C", op), -12);
  assertStrictEquals(SafeIntegerFormat.parse("-d", op), -13);
  assertStrictEquals(SafeIntegerFormat.parse("-D", op), -13);
  assertStrictEquals(SafeIntegerFormat.parse("-e", op), -14);
  assertStrictEquals(SafeIntegerFormat.parse("-E", op), -14);
  assertStrictEquals(SafeIntegerFormat.parse("-f", op), -15);
  assertStrictEquals(SafeIntegerFormat.parse("-F", op), -15);
  assertStrictEquals(SafeIntegerFormat.parse("-10", op), -16);
  assertStrictEquals(
    SafeIntegerFormat.parse(Number.MIN_SAFE_INTEGER.toString(16), op),
    Number.MIN_SAFE_INTEGER,
  );

  assertStrictEquals(SafeIntegerFormat.parse("010", op), 16);
  assertStrictEquals(SafeIntegerFormat.parse("-010", op), -16);

  assertThrows(
    () => {
      SafeIntegerFormat.parse("1g", op);
    },
    TypeError,
    "parse error: 1g",
  );
});

Deno.test("SafeIntegerFormat.parse(string, {}) - radix:8", () => {
  const op = { radix: 8 } as const;

  assertStrictEquals(
    SafeIntegerFormat.parse(Number.MAX_SAFE_INTEGER.toString(8), op),
    Number.MAX_SAFE_INTEGER,
  );
  assertStrictEquals(SafeIntegerFormat.parse("10", op), 8);
  assertStrictEquals(SafeIntegerFormat.parse("7", op), 7);
  assertStrictEquals(SafeIntegerFormat.parse("6", op), 6);
  assertStrictEquals(SafeIntegerFormat.parse("5", op), 5);
  assertStrictEquals(SafeIntegerFormat.parse("4", op), 4);
  assertStrictEquals(SafeIntegerFormat.parse("3", op), 3);
  assertStrictEquals(SafeIntegerFormat.parse("2", op), 2);
  assertStrictEquals(SafeIntegerFormat.parse("1", op), 1);
  assertStrictEquals(SafeIntegerFormat.parse("0", op), 0);
  assertStrictEquals(SafeIntegerFormat.parse("-0", op), 0);
  assertStrictEquals(SafeIntegerFormat.parse("-1", op), -1);
  assertStrictEquals(SafeIntegerFormat.parse("-2", op), -2);
  assertStrictEquals(SafeIntegerFormat.parse("-3", op), -3);
  assertStrictEquals(SafeIntegerFormat.parse("-4", op), -4);
  assertStrictEquals(SafeIntegerFormat.parse("-5", op), -5);
  assertStrictEquals(SafeIntegerFormat.parse("-6", op), -6);
  assertStrictEquals(SafeIntegerFormat.parse("-7", op), -7);
  assertStrictEquals(SafeIntegerFormat.parse("-10", op), -8);
  assertStrictEquals(
    SafeIntegerFormat.parse(Number.MIN_SAFE_INTEGER.toString(8), op),
    Number.MIN_SAFE_INTEGER,
  );

  assertStrictEquals(SafeIntegerFormat.parse("010", op), 8);
  assertStrictEquals(SafeIntegerFormat.parse("-010", op), -8);

  assertThrows(
    () => {
      SafeIntegerFormat.parse("8", op);
    },
    TypeError,
    "parse error: 8",
  );
});

Deno.test("SafeIntegerFormat.parse(string, {}) - radix:2", () => {
  const op = { radix: 2 } as const;

  assertStrictEquals(
    SafeIntegerFormat.parse(Number.MAX_SAFE_INTEGER.toString(2), op),
    Number.MAX_SAFE_INTEGER,
  );
  assertStrictEquals(SafeIntegerFormat.parse("10", op), 2);
  assertStrictEquals(SafeIntegerFormat.parse("1", op), 1);
  assertStrictEquals(SafeIntegerFormat.parse("0", op), 0);
  assertStrictEquals(SafeIntegerFormat.parse("-0", op), 0);
  assertStrictEquals(SafeIntegerFormat.parse("-1", op), -1);
  assertStrictEquals(SafeIntegerFormat.parse("-10", op), -2);
  assertStrictEquals(
    SafeIntegerFormat.parse(Number.MIN_SAFE_INTEGER.toString(2), op),
    Number.MIN_SAFE_INTEGER,
  );

  assertStrictEquals(SafeIntegerFormat.parse("010", op), 2);
  assertStrictEquals(SafeIntegerFormat.parse("-010", op), -2);

  assertThrows(
    () => {
      SafeIntegerFormat.parse("3", op);
    },
    TypeError,
    "parse error: 3",
  );
});

Deno.test("SafeIntegerFormat.parse(string, {}) - prefix:string", () => {
  const op = { prefix: "#" } as const;

  assertStrictEquals(SafeIntegerFormat.parse("#1", op), 1);
  assertStrictEquals(SafeIntegerFormat.parse("#0", op), 0);
  assertStrictEquals(SafeIntegerFormat.parse("#-0", op), 0);
  assertStrictEquals(SafeIntegerFormat.parse("#-1", op), -1);

  assertStrictEquals(SafeIntegerFormat.parse("#010", op), 10);
  assertStrictEquals(SafeIntegerFormat.parse("#-010", op), -10);

  assertThrows(
    () => {
      SafeIntegerFormat.parse("#1#", op);
    },
    TypeError,
    "parse error: 1#",
  );
  assertThrows(
    () => {
      SafeIntegerFormat.parse("1", op);
    },
    TypeError,
    "unprefixed",
  );
});

Deno.test("SafeIntegerFormat.parse(string, {}) - prefix:any", () => {
  const op = { prefix: 1 as unknown as string } as const;

  assertStrictEquals(SafeIntegerFormat.parse("1", op), 1);
  assertStrictEquals(SafeIntegerFormat.parse("0", op), 0);
  assertStrictEquals(SafeIntegerFormat.parse("-0", op), 0);
  assertStrictEquals(SafeIntegerFormat.parse("-1", op), -1);

  assertStrictEquals(SafeIntegerFormat.parse("010", op), 10);
  assertStrictEquals(SafeIntegerFormat.parse("-010", op), -10);

  assertThrows(
    () => {
      SafeIntegerFormat.parse("#1#", op);
    },
    TypeError,
    "parse error: #1#",
  );
});

Deno.test("SafeIntegerFormat.parse(string, {}) - suffix:string", () => {
  const op = { suffix: "#" } as const;

  assertStrictEquals(SafeIntegerFormat.parse("1#", op), 1);
  assertStrictEquals(SafeIntegerFormat.parse("0#", op), 0);
  assertStrictEquals(SafeIntegerFormat.parse("-0#", op), 0);
  assertStrictEquals(SafeIntegerFormat.parse("-1#", op), -1);

  assertStrictEquals(SafeIntegerFormat.parse("010#", op), 10);
  assertStrictEquals(SafeIntegerFormat.parse("-010#", op), -10);

  assertThrows(
    () => {
      SafeIntegerFormat.parse("#1#", op);
    },
    TypeError,
    "parse error: #1",
  );
  assertThrows(
    () => {
      SafeIntegerFormat.parse("1", op);
    },
    TypeError,
    "unsuffixed",
  );
});

Deno.test("SafeIntegerFormat.parse(string, {}) - suffix:any", () => {
  const op = { suffix: true as unknown as string } as const;

  assertStrictEquals(SafeIntegerFormat.parse("1", op), 1);
  assertStrictEquals(SafeIntegerFormat.parse("0", op), 0);
  assertStrictEquals(SafeIntegerFormat.parse("-0", op), 0);
  assertStrictEquals(SafeIntegerFormat.parse("-1", op), -1);

  assertStrictEquals(SafeIntegerFormat.parse("010", op), 10);
  assertStrictEquals(SafeIntegerFormat.parse("-010", op), -10);

  assertThrows(
    () => {
      SafeIntegerFormat.parse("#1#", op);
    },
    TypeError,
    "parse error: #1#",
  );
});

Deno.test("SafeIntegerFormat.parse(string, {}) - prefix,suffix", () => {
  const op = { prefix: "%!", suffix: "#X" } as const;

  assertStrictEquals(SafeIntegerFormat.parse("%!1#X", op), 1);
  assertStrictEquals(SafeIntegerFormat.parse("%!0#X", op), 0);
  assertStrictEquals(SafeIntegerFormat.parse("%!-0#X", op), 0);
  assertStrictEquals(SafeIntegerFormat.parse("%!-1#X", op), -1);

  assertStrictEquals(SafeIntegerFormat.parse("%!010#X", op), 10);
  assertStrictEquals(SafeIntegerFormat.parse("%!-010#X", op), -10);

  assertThrows(
    () => {
      SafeIntegerFormat.parse("#1#", op);
    },
    TypeError,
    "unprefixed",
  );
  assertThrows(
    () => {
      SafeIntegerFormat.parse("%!#1#", op);
    },
    TypeError,
    "unsuffixed",
  );
  assertThrows(
    () => {
      SafeIntegerFormat.parse("%!#1#X", op);
    },
    TypeError,
    "parse error: #1",
  );
});
