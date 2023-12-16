const validateAge = (age) => {
    let isValidateError = false
    let validateErrorText = ''

    if (age < 1) {
        isValidateError = true
        validateErrorText = "Can't be less then 1"
    } else if (age > 120) {
        isValidateError = true
        validateErrorText = "Can't be more then 120"
    }

    return {
        isValidateError,
        validateErrorText
    }
}

export {
    validateAge
}