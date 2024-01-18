import { getIsBeneficiary, multiplyTwoNumbers, getPersonsStats } from './helper'

const countYearExpenses = (monthlyExpenses) => {
  return monthlyExpenses * 12
}

const countFreeCash = (income, expenses) => {
  const freeCashFlow = income - expenses

  if (freeCashFlow < 0) throw new Error('Negative cashflow')
  // if (freeCashFlow < 0) return null

  return freeCashFlow
}

const countAgeRatio = (age, occupation) => {
  let ratio = 0

  if (age > 1 && age < 24) ratio = 1
  else if (age >= 24 && age < 45) ratio = 0.9
  else if (age >= 46 && age < 67) ratio = 0.8
  else if (age >= 68 && age < 130) ratio = 0.7

  const isBeneficiary = getIsBeneficiary(occupation)

  return isBeneficiary ? ratio + 0.2 : ratio
}

/**
 * @param {Object} personData Information about the person.
 * @param {number} personData.age The age of the person.
 * @param {number} personData.yearIncome The year income of the person.
 * @param {number} personData.monthlyExpenses The monthly expenses of the person.
 * @param {number} personData.creditScore The credit score of the person.
 * @param {string} personData.occupation The occupation of the person.
 */
const getBuyingPotential = (personData) => {
  const { ageRatio, freeCash } = getPersonsStats(personData)
  const buyingPotential = multiplyTwoNumbers(freeCash, ageRatio)

  return buyingPotential
}

export { countYearExpenses, countFreeCash, countAgeRatio, getBuyingPotential }
