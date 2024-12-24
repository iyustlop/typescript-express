import { Weather, Visibility } from './enums'

export interface WorkerEntry {
  omegaId: string,
  deltaMail: string,
  name: string,
  startDate: string,
  languages: { 
    language: String, 
    exam: String },
  location: {
    projectType: String,
    room: String
  }
}

export interface DiaryEntry {
  id: number
  date: string
  weather: Weather
  visibility: Visibility
  comment: string
}

// export type NonSensitiveDiaryEntry = Pick<DiaryEntry, 'id' | 'date' | 'weather' | 'visibility'>

export type NonSensitiveDiaryEntry = Omit<DiaryEntry, 'comment'>
export type NewDiaryEntry = Omit<DiaryEntry, 'id'>
