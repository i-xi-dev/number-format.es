import {Radix,SafeInteger,StringEx}from "../deps.ts";

function _resolveRadix(radix: unknown): Radix {
  if (Object.values(Radix).includes(radix as Radix)) {
    return radix as Radix;
  }
  return Radix.DECIMAL;
}

function _resolveIntegralDigits(digits: unknown): SafeInteger {
  if (SafeInteger.isPositiveSafeInteger(digits)) {
    return digits as SafeInteger;
  }
  return 1;
}

const _RESOLVED_MARKER = Symbol();

export namespace IntegerFormat {
  export type Options = {
    radix?: Radix;
    minIntegralDigits?: SafeInteger;
    lowerCase?: boolean;
    prefix?: string;
    suffix?: string;
  };

  export namespace Options {
    export type Resolved = Readonly<{
      [_RESOLVED_MARKER]: true,
      radix: Radix;
      minIntegralDigits: SafeInteger;
      lowerCase: boolean;
      prefix: string;
      suffix: string;
    }>;

    export function resolve(options: Options | Resolved = {}): Resolved {
      if (_RESOLVED_MARKER in options) {
        return options;
      }

      const radix = _resolveRadix(options.radix);
      const minIntegralDigits = _resolveIntegralDigits(options.minIntegralDigits);
      const lowerCase = (options.lowerCase === true);
      const prefix = StringEx.isString(options.prefix) ? options.prefix : "";
      const suffix = StringEx.isString(options.suffix) ? options.suffix : "";

      return Object.freeze({
        [_RESOLVED_MARKER]: true as true,
        radix,
        minIntegralDigits,
        lowerCase,
        prefix,
        suffix,
      });
    }
  }

  export function parse(): SafeInteger {

  }

  export function format(int: SafeInteger, options: Options = {}): string {
    if (Number.isSafeInteger(int) !== true) {
      throw new TypeError("int");
    }
    const resolvedOptions = Options.resolve(options);
    let str = int.toString(resolvedOptions.radix);
    if (resolvedOptions.lowerCase === true) {
      str = str.toUpperCase();
    }
    str = str.padStart(resolvedOptions.minIntegralDigits, "0");
    return `${resolvedOptions.prefix}${str}${resolvedOptions.suffix}`;
  }
}
