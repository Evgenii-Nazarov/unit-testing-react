import { describe, it, expect, vi } from 'vitest'
import * as PotentialFunctions from './buyingPotential'
import {
  multiplyTwoNumbers,
  sumTwoNumbers,
  countTotalSum,
  getIsBeneficiary,
  getPersonsStats,
} from './helper'

describe('multiplyTwoNumbers', () => {
  it('should return 16 if 4 and 4 provided', () => {
    const result = multiplyTwoNumbers(4, 4)
    expect(result).toBe(16)
  })
})

describe('sumTwoNumbers', () => {
  it('should return 6 if 3 and 3 provided', () => {
    const result = sumTwoNumbers(3, 3)
    expect(result).toBe(6)
  })

  it('should return null if arg is not a number', () => {
    const result = sumTwoNumbers(3, '3')
    expect(result).toBeNull()
  })
})

describe('multiplyTwoNumbers', () => {
  it('should return 12 if [4,4,4] provided', () => {
    const result = countTotalSum([4, 4, 4])
    expect(result).toBe(12)
  })
})

describe('getIsBeneficiary', () => {
  it('should return true if policeman provided', () => {
    const result = getIsBeneficiary('policeman')
    expect(result).toBeTruthy()
  })

  it('should return true if not existing occupation provided', () => {
    const result = getIsBeneficiary('mailman')
    expect(result).toBeFalsy()
  })
})

describe('getPersonsStats', () => {
  it('should call countYearExpenses, countFreeCash and countAgeRatio', () => {
    const spy1 = vi.spyOn(PotentialFunctions, 'countYearExpenses')
    const spy2 = vi.spyOn(PotentialFunctions, 'countFreeCash')
    const spy3 = vi.spyOn(PotentialFunctions, 'countAgeRatio')
    expect(spy1.getMockName()).toEqual('countYearExpenses')
    expect(spy2.getMockName()).toEqual('countFreeCash')
    expect(spy3.getMockName()).toEqual('countAgeRatio')

    spy1.mockImplementationOnce(() => 12)
    spy2.mockImplementationOnce(() => 12)
    spy3.mockImplementationOnce(() => 12)

    const result = getPersonsStats({})
    expect(spy1).toHaveBeenCalledTimes(1)
    expect(spy2).toHaveBeenCalledTimes(1)
    expect(spy3).toHaveBeenCalledTimes(1)
    expect(result).toStrictEqual({ ageRatio: 12, freeCash: 12 })
  })
})
