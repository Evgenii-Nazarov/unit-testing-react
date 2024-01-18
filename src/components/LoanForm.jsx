import { useState } from 'react'
import { isEmpty } from '../utils/helper'
import { countMonthlyPayments } from '../utils/monthlyPayments'

import { useForm } from '../hooks/useForm'

const initialData = {
  amount: 950000,
  period: 360,
}

function LoanForm({ applicants }) {
  const { formFields, updateForm, errors, isErrors } = useForm(initialData)
  const [result, setResult] = useState(0)

  const submitHandler = (event) => {
    event.preventDefault()

    if (!isEmpty(errors)) {
      return
    }

    const result = countMonthlyPayments(
      formFields.amount,
      applicants,
      formFields.period,
    )
    setResult(result)
  }

  const formChangeHandler = (event) => {
    updateForm(event.target.name, event.target.value)
  }

  return (
    <>
      <h1 className="text-3xl font-bold">Loan Form</h1>

      <form className="flex flex-col gap-y-2" onSubmit={submitHandler}>
        {/* Loan Amount */}
        <label className="h-6 mb-6 flex">
          <div className="basis-1/3">Loan amount:</div>
          <div className="basis-1/3">
            <input
              type="number"
              name="amount"
              value={formFields?.amount}
              onChange={formChangeHandler}
            />
            <div className="text-red-600">{errors?.amount}</div>
          </div>
        </label>
        {/* Loan Period */}
        <label className="h-6 mb-6 flex">
          <div className="basis-1/3">Loan period:</div>
          <div className="basis-1/3">
            <input
              type="number"
              name="period"
              value={formFields?.period}
              onChange={formChangeHandler}
            />
            <div className="text-red-600">{errors?.period}</div>
          </div>
        </label>
        <div>
          <button className="rounded-lg border-amber-300" type="submit">
            Count montly payment
          </button>
        </div>
        <div className={`${result ? 'text-green-500' : 'text-red-500'}`}>
          {result === null ? 'Error!' : '$' + result}
        </div>
      </form>
    </>
  )
}

export default LoanForm
