"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const types_1 = require("../types");
// PARSER
const parseComent = (CommentfromRequest) => {
    if (!isString(CommentfromRequest)) {
        throw new Error('Incorrect type or Missing Comment');
    }
    return CommentfromRequest;
};
const parseDate = (dateFromRequest) => {
    if (!isString(dateFromRequest) || !isDate(dateFromRequest)) {
        throw new Error('Incorrect type or missing Date');
    }
    return dateFromRequest;
};
const parseWeather = (wheatherFromRequest) => {
    if (!isString(wheatherFromRequest) || !isWeather(wheatherFromRequest)) {
        throw new Error('Incorrect type or missing weather');
    }
    return wheatherFromRequest;
};
const parseVisibility = (visibilityFromRequest) => {
    if (!isString(visibilityFromRequest) || !isVisibility(visibilityFromRequest)) {
        throw new Error('Incorrect type or missing weather');
    }
    return visibilityFromRequest;
};
// CHECKER
const isString = (string) => {
    return typeof string === 'string' || String instanceof string;
};
const isDate = (date) => {
    return Boolean(Date.parse(date));
};
const isWeather = (param) => {
    return Object.values(types_1.Weather).includes(param);
};
const isVisibility = (param) => {
    return Object.values(types_1.Visibility).includes(param);
};
// MAIN FUNCTION TO CONSTRUCT DAILYENTRY OBJECT
const toNewDailyEntry = (object) => {
    const newEntry = {
        comment: parseComent(object.comment),
        date: parseDate(object.date),
        weather: parseWeather(object.weather),
        visibility: parseVisibility(object.visibility)
    };
    return newEntry;
};
exports.default = toNewDailyEntry;
