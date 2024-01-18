import { describe, it, expect } from 'vitest'
import * as ValidateRules from './rules'
import { validateField } from './index'

describe('validateField', () => {
    afterEach(() => {
        vi.clearAllMocks();
        vi.resetAllMocks();
      });
    
    it('', () => {
        const spy = vi.spyOn(ValidateRules, 'validateAge')
        expect(spy.getMockName()).toEqual('validateAge')

        spy.mockImplementationOnce(() => ({ isValidateError: false, validateErrorText: '' }))

        const result = validateField('age', 30)
        expect(spy).toHaveBeenCalledTimes(1)
        expect(result).toStrictEqual({
              "isValidateError": false,
              "validateErrorText": "",
            })
    })
})