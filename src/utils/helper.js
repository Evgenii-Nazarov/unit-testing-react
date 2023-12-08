import {
  getBuyingPotential,
  countYearExpenses,
  countFreeCash,
  countAgeRatio,
} from './buyingPotential'
import { validateField } from './validate/index'

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

/** formData
 * @param {Object[]} formData Array of fields.
 * @param {Object} field Information about the field.
 * @param {string} field.type Field type.
 * @param {boolean} field.isValidateError Field validation error flag.
 * @param {string} field.validateErrorText Field validation error text.
 * @param {number} field.value Field value
 */
const validateData = (formData) => {
  const validatedFormData = Object.entries(formData).map(
    ([fieldName, fieldValue]) => {
      const { isValidateError, validateErrorText } = validateField(
        fieldName,
        fieldValue,
      )
      // if (isValidateError) {
      //     return ()
      // }
      return {
        ...fieldData,
        isValidateError,
        validateErrorText,
      }
    },
  )

  console.log('validatedFormData', validatedFormData)

  return validatedFormData
}

function isEmpty(obj) {
  for (const prop in obj) {
    if (Object.hasOwn(obj, prop)) {
      return false
    }
  }

  return true
}

export {
  sumTwoNumbers,
  multiplyTwoNumbers,
  countTotalSum,
  getIsBeneficiary,
  getPersonsStats,
  validateData,
  isEmpty,
}
