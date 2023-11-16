import { describe, expect, it, vi } from 'vitest'
import { sumTwoNumbers, summAllNumbers } from './helper'
import { countAgeRatio } from './buyingPotential'


describe('countAgeRatio', () => {
    it('should return 1 if age is 23', () => {
        const age = 23

        const result = countAgeRatio(age)
        expect(result).toBe(1)
    })

    it('should return 0.9 if age is 24', () => {
        const age = 24

        const result = countAgeRatio(age)
        expect(result).toBe(0.9)
    })
})

describe.skip('countMonthltPayments', function() {
    it('should call axios', async function() {
        const personOne = {
            age: '21',
            yearIncome: 130000,
            monthlyExpenses: 3300,
            creditScore: 690,
            occupation: 'web designer',
        }

        const personTwo = {
            age: '24',
            yearIncome: 30000,
            monthlyExpenses: 1800,
            creditScore: 740,
            occupation: 'teacher',
        }

        amount = 100000

        const result = await countMonthltPayments(amount, [personOne, personTwo])
        expect(result).toEqual(obj);
    });

});


describe('sumTwoNumbers', function() {
    it('shlould return number if two numbers provided', function() {
        const result = sumTwoNumbers(1,2)
        expect(result).toBe(3);
    });

    it('should return null if one of arg is not a number', function() {
        const result = sumTwoNumbers(1,'2')
        expect(result).toBeNull;
    });
});

describe('summAllNumbers', function() {
    it('should return sum of all provided numbers', function() {
        const result = summAllNumbers(1,2,3)
        expect(result).toBe(6);
    });
});