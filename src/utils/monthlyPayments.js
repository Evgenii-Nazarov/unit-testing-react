import { getTotalPotential, getCredirScoreRatio } from './main'
import { getMonthlyPayment } from './creditScore'

/**
 * @param {number} amount Requested loan amount.
 * @param {Object[]} persons Array of persons.
 * @param {Object} person Information about the person.
 * @param {number} person.age The age of the person.
 * @param {number} person.yearIncome The year income of the person.
 * @param {number} person.monthlyExpenses The monthly expenses of the person.
 * @param {number} person.creditScore The credit score of the person.
 * @param {string} person.occupation The occupation of the person.
 */

const countMonthlyPayments = (amount, persons) => {
  const totalPotentialYearly = getTotalPotential(persons)

  const creditScores = persons.map((person) => person.creditScore)
  const creditScoreRatio = getCredirScoreRatio(creditScores)

  const monthlyPayment = getMonthlyPayment(
    amount,
    totalPotentialYearly,
    creditScoreRatio,
  )

  return monthlyPayment
}

export { countMonthlyPayments }
