const sumTwoNumbers = (num1, num2) => {
    if (typeof num1 === 'number' && typeof num2 === 'number')
    return num1 + num2
    else return null
}

const summAllNumbers = (...args) => {
    return args.reduce((accumulator, currentNumber) => accumulator + currentNumber, 0)
}

const multiplyTwoNumbers = (num1, num2) => {
    return num1 * num2
}

const countTotalSum = (elems) => {
    const sum = elems.reduce(acc, potential => acc + potential, 0)

    return sum
}

export {
    sumTwoNumbers,
    summAllNumbers,
    multiplyTwoNumbers,
    countTotalSum
}