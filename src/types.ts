
export enum Visibility {
  Great = 'great',
  Good = 'good',
  Ok = 'ok',
  Poor = 'poor'
}

export enum Weather {
  Sunny = 'sunny',
  Rainy = 'rainy',
  Cloudy = 'cloudy',
  Windy = 'windy',
  Stormy = 'stormy'

}

export interface DailyEntries {
  id: number
  date: string
  weather: Weather
  visibility: Visibility
  comment: string

}

// export type NonSensitiveInfoDailyEntry = Pick<DailyEntries, 'id' | 'date' | 'weather' |'visibility'>
export type NonSensitiveInfoDailyEntry = Omit<DailyEntries, 'comment' >
export type NewDailyEntry = Omit<DailyEntries, 'id'>
