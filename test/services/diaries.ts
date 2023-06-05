import * as diaryServices from '../../src/services/diaryServices'
import { expect } from 'chai'

describe('Services', () => {
  it('should return', () => {
    const response = diaryServices.getEntriesWithoutSensitiveInfo()
    expect(response.length).to.equal(2)
  })
})
