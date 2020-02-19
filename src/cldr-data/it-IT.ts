/**
 * Auto-generated Locale Data File for it-IT.
 * This is generated in the @box/cldr-data project.
 * @IMPORTANT: DO NOT MODIFY THIS FILE DIRECTLY
 */

import { NumberFormat, NumbersData, NameItem, LanguagesData, LocaleData } from './types';

export { NumberFormat, NumbersData, NameItem, LanguagesData, LocaleData };

const languages: LanguagesData = {
    id: 16,
    bcp47Tag: 'it-IT',
    name: 'Italian',
    localizedName: 'Italiano',
    localizedNameList: [
        {
            id: 4,
            name: 'inglese',
        },
        {
            id: 6,
            name: 'cinese semplificato',
        },
        {
            id: 8,
            name: 'russo',
        },
        {
            id: 10,
            name: 'spagnolo',
        },
        {
            id: 14,
            name: 'portoghese',
        },
        {
            id: 16,
            name: 'italiano',
        },
        {
            id: 18,
            name: 'tedesco',
        },
        {
            id: 19,
            name: 'giapponese',
        },
        {
            id: 21,
            name: 'francese',
        },
        {
            id: 24,
            name: 'olandese',
        },
        {
            id: 30,
            name: 'polacco',
        },
        {
            id: 49,
            name: 'turco',
        },
        {
            id: 55,
            name: 'coreano',
        },
        {
            id: 57,
            name: 'svedese',
        },
        {
            id: 59,
            name: 'inglese britannico',
        },
        {
            id: 61,
            name: 'finlandese',
        },
        {
            id: 63,
            name: 'cinese tradizionale',
        },
        {
            id: 65,
            name: 'francese canadese',
        },
        {
            id: 66,
            name: 'inglese canadese',
        },
        {
            id: 67,
            name: 'inglese australiano',
        },
        {
            id: 68,
            name: 'danese',
        },
        {
            id: 69,
            name: 'norvegese bokmål',
        },
        {
            id: 70,
            name: 'bengalese',
        },
        {
            id: 71,
            name: 'hindi',
        },
        {
            id: 72,
            name: 'spagnolo latinoamericano',
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
            msg: '{count, plural, other {# mila} one {# mille}}',
        },
        {
            digits: 2,
            msg: '{count, number} mila',
        },
        {
            digits: 3,
            msg: '{count, number} mila',
        },
        {
            digits: 1,
            msg: '{count, plural, other {# milioni} one {# milione}}',
        },
        {
            digits: 2,
            msg: '{count, number} milioni',
        },
        {
            digits: 3,
            msg: '{count, number} milioni',
        },
        {
            digits: 1,
            msg: '{count, plural, other {# miliardi} one {# miliardo}}',
        },
        {
            digits: 2,
            msg: '{count, number} miliardi',
        },
        {
            digits: 3,
            msg: '{count, number} miliardi',
        },
        {
            digits: 1,
            msg: '{count, plural, other {# mila miliardi} one {# mille miliardi}}',
        },
        {
            digits: 2,
            msg: '{count, number} mila miliardi',
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
            digits: 4,
            msg: '{count, number}',
        },
        {
            digits: 5,
            msg: '{count, number}',
        },
        {
            digits: 6,
            msg: '{count, number}',
        },
        {
            digits: 1,
            msg: '{count, number} Mln',
        },
        {
            digits: 2,
            msg: '{count, number} Mln',
        },
        {
            digits: 3,
            msg: '{count, number} Mln',
        },
        {
            digits: 1,
            msg: '{count, number} Mrd',
        },
        {
            digits: 2,
            msg: '{count, number} Mrd',
        },
        {
            digits: 3,
            msg: '{count, number} Mrd',
        },
        {
            digits: 1,
            msg: '{count, number} Bln',
        },
        {
            digits: 2,
            msg: '{count, number} Bln',
        },
    ],
};

const data: LocaleData = {
    languages,
    numbers,
};

export default data;
