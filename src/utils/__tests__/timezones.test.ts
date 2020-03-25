/**
 * load locale data manually that is not the current locale so that
 * we can use it for unit testing
 */

import germanLocaleData from '@box/cldr-data/locale-data/de-DE';
import russianLocaleData from '@box/cldr-data/locale-data/ru-RU';
import japaneseLocaleData from '@box/cldr-data/locale-data/ja-JP';
import timezones, { TimeZoneEntries } from '../timezones';

const germanZoneData = germanLocaleData.timezones;
const russianZoneData = russianLocaleData.timezones;
const japaneseZoneData = japaneseLocaleData.timezones;

describe('util/timezones', () => {
    test('should work in English', () => {
        const zones: TimeZoneEntries = timezones(); // default is English
        expect(zones['1']).toStrictEqual({
            name: 'Africa/Abidjan',
            displayName: 'GMT+00:00 Africa/Abidjan GMT',
            boxId: 1,
        });
        expect(zones['139']).toStrictEqual({
            name: 'America/Los_Angeles',
            displayName: 'GMT-08:00 America/Los_Angeles PST',
            boxId: 139,
        });
    });

    test('should work in German', () => {
        const zones: TimeZoneEntries = timezones({
            tzData: germanZoneData,
        });
        expect(zones['295']).toStrictEqual({
            name: 'Asia/Yekaterinburg',
            displayName: 'GMT+05:00 Jekaterinburg +05',
            boxId: 295,
        });
        expect(zones['301']).toStrictEqual({
            name: 'Atlantic/Faeroe',
            displayName: 'GMT+00:00 Färöer UTC',
            boxId: 301,
        });
    });

    test('should work in Japanese', () => {
        const zones: TimeZoneEntries = timezones({
            tzData: japaneseZoneData,
        });
        expect(zones['321']).toStrictEqual({
            name: 'Australia/Melbourne',
            displayName: 'GMT+10:00 メルボルン AEST',
            boxId: 321,
        });
        expect(zones['390']).toStrictEqual({
            name: 'Europe/Amsterdam',
            displayName: 'GMT+01:00 アムステルダム CET',
            boxId: 390,
        });
    });

    test('should work in Russian', () => {
        const zones: TimeZoneEntries = timezones({
            tzData: russianZoneData,
        });
        expect(zones['295']).toStrictEqual({
            name: 'Asia/Yekaterinburg',
            displayName: 'GMT+05:00 Екатеринбург +05',
            boxId: 295,
        });
        expect(zones['402']).toStrictEqual({
            name: 'Europe/Dublin',
            displayName: 'GMT+01:00 Дублин IST/GMT',
            boxId: 402,
        });
    });
});
