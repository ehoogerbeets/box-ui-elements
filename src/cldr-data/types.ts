/**
 * Define the types exported by the cldr-data project
 */

export interface NumberFormat {
    digits: number;
    msg: string;
}

export interface NumbersData {
    short: Array<NumberFormat>;
    long: Array<NumberFormat>;
}

export interface NameItem {
    id: number;
    name: string;
}

export interface LanguagesData {
    id: number;
    bcp47Tag: string;
    name: string;
    localizedName: string;
    localizedNameList: Array<NameItem>;
}

export interface LocaleData {
    languages: LanguagesData;
    numbers: NumbersData;
}
