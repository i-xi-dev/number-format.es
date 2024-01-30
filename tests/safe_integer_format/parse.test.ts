import { assertStrictEquals, assertThrows } from "../deps.ts";
import { SafeIntegerFormat } from "../../mod.ts";

Deno.test("SafeIntegerFormat.parse(string)", () => {
  assertStrictEquals(SafeIntegerFormat.parse(Number.MAX_SAFE_INTEGER.toString(10)), Number.MAX_SAFE_INTEGER);
  assertStrictEquals(SafeIntegerFormat.parse("1"), 1);
  assertStrictEquals(SafeIntegerFormat.parse("0"), 0);
  assertStrictEquals(SafeIntegerFormat.parse("-0"), 0);
  assertStrictEquals(SafeIntegerFormat.parse("-1"), -1);
  assertStrictEquals(SafeIntegerFormat.parse(Number.MIN_SAFE_INTEGER.toString(10)), Number.MIN_SAFE_INTEGER);

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
      SafeIntegerFormat.parse("99999999999999999999999999999999999999999999999999");
    },
    RangeError,
    "str",
  );
});
