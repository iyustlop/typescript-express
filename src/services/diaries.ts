import { DiaryEntry, NonSensitiveDiaryEntry } from '../types'
import diariesData from './diaries.json'

const diaries: DiaryEntry[] = diariesData as DiaryEntry[]

export const getEntries = (): DiaryEntry[] => diaries

export const getEntriesWithoutSensitiveInfo = (): NonSensitiveDiaryEntry[] => diaries

export const addEntry = (): undefined => undefined
