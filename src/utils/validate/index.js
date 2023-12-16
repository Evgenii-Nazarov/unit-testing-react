import { validateAge } from './rules'

const TYPE_TO_RULES_MAP = {
    'age': validateAge,
}

const validateField = (fieldName, fieldValue) => {
    const typeRules = TYPE_TO_RULES_MAP[fieldName]
    switch (fieldName) {
        case ('age'):
            return validateAge(fieldValue)
        default :
            return {}
    }
}

export {
    validateField
}