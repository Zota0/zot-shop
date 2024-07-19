

export interface dateTime {
    date: dateType;
    time: timeType;
}

export interface timeType {
    hours: number;
    minutes: number;
    seconds: number;
    milisenconds?: number;
    timezone?: string;
}

export interface dateType {
    day: number;
    month: number;
    year: number;
    timezone?: string;
}

export interface EmptyDates {
    EMPTY_DATE: dateType;
    EMPTY_TIME: timeType;
    EMPTY_DATETIME: dateTime;
}

export const EMPTY_DATE: EmptyDates["EMPTY_DATE"] = {
    day: -1,
    month: -1,
    year: -1,
}

export const EMPTY_TIME: EmptyDates["EMPTY_TIME"] = {
    hours: -1,
    minutes: -1,
    seconds: -1,
}

export const EMPTY_DATETIME: EmptyDates["EMPTY_DATETIME"] = {
    date: EMPTY_DATE,
    time: EMPTY_TIME,
}
