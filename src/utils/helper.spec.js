import { describe, it, expect } from 'vitest'
import { multiplyTwoNumbers, sumTwoNumbers, validateData } from './helper'
import * as ValidateFunctions from './validate/index'

describe.skip('validateData', () => {
    it('', () => {
        const testForm = {
            name: 'Bob',
            age: 45,
            yearIncome: 130000,
          }

        const spy = vi.spyOn(ValidateFunctions, 'validateField')
        expect(spy.getMockName()).toEqual('validateField')

        spy.mockImplementationOnce(() => ({ isValidateError: false, validateErrorText: '' }))

        const result = validateData(testForm)
        expect(spy).toHaveBeenCalledTimes(1)
        expect(result).toStrictEqual({
              "isValidateError": false,
              "type": "age",
              "validateErrorText": "",
              "value": 20,
            })
    })
})

describe('multiplyTwoNumbers', () => {
    it('should return 6 if provide 2 and 3', () => {
        const result = multiplyTwoNumbers(2,3)
        expect(result).toBe(6)
    })
})

describe('sumTwoNumbers', () => {
    it('should return number 8 if 5 and 3 numbers provided', () => {
        const result = sumTwoNumbers(5,3)

        expect(result).toBe(8)
        expect(typeof result).toBe('number')
    })

    it('should return null if one on args is string', () => {
        const result = sumTwoNumbers(5,'3')

        expect(result).toBeNull
    })

    it('should return null if both args are strings', () => {
        const result = sumTwoNumbers('5','3')

        expect(result).toBeNull
    })
})