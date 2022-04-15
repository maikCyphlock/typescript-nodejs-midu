import { DailyEntries as DailyEntry, NonSensitiveInfoDailyEntry, NewDailyEntry } from '../types'
import DailyData from './diaries.json'

const diaries: DailyEntry[] = DailyData as DailyEntry[]

export const getEntries = (): DailyEntry[] => diaries

export const findById = (id: number): DailyEntry| undefined => {
  const entry = diaries.find(diary => diary.id === id)
  return entry
}

export const getEntriesWithoutSensitiveInfo = (): NonSensitiveInfoDailyEntry[] => {
  return diaries.map(({ id, date, weather, visibility }) => {
    return {
      id,
      date,
      weather,
      visibility
    }
  })
}

export const AddDaily = (NewDailyEntry: NewDailyEntry): DailyEntry => {
  const NewDaily = {
    id: Math.max(...diaries.map(d => d.id)) + 1,
    ...NewDailyEntry
  }
  diaries.push(NewDaily)

  return NewDaily
}
