const getCredirScoreRatio = (creditScores) => {
    const meanCreditScore = countMeanCreditScore(creditScores)
    const creditScoreRatio = countCreditScoreRatio(meanCreditScore)

    return creditScoreRatio
}