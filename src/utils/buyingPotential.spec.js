import { describe, it, expect, vi } from 'vitest'
import {
  countYearExpenses,
  countFreeCash,
  countAgeRatio,
  getBuyingPotential,
} from './buyingPotential'
import * as HelperFunctions from './helper'

describe('countYearExpenses', () => {
  it('should return 12000 if 1000 provided', () => {
    const result = countYearExpenses(1000)
    expect(result).toBe(12000)
  })
})

describe('countFreeCash', () => {
  it('should return 100 if 1000 and 900 provided', () => {
    const result = countFreeCash(1000, 900)
    expect(result).toBe(100)
  })

  it('should throw error if 900 and 1000 provided', () => {
    expect(() => countFreeCash(900, 1000)).toThrowError('Negative cashflow')
  })
})

describe('countAgeRatio', () => {
  it('should call getIsBeneficiary', () => {
    const spy = vi.spyOn(HelperFunctions, 'getIsBeneficiary')
    expect(spy.getMockName()).toEqual('getIsBeneficiary')

    spy.mockImplementationOnce(() => true)

    const result = countAgeRatio(2)
    expect(spy).toHaveBeenCalledTimes(1)
    expect(result).toBe(1.2)
  })

  it('should return 1 if 2 provided', () => {
    const result = countAgeRatio(2)
    expect(result).toBe(1)
  })

  it('should return 0.9 if 24 provided', () => {
    const result = countAgeRatio(24)
    expect(result).toBe(0.9)
  })

  it('should return 0.8 if 46 provided', () => {
    const result = countAgeRatio(46)
    expect(result).toBe(0.8)
  })

  it('should return 0.7 if 68 provided', () => {
    const result = countAgeRatio(68)
    expect(result).toBe(0.7)
  })
})

describe('getBuyingPotential', () => {
  it('should call getIsBeneficiary', () => {
    const spy1 = vi.spyOn(HelperFunctions, 'getPersonsStats')
    const spy2 = vi.spyOn(HelperFunctions, 'multiplyTwoNumbers')
    expect(spy1.getMockName()).toEqual('getPersonsStats')
    expect(spy2.getMockName()).toEqual('multiplyTwoNumbers')

    spy2.mockImplementationOnce(() => 1)

    const result = getBuyingPotential({})
    expect(spy1).toHaveBeenCalledTimes(1)
    expect(spy2).toHaveBeenCalledTimes(1)
    expect(result).toBe(1)
  })
})
