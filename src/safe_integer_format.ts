import { NumberEx, Radix, SafeInteger, StringEx } from "../deps.ts";

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

export namespace SafeIntegerFormat {
  export type Options = {
    radix?: Radix;
    minIntegralDigits?: SafeInteger;
    lowerCase?: boolean;
    //TODO useGrouping, groupSeparator, positiveSign, negativeSign, ...
    prefix?: string;
    suffix?: string;
  };

  export namespace Options {
    export type Resolved = Readonly<{
      [_RESOLVED_MARKER]: {
        regex: RegExp;
      };
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
      const minIntegralDigits = _resolveIntegralDigits(
        options.minIntegralDigits,
      );
      const lowerCase = options.lowerCase === true;
      const prefix = StringEx.isString(options.prefix) ? options.prefix : "";
      const suffix = StringEx.isString(options.suffix) ? options.suffix : "";

      let regex;
      switch (radix) {
        case Radix.BINARY:
          regex = /^[-+]?[01]+$/;
          break;
        case Radix.OCTAL:
          regex = /^[-+]?[0-7]+$/;
          break;
        case Radix.DECIMAL:
          regex = /^[-+]?[0-9]+$/;
          break;
        case Radix.HEXADECIMAL:
          regex = /^[-+]?[0-9A-F]+$/i;
          break;
      }

      return Object.freeze({
        [_RESOLVED_MARKER]: {
          regex,
        },
        radix,
        minIntegralDigits,
        lowerCase,
        prefix,
        suffix,
      });
    }
  }

  export function parse(str: string, options: Options = {}): SafeInteger {
    if (StringEx.isNonEmptyString(str) !== true) {
      throw new TypeError("str");
    }

    const resolvedOptions = Options.resolve(options);
    let work = str;

    if (resolvedOptions.prefix.length > 0) {
      if (work.startsWith(resolvedOptions.prefix)) {
        work = work.substring(resolvedOptions.prefix.length);
      } else {
        throw new TypeError("unprefixed");
      }
    }

    if (resolvedOptions.suffix.length > 0) {
      if (work.endsWith(resolvedOptions.suffix)) {
        work = work.substring(0, work.length - resolvedOptions.suffix.length);
      } else {
        throw new TypeError("unsuffixed");
      }
    }

    if (resolvedOptions[_RESOLVED_MARKER].regex.test(work) !== true) {
      throw new TypeError(`parse error: ${work}`);
    }

    const int = Number.parseInt(work, resolvedOptions.radix);
    if (Number.isSafeInteger(int)) {
      return NumberEx.normalizeNumber(int);
    }
    throw new RangeError("str");
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
