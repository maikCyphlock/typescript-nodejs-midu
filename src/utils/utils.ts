import { NewDailyEntry, Visibility, Weather } from '../types'
// PARSER
const parseComent = (CommentfromRequest: any): string => {
  if (!isString(CommentfromRequest)) {
    throw new Error('Incorrect type or Missing Comment')
  }
  return CommentfromRequest
}
const parseDate = (dateFromRequest: any): string => {
  if (!isString(dateFromRequest) || !isDate(dateFromRequest)) {
    throw new Error('Incorrect type or missing Date')
  }
  return dateFromRequest
}
const parseWeather = (wheatherFromRequest: any): Weather => {
  if (!isString(wheatherFromRequest) || !isWeather(wheatherFromRequest)) {
    throw new Error('Incorrect type or missing weather')
  }
  return wheatherFromRequest
}

const parseVisibility = (visibilityFromRequest: any): Visibility => {
  if (!isString(visibilityFromRequest) || !isVisibility(visibilityFromRequest)) {
    throw new Error('Incorrect type or missing weather')
  }
  return visibilityFromRequest
}
// CHECKER
const isString = (string: string): boolean => {
  return typeof string === 'string' || String instanceof string
}

const isDate = (date: string): boolean => {
  return Boolean(Date.parse(date))
}
const isWeather = (param: any): boolean => {
  return Object.values(Weather).includes(param)
}
const isVisibility = (param: any): boolean => {
  return Object.values(Visibility).includes(param)
}

// MAIN FUNCTION TO CONSTRUCT DAILYENTRY OBJECT
const toNewDailyEntry = (object: any): NewDailyEntry => {
  const newEntry: NewDailyEntry = {
    comment: parseComent(object.comment),
    date: parseDate(object.date),
    weather: parseWeather(object.weather),
    visibility: parseVisibility(object.visibility)

  }

  return newEntry
}

export default toNewDailyEntry
