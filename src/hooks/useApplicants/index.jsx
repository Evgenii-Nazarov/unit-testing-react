import { useState } from 'react'
import { validateField } from '../../utils/validate/index'
import { isEmpty } from '../../utils/helper'

const useApplicants = (initialValues = []) => {
  const [applicants, setApplicants] = useState(initialValues)

  const addApplicant = (data) => {
    setApplicants((currentState) => [...currentState, data])
  }

  const clearAll = () => {
    setApplicants([])
  }

  return {
    applicants,
    addApplicant,
    clearAll,
  }
}

export { useApplicants }
