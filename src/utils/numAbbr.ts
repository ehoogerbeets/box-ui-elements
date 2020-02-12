/**
 * @file Function to abbreviate a number as a string in a locale-sensitive manner.
 * @author Box
 */

import IntlMessageFormat from 'intl-messageformat';
import data from 'box-locale-data';

import isNaN from 'lodash/isNaN';

const { languages, numbers } = data;

export enum Lengths {
    short = 'short',
    long = 'long',
}

export interface NumAbbrOptions {
    length?: Lengths;
    locale?: string;
    numbersData?: NumbersData;
}

function numAbbrWithLocale(num: number, options: NumAbbrOptions, numbersData?: NumbersData, locale?: string): string {
    if (!num || !numbersData) {
        return '0';
    }
    let { length }: { length?: Lengths } = options;
    length = length || Lengths.short;
    let exponent: number = Math.floor(num).toString().length - 1;
    if (num < 0) {
        exponent -= 1; // take care of the negative sign
    }
    const formats = numbersData[length];
    const digits: number = exponent >= formats.length ? exponent - formats.length + 3 : formats[exponent].digits;
    const count: number = Math.round(num / 10 ** (exponent - digits + 1));
    const template = new IntlMessageFormat(
        formats[exponent > formats.length ? formats.length - 1 : exponent].msg,
        locale,
    );
    return template.format({ count });
}

/**
 * Gets the number in abbreviated form in a locale-sensitive manner. This function
 * scales the number down to the smallest it can be, taking only up to 4 significant
 * digits, and rounding the rest. ie. 12345678 becomes "12M" in English.
 *
 * The abbreviation words/letters can have the length "short" or "long", specified
 * with the "length" property in the options. If "short",
 * then this function uses an abbreviation of the bucket such as "12M". If "long",
 * then the name of the bucket is written out in full, such as "12 million".
 *
 * For locales that have complex plurals, such as Russian or Polish, this function
 * returns the correctly pluralized suffix/prefix to go along with the scaled number.
 */
function numAbbr(num: unknown, options: NumAbbrOptions = { length: Lengths.short }): string | string[] {
    if (!num) return '0';

    // languages contains info about the current locale
    const { locale, numbersData } = options;
    const loc = locale || languages.bcp47Tag || 'en-US';
    const numData: NumbersData = numbersData || numbers;
    let value;

    switch (typeof num) {
        case 'boolean':
            num = num ? 1 : 0;
            break;

        case 'string':
            value = parseInt(num, 10);
            if (isNaN(value)) {
                return '0';
            }
            break;

        case 'object':
            return Array.isArray(num)
                ? num.map(n => {
                      return numAbbrWithLocale(n, options, numData, loc);
                  })
                : '0';

        default:
            break;
    }

    return numAbbrWithLocale(num as number, options, numData, loc);
}

export default numAbbr;
