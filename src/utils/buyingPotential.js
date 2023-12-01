import { getIsBeneficiary } from './helper'

const getPersonsStats = (personData) => {
    const yearExpenses = countYearExpenses(personData.monthlyExpenses)
    const freeCash = countFreeCash(personData.yearIncome, yearExpenses)
    const ageRatio = countAgeRatio(personData.age, personData.occupation)
    
    return {
        ageRatio,
        freeCash,
    }
}

const countYearExpenses = (monthlyExpenses) => {
    return monthlyExpenses * 12
}

const countFreeCash = (income, expenses) => {
    const freeCashFlow = income - expenses

    if (freeCashFlow < 0)
     throw new Error('Negative cashflow')

    return freeCashFlow
}

const countAgeRatio = (age, occupation) => {
    let ratio = 0

    if (age > 1 && age < 24)
        ratio = 1
    else if (age >= 24 && age < 45)
        ratio = 0.9
    else if (age >= 46 && age < 67)
        ratio = 0.8
    else if (age >= 68 && age < 130)
        ratio = 0.7
    
    const isBeneficiary = getIsBeneficiary(occupation)

    return isBeneficiary ? ratio + 0.2 : ratio
}

export {
    countYearExpenses,
    countFreeCash,
    countAgeRatio,
    getPersonsStats
}