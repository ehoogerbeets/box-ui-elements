/**
 * @file Function to provide a localized list of time zones that Box supports
 * @author Box
 */

import data, { TimeZone, TimeZoneList } from 'box-locale-data';

const { timezones } = data;

export interface TimeZoneOptions {
    tzData?: TimeZoneList;
}

export interface TimeZoneEntries {
    [id: string]: TimeZone;
}

function zoneinfo(options: TimeZoneOptions = {}): TimeZoneEntries {
    const zones: TimeZoneEntries = {};

    // used the passed in info first. If it is not there, fall back to
    // the one we loaded above from the 'box-locale-data' alias
    let { tzData }: { tzData?: TimeZoneList } = options;
    if (!tzData) {
        tzData = timezones;
    }

    tzData.forEach(zone => {
        zones[String(zone.boxId)] = zone;
    });

    return zones;
}

export default zoneinfo;
