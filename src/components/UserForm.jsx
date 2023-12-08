import { useState } from 'react'
import { isEmpty } from '../utils/helper'

import useForm from '../hooks/useForm'

const initialData = {
  name: 'Bob',
  age: 0,
  yearIncome: 130000,
}

function ApplicantForm({ addApplicant }) {
  const { formFields, updateForm, errors, isErrors } = useForm(initialData)

  const handleClick = () => {
    setCount((count) => count + 1)
  }

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

  return (
    <>
      <h1 className="text-3xl font-bold">Form</h1>

      <form className="flex flex-col gap-y-2" onSubmit={submitHandler}>
        <label className="h-6 mb-6 flex">
          <div className="basis-1/3">Name:</div>
          <div className="basis-1/3">
            <input
              type="text"
              name="name"
              value={formFields.name}
              onChange={formChangeHandler}
            />
            <div className="text-red-600">{errors.name}</div>
          </div>
        </label>
        <label className="h-6 mb-6 flex">
          <div className="basis-1/3">Age:</div>
          <div className="basis-1/3">
            <input
              type="number"
              name="age"
              value={formFields.age}
              onChange={formChangeHandler}
            />
            <div className="text-red-600">{errors.age}</div>
          </div>
        </label>
        <label className="h-6 mb-6 flex">
          <div className="basis-1/3">Year Income:</div>
          <div className="basis-1/3">
            <input
              type="number"
              name="yearIncome"
              value={formFields.yearIncome}
              onChange={formChangeHandler}
            />
            <div className="text-red-600">{errors.yearIncome}</div>
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
