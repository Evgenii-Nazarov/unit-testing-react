import { describe, it, expect, vi } from 'vitest'
import { getCredirScoreRatio, getTotalPotential } from './main'
import * as CreditScoreFunctions from './creditScore'
import * as PotentialFunctions from './buyingPotential'
import * as HelperFunctions from './helper'

describe('getCredirScoreRatio', () => {
  it('should call getIsBeneficiary', () => {
    const spy1 = vi.spyOn(CreditScoreFunctions, 'countMeanCreditScore')
    const spy2 = vi.spyOn(CreditScoreFunctions, 'countCreditScoreRatio')
    expect(spy1.getMockName()).toEqual('countMeanCreditScore')
    expect(spy2.getMockName()).toEqual('countCreditScoreRatio')

    spy1.mockImplementationOnce(() => 1)
    spy2.mockImplementationOnce(() => 1)

    const result = getCredirScoreRatio({})
    expect(spy1).toHaveBeenCalledTimes(1)
    expect(spy2).toHaveBeenCalledTimes(1)
    expect(result).toBe(1)
  })
})

describe('getTotalPotential', () => {
  it('should call getIsBeneficiary', () => {
    const spy1 = vi.spyOn(PotentialFunctions, 'getBuyingPotential')
    const spy2 = vi.spyOn(HelperFunctions, 'countTotalSum')
    expect(spy1.getMockName()).toEqual('getBuyingPotential')
    expect(spy2.getMockName()).toEqual('countTotalSum')

    spy1.mockImplementationOnce(() => 1)
    spy2.mockImplementationOnce(() => 1)

    const result = getTotalPotential([{}])
    expect(spy1).toHaveBeenCalledTimes(1)
    expect(spy2).toHaveBeenCalledTimes(1)
    expect(result).toBe(1)
  })
})
