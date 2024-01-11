import { useState } from 'react'
import { isEmpty } from '../utils/helper'

import { useForm } from '../hooks/useForm'

const initialData = {
  name: 'Bob',
  age: 40,
  yearIncome: 130000,
  monthlyExpenses: 2000,
  creditScore: 720,
  occupation: 'Driver',
}

function ApplicantForm({ addApplicant }) {
  const { formFields, updateForm, errors, isErrors } = useForm(initialData)

  const submitHandler = (event) => {
    event.preventDefault()

    if (!isEmpty(errors)) {
      return
    }

    addApplicant(formFields)
  }

  const formChangeHandler = (event) => {
    updateForm(event.target.name, event.target.value)
  }

  const fields = {
    NAME: {
      type: 'text',
      name: 'name',
    },
    AGE: {
      type: 'number',
      name: 'age',
    },
    MONTHLY_EXPENSES: {
      type: 'number',
      name: 'monthlyExpenses',
    },
    OCCUPATION: {
      type: 'text',
      name: 'occupation',
    },
    CREDIT_SCORE: {
      type: 'number',
      name: 'creditScore',
    },
  }

  return (
    <>
      <h1 className="text-3xl font-bold">Add Applicant</h1>

      <form className="flex flex-col gap-y-2" onSubmit={submitHandler}>
        <label className="h-6 mb-6 flex">
          <div className="basis-1/3">Name:</div>
          <div className="basis-1/3">
            <input
              type="text"
              name={fields.NAME.name}
              value={formFields?.name}
              onChange={formChangeHandler}
            />
            <div className="text-red-600">{errors?.name}</div>
          </div>
        </label>
        <label className="h-6 mb-6 flex">
          <div className="basis-1/3">Age:</div>
          <div className="basis-1/3">
            <input
              type="number"
              name="age"
              value={formFields?.age}
              onChange={formChangeHandler}
            />
            <div className="text-red-600">{errors?.age}</div>
          </div>
        </label>
        <label className="h-6 mb-6 flex">
          <div className="basis-1/3">Year Income:</div>
          <div className="basis-1/3">
            <input
              type="number"
              name="yearIncome"
              value={formFields?.yearIncome}
              onChange={formChangeHandler}
            />
            <div className="text-red-600">{errors?.yearIncome}</div>
          </div>
        </label>
        <label className="h-6 mb-6 flex">
          <div className="basis-1/3">Montly Expenses:</div>
          <div className="basis-1/3">
            <input
              type="number"
              name="yearIncome"
              value={formFields?.monthlyExpenses}
              onChange={formChangeHandler}
            />
            <div className="text-red-600">{errors?.monthlyExpenses}</div>
          </div>
        </label>
        <label className="h-6 mb-6 flex">
          <div className="basis-1/3">Credit Score:</div>
          <div className="basis-1/3">
            <input
              type="number"
              name="yearIncome"
              value={formFields?.creditScore}
              onChange={formChangeHandler}
            />
            <div className="text-red-600">{errors?.creditScore}</div>
          </div>
        </label>
        <label className="h-6 mb-6 flex">
          <div className="basis-1/3">Occupation:</div>
          <div className="basis-1/3">
            <input
              name="yearIncome"
              value={formFields?.occupation}
              onChange={formChangeHandler}
            />
            <div className="text-red-600">{errors?.occupation}</div>
          </div>
        </label>
        <div>
          <button className="rounded-lg border-amber-300" type="submit">
            Add applicant
          </button>
        </div>
      </form>
    </>
  )
}

export default ApplicantForm
