import { countMeanCreditScore, countCreditScoreRatio } from './creditScore'
import { countTotalSum } from './helper'
import { getBuyingPotential } from './buyingPotential'

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
        const buyPotential = getBuyingPotential(pearsonData)
        return buyPotential
    })

    const totalPotentials = countTotalSum(personsPotentials)

    return totalPotentials
}

export {
    getCredirScoreRatio,
    getTotalPotential,
}