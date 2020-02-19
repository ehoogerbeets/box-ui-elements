/**
 * Auto-generated Locale Data File for ru-RU.
 * This is generated in the @box/cldr-data project.
 * @IMPORTANT: DO NOT MODIFY THIS FILE DIRECTLY
 */

import { NumberFormat, NumbersData, NameItem, LanguagesData, LocaleData } from './types';

export { NumberFormat, NumbersData, NameItem, LanguagesData, LocaleData };

const languages: LanguagesData = {
    id: 8,
    bcp47Tag: 'ru-RU',
    name: 'Russian',
    localizedName: 'Русский',
    localizedNameList: [
        {
            id: 4,
            name: 'английский',
        },
        {
            id: 6,
            name: 'китайский, упрощенное письмо',
        },
        {
            id: 8,
            name: 'русский',
        },
        {
            id: 10,
            name: 'испанский',
        },
        {
            id: 14,
            name: 'португальский',
        },
        {
            id: 16,
            name: 'итальянский',
        },
        {
            id: 18,
            name: 'немецкий',
        },
        {
            id: 19,
            name: 'японский',
        },
        {
            id: 21,
            name: 'французский',
        },
        {
            id: 24,
            name: 'нидерландский',
        },
        {
            id: 30,
            name: 'польский',
        },
        {
            id: 49,
            name: 'турецкий',
        },
        {
            id: 55,
            name: 'корейский',
        },
        {
            id: 57,
            name: 'шведский',
        },
        {
            id: 59,
            name: 'британский английский',
        },
        {
            id: 61,
            name: 'финский',
        },
        {
            id: 63,
            name: 'китайский, традиционное письмо',
        },
        {
            id: 65,
            name: 'канадский французский',
        },
        {
            id: 66,
            name: 'канадский английский',
        },
        {
            id: 67,
            name: 'австралийский английский',
        },
        {
            id: 68,
            name: 'датский',
        },
        {
            id: 69,
            name: 'норвежский букмол',
        },
        {
            id: 70,
            name: 'бенгальский',
        },
        {
            id: 71,
            name: 'хинди',
        },
        {
            id: 72,
            name: 'латиноамериканский испанский',
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
            msg: '{count, plural, other {# тысячи} one {# тысяча} many {# тысяч}}',
        },
        {
            digits: 2,
            msg: '{count, plural, other {# тысячи} one {# тысяча} many {# тысяч}}',
        },
        {
            digits: 3,
            msg: '{count, plural, other {# тысячи} one {# тысяча} many {# тысяч}}',
        },
        {
            digits: 1,
            msg: '{count, plural, other {# миллиона} one {# миллион} many {# миллионов}}',
        },
        {
            digits: 2,
            msg: '{count, plural, other {# миллиона} one {# миллион} many {# миллионов}}',
        },
        {
            digits: 3,
            msg: '{count, plural, other {# миллиона} one {# миллион} many {# миллионов}}',
        },
        {
            digits: 1,
            msg: '{count, plural, other {# миллиарда} one {# миллиард} many {# миллиардов}}',
        },
        {
            digits: 2,
            msg: '{count, plural, other {# миллиарда} one {# миллиард} many {# миллиардов}}',
        },
        {
            digits: 3,
            msg: '{count, plural, other {# миллиарда} one {# миллиард} many {# миллиардов}}',
        },
        {
            digits: 1,
            msg: '{count, plural, other {# триллиона} one {# триллион} many {# триллионов}}',
        },
        {
            digits: 2,
            msg: '{count, plural, other {# триллиона} one {# триллион} many {# триллионов}}',
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
            msg: '{count, number} тыс.',
        },
        {
            digits: 2,
            msg: '{count, number} тыс.',
        },
        {
            digits: 3,
            msg: '{count, number} тыс.',
        },
        {
            digits: 1,
            msg: '{count, number} млн',
        },
        {
            digits: 2,
            msg: '{count, number} млн',
        },
        {
            digits: 3,
            msg: '{count, number} млн',
        },
        {
            digits: 1,
            msg: '{count, number} млрд',
        },
        {
            digits: 2,
            msg: '{count, number} млрд',
        },
        {
            digits: 3,
            msg: '{count, number} млрд',
        },
        {
            digits: 1,
            msg: '{count, number} трлн',
        },
        {
            digits: 2,
            msg: '{count, number} трлн',
        },
    ],
};

const data: LocaleData = {
    languages,
    numbers,
};

export default data;
