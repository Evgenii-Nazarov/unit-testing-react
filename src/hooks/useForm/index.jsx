import { useState } from 'react'
import { validateField } from '../../utils/validate/index'
import { isEmpty } from '../../utils/helper'

const useForm = (initialValues = {}) => {
  /** formFields
   * @param {Object} field Information about the field.
   * @param {boolean} field.isValidateError Field validation error flag.
   * @param {string} field.validateErrorText Field validation error text.
   * @param {number} field.value Field value
   */
  const [formFields, setFormFields] = useState(initialValues)
  const [errors, setError] = useState({})

  const updateForm = (fieldName, fieldValue) => {
    setFormFields({
      ...formFields,
      [fieldName]: fieldValue,
    })

    const { isValidateError, validateErrorText } = validateField(
      fieldName,
      fieldValue,
    )

    if (validateErrorText) {
      setError({
        ...errors,
        [fieldName]: validateErrorText,
      })
    } else {
      const state = { ...errors }
      delete state[fieldName]
      setError(state)
    }
  }

  const clearForm = () => {
    setFormFields({})
  }

  return {
    formFields,
    errors,
    updateForm,
    clearForm,
    isErrors: !isEmpty(errors),
  }
}

export { useForm }
