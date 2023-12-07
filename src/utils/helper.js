import {
  getBuyingPotential,
  countYearExpenses,
  countFreeCash,
  countAgeRatio,
} from './buyingPotential'

const multiplyTwoNumbers = (num1, num2) => {
  return num1 * num2
}

const sumTwoNumbers = (num1, num2) => {
  if (typeof num1 === 'number' && typeof num2 === 'number') return num1 + num2
  else return null
}

const countTotalSum = (elems) => {
  const sum = elems.reduce((acc, potential) => acc + potential, 0)

  return sum
}

const getIsBeneficiary = (occupation) => {
  switch (occupation) {
    case 'policeman':
    case 'fireman':
    case 'teacher':
    case 'military':
      return true
    default:
      return false
  }
}

const getPersonsStats = (personData) => {
  const yearExpenses = countYearExpenses(personData.monthlyExpenses)
  const freeCash = countFreeCash(personData.yearIncome, yearExpenses)
  const ageRatio = countAgeRatio(personData.age, personData.occupation)

  return {
    ageRatio,
    freeCash,
  }
}

export {
  sumTwoNumbers,
  multiplyTwoNumbers,
  countTotalSum,
  getIsBeneficiary,
  getPersonsStats,
}
