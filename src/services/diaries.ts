import { DiaryEntry } from '../types'
import diariesData from './diaries.json'

const diaries: DiaryEntry[] = diariesData as DiaryEntry[]
export const getEntries = (): DiaryEntry[] => diaries

export const addEntry = (): undefined => undefined
