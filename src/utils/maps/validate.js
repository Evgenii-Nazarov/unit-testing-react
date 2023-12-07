import { validateAge } from '../validate/index'

const TYPE_TO_RULES_MAP = {
    'age': validateAge,
    // 'yearIncome': validateIncome,
}