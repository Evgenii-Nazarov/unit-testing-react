import { describe, it, expect, vi } from 'vitest'
import {
  countMeanCreditScore,
  getMonthlyPayment,
  countCreditScoreRatio,
} from './creditScore'
import * as HelperFunctions from './helper'

describe('countMeanCreditScore', () => {
  it('should call countTotalSum', () => {
    console.log('HelperFunctions', HelperFunctions)
    const spy = vi.spyOn(HelperFunctions, 'countTotalSum')
    // expect(spy.getMockName()).toEqual('countTotalSum')

    spy.mockImplementationOnce(() => {
      return 12
    })
    const result = countMeanCreditScore([1, 2, 3])
    expect(spy).toHaveBeenCalledTimes(1)
    expect(result).toBe(4)
  })
})

describe('getMonthlyPayment', () => {
  it('should call multiplyTwoNumbers', () => {
    const spy = vi.spyOn(HelperFunctions, 'multiplyTwoNumbers')

    spy.mockImplementationOnce(() => {
      return 12
    })
    const result = getMonthlyPayment(1, 1200, 100)

    expect(result).toBe(1)
  })

  it('should return null if amount less then potentialWithCreditScore', () => {
    const spy = vi.spyOn(HelperFunctions, 'multiplyTwoNumbers')

    spy.mockImplementationOnce(() => {
      return 12
    })
    const result = getMonthlyPayment(1000, 1200, 100)

    expect(result).toBeNull()
  })
})

describe('countCreditScoreRatio', () => {
  it('should return 2 if 1 is provided', () => {
    const result = countCreditScoreRatio(1)

    expect(result).toBe(2)
  })

  it('should return 1.5 if 601 is provided', () => {
    const result = countCreditScoreRatio(601)

    expect(result).toBe(1.5)
  })

  it('should return 1 if 651 is provided', () => {
    const result = countCreditScoreRatio(651)

    expect(result).toBe(1)
  })

  it('should return 0.9 if 751 is provided', () => {
    const result = countCreditScoreRatio(751)

    expect(result).toBe(0.9)
  })

  it('should return 0.8 if 800 is provided', () => {
    const result = countCreditScoreRatio(800)

    expect(result).toBe(0.8)
  })
})
