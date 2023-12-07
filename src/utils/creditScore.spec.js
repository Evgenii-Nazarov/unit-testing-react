import { describe, it, expect, vi } from 'vitest'
// import { countMeanCreditScore, getMonthlyPayment } from './creditScore'
import * as CreditFunctions from './creditScore'
import * as HelperFunctions from './helper'

describe('countMeanCreditScore', () => {
    it('should call countTotalSum', () => {
        console.log('HelperFunctions', HelperFunctions)
        const spy = vi.spyOn(HelperFunctions, 'countTotalSum')
        // expect(spy.getMockName()).toEqual('countTotalSum')

        spy.mockImplementationOnce(() => { return 12 })
        const result = CreditFunctions.countMeanCreditScore([1,2,3])
        expect(spy).toHaveBeenCalledTimes(1)
        expect(result).toBe(4)
    })
})

describe('getMonthlyPayment', () => {
    it('should call multiplyTwoNumbers', () => {
        const spy = vi.spyOn(HelperFunctions, 'multiplyTwoNumbers')

        spy.mockImplementationOnce(() => { return 12 })
        const result = CreditFunctions.getMonthlyPayment(1, 1200, 100)

        expect(result).toBe(1)
    })

    it('should return null if amount less then potentialWithCreditScore', () => {
        const spy = vi.spyOn(HelperFunctions, 'multiplyTwoNumbers')

        spy.mockImplementationOnce(() => { return 12 })
        const result = CreditFunctions.getMonthlyPayment(1000, 1200, 100)

        expect(result).toBeNull()
    })
})