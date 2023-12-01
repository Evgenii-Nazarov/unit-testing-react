import { countMeanCreditScore, countCreditScoreRatio } from './creditScore'
import { countTotalSum, multiplyTwoNumbers, getIsBeneficiary } from './helper'
import { getBuyingPotential, getPersonsStats } from './buyingPotential'

const getCredirScoreRatio = (creditScores) => {
    const meanCreditScore = countMeanCreditScore(creditScores)
    const creditScoreRatio = countCreditScoreRatio(meanCreditScore)

    return creditScoreRatio
}

/**
 * @param {Object[]} persons Array of persons.
 */
 const getTotalPotential = (persons) => {
    const personsPotentials = persons.map(pearsonData => {
        const buyingPotential = getBuyingPotential(pearsonData)
        return buyingPotential
    })

    const totalPotentials = countTotalSum(personsPotentials)

    return totalPotentials
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

export {
    getCredirScoreRatio,
    getTotalPotential
}