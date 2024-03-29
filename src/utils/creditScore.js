import { countTotalSum, multiplyTwoNumbers } from './helper'

const countMeanCreditScore = (creditScores) => {
  const creditScoreSum = countTotalSum(creditScores)

  return creditScoreSum / creditScores.length
}

const countCreditScoreRatio = (creditScore) => {
  if (creditScore > 0 && creditScore < 600) return 2
  else if (creditScore >= 600 && creditScore < 650) return 1.5
  else if (creditScore >= 650 && creditScore < 750) return 1
  else if (creditScore >= 750 && creditScore < 800) return 0.9
  else return 0.8
}

const getMonthlyPayment = (amount, yearPotential, creditScoreRatio, period = 360) => {
  const potentialWithCreditScore = multiplyTwoNumbers(
    yearPotential,
    creditScoreRatio,
  )

  if (potentialWithCreditScore < amount/period) {
    return null
  }

  return amount/period
}

export { countCreditScoreRatio, countMeanCreditScore, getMonthlyPayment }
