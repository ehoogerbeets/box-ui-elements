/**
 * Auto-generated Locale Data File for fi-FI.
 * This is generated in the @box/cldr-data project.
 * @IMPORTANT: DO NOT MODIFY THIS FILE DIRECTLY
 */

import { NumberFormat, NumbersData, NameItem, LanguagesData, LocaleData } from './types';

export { NumberFormat, NumbersData, NameItem, LanguagesData, LocaleData };

const languages: LanguagesData = {
    id: 61,
    bcp47Tag: 'fi-FI',
    name: 'Finnish',
    localizedName: 'Suomi',
    localizedNameList: [
        {
            id: 4,
            name: 'englanti',
        },
        {
            id: 6,
            name: 'yksinkertaistettu kiina',
        },
        {
            id: 8,
            name: 'venäjä',
        },
        {
            id: 10,
            name: 'espanja',
        },
        {
            id: 14,
            name: 'portugali',
        },
        {
            id: 16,
            name: 'italia',
        },
        {
            id: 18,
            name: 'saksa',
        },
        {
            id: 19,
            name: 'japani',
        },
        {
            id: 21,
            name: 'ranska',
        },
        {
            id: 24,
            name: 'hollanti',
        },
        {
            id: 30,
            name: 'puola',
        },
        {
            id: 49,
            name: 'turkki',
        },
        {
            id: 55,
            name: 'korea',
        },
        {
            id: 57,
            name: 'ruotsi',
        },
        {
            id: 59,
            name: 'britannianenglanti',
        },
        {
            id: 61,
            name: 'suomi',
        },
        {
            id: 63,
            name: 'perinteinen kiina',
        },
        {
            id: 65,
            name: 'kanadanranska',
        },
        {
            id: 66,
            name: 'kanadanenglanti',
        },
        {
            id: 67,
            name: 'australianenglanti',
        },
        {
            id: 68,
            name: 'tanska',
        },
        {
            id: 69,
            name: 'norjan bokmål',
        },
        {
            id: 70,
            name: 'bengali',
        },
        {
            id: 71,
            name: 'hindi',
        },
        {
            id: 72,
            name: 'amerikanespanja',
        },
    ],
};

const numbers: NumbersData = {
    long: [
        {
            digits: 1,
            msg: '{count, number}',
        },
        {
            digits: 2,
            msg: '{count, number}',
        },
        {
            digits: 3,
            msg: '{count, number}',
        },
        {
            digits: 1,
            msg: '{count, plural, other {# tuhatta} one {# tuhat}}',
        },
        {
            digits: 2,
            msg: '{count, number} tuhatta',
        },
        {
            digits: 3,
            msg: '{count, number} tuhatta',
        },
        {
            digits: 1,
            msg: '{count, plural, other {# miljoonaa} one {# miljoona}}',
        },
        {
            digits: 2,
            msg: '{count, number} miljoonaa',
        },
        {
            digits: 3,
            msg: '{count, number} miljoonaa',
        },
        {
            digits: 1,
            msg: '{count, plural, other {# miljardia} one {# miljardi}}',
        },
        {
            digits: 2,
            msg: '{count, number} miljardia',
        },
        {
            digits: 3,
            msg: '{count, number} miljardia',
        },
        {
            digits: 1,
            msg: '{count, plural, other {# biljoonaa} one {# biljoona}}',
        },
        {
            digits: 2,
            msg: '{count, number} biljoonaa',
        },
    ],
    short: [
        {
            digits: 1,
            msg: '{count, number}',
        },
        {
            digits: 2,
            msg: '{count, number}',
        },
        {
            digits: 3,
            msg: '{count, number}',
        },
        {
            digits: 1,
            msg: '{count, number} t.',
        },
        {
            digits: 2,
            msg: '{count, number} t.',
        },
        {
            digits: 3,
            msg: '{count, number} t.',
        },
        {
            digits: 1,
            msg: '{count, number} milj.',
        },
        {
            digits: 2,
            msg: '{count, number} milj.',
        },
        {
            digits: 3,
            msg: '{count, number} milj.',
        },
        {
            digits: 1,
            msg: '{count, number} mrd.',
        },
        {
            digits: 2,
            msg: '{count, number} mrd.',
        },
        {
            digits: 3,
            msg: '{count, number} mrd.',
        },
        {
            digits: 1,
            msg: '{count, number} bilj.',
        },
        {
            digits: 2,
            msg: '{count, number} bilj.',
        },
    ],
};

const data: LocaleData = {
    languages,
    numbers,
};

export default data;
