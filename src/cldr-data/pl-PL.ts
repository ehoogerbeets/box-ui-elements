/**
 * Auto-generated Locale Data File for pl-PL.
 * This is generated in the @box/cldr-data project.
 * @IMPORTANT: DO NOT MODIFY THIS FILE DIRECTLY
 */

import { NumberFormat, NumbersData, NameItem, LanguagesData, LocaleData } from './types';

export { NumberFormat, NumbersData, NameItem, LanguagesData, LocaleData };

const languages: LanguagesData = {
    id: 30,
    bcp47Tag: 'pl-PL',
    name: 'Polish',
    localizedName: 'Polski',
    localizedNameList: [
        {
            id: 4,
            name: 'angielski',
        },
        {
            id: 6,
            name: 'chiński uproszczony',
        },
        {
            id: 8,
            name: 'rosyjski',
        },
        {
            id: 10,
            name: 'hiszpański',
        },
        {
            id: 14,
            name: 'portugalski',
        },
        {
            id: 16,
            name: 'włoski',
        },
        {
            id: 18,
            name: 'niemiecki',
        },
        {
            id: 19,
            name: 'japoński',
        },
        {
            id: 21,
            name: 'francuski',
        },
        {
            id: 24,
            name: 'niderlandzki',
        },
        {
            id: 30,
            name: 'polski',
        },
        {
            id: 49,
            name: 'turecki',
        },
        {
            id: 55,
            name: 'koreański',
        },
        {
            id: 57,
            name: 'szwedzki',
        },
        {
            id: 59,
            name: 'brytyjski angielski',
        },
        {
            id: 61,
            name: 'fiński',
        },
        {
            id: 63,
            name: 'chiński tradycyjny',
        },
        {
            id: 65,
            name: 'kanadyjski francuski',
        },
        {
            id: 66,
            name: 'kanadyjski angielski',
        },
        {
            id: 67,
            name: 'australijski angielski',
        },
        {
            id: 68,
            name: 'duński',
        },
        {
            id: 69,
            name: 'norweski (bokmål)',
        },
        {
            id: 70,
            name: 'bengalski',
        },
        {
            id: 71,
            name: 'hindi',
        },
        {
            id: 72,
            name: 'amerykański hiszpański',
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
            msg: '{count, plural, other {# tysiąca} one {# tysiąc} few {# tysiące} many {# tysięcy}}',
        },
        {
            digits: 2,
            msg: '{count, plural, other {# tysiąca} one {# tysiąc} few {# tysiące} many {# tysięcy}}',
        },
        {
            digits: 3,
            msg: '{count, plural, other {# tysiąca} one {# tysiąc} few {# tysiące} many {# tysięcy}}',
        },
        {
            digits: 1,
            msg: '{count, plural, other {# miliona} one {# milion} few {# miliony} many {# milionów}}',
        },
        {
            digits: 2,
            msg: '{count, plural, other {# miliona} one {# milion} few {# miliony} many {# milionów}}',
        },
        {
            digits: 3,
            msg: '{count, plural, other {# miliona} one {# milion} few {# miliony} many {# milionów}}',
        },
        {
            digits: 1,
            msg: '{count, plural, other {# miliarda} one {# miliard} few {# miliardy} many {# miliardów}}',
        },
        {
            digits: 2,
            msg: '{count, plural, other {# miliarda} one {# miliard} few {# miliardy} many {# miliardów}}',
        },
        {
            digits: 3,
            msg: '{count, plural, other {# miliarda} one {# miliard} few {# miliardy} many {# miliardów}}',
        },
        {
            digits: 1,
            msg: '{count, plural, other {# biliona} one {# bilion} few {# biliony} many {# bilionów}}',
        },
        {
            digits: 2,
            msg: '{count, plural, other {# biliona} one {# bilion} few {# biliony} many {# bilionów}}',
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
            msg: '{count, number} tys.',
        },
        {
            digits: 2,
            msg: '{count, number} tys.',
        },
        {
            digits: 3,
            msg: '{count, number} tys.',
        },
        {
            digits: 1,
            msg: '{count, number} mln',
        },
        {
            digits: 2,
            msg: '{count, number} mln',
        },
        {
            digits: 3,
            msg: '{count, number} mln',
        },
        {
            digits: 1,
            msg: '{count, number} mld',
        },
        {
            digits: 2,
            msg: '{count, number} mld',
        },
        {
            digits: 3,
            msg: '{count, number} mld',
        },
        {
            digits: 1,
            msg: '{count, number} bln',
        },
        {
            digits: 2,
            msg: '{count, number} bln',
        },
    ],
};

const data: LocaleData = {
    languages,
    numbers,
};

export default data;
