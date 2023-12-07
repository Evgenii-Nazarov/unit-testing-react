import { describe, it, expect, vi } from 'vitest'
import { countMonthlyPayments } from './monthlyPayments'
import * as MainFunctions from './main'
import * as ScoreFunctions from './creditScore'

describe('countMonthlyPayments', () => {
  it('should call getIsBeneficiary', () => {
    const spy1 = vi.spyOn(MainFunctions, 'getTotalPotential')
    const spy2 = vi.spyOn(MainFunctions, 'getCredirScoreRatio')
    const spy3 = vi.spyOn(ScoreFunctions, 'getMonthlyPayment')
    expect(spy1.getMockName()).toEqual('getTotalPotential')
    expect(spy2.getMockName()).toEqual('getCredirScoreRatio')
    expect(spy3.getMockName()).toEqual('getMonthlyPayment')

    spy2.mockImplementationOnce(() => 1)
    spy2.mockImplementationOnce(() => 1)
    spy3.mockImplementationOnce(() => 1)

    const result = countMonthlyPayments(1, [{ creditScore: 601 }])
    expect(spy1).toHaveBeenCalledTimes(1)
    expect(spy2).toHaveBeenCalledTimes(1)
    expect(result).toBe(1)
  })
})
