import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import useForm from './hooks/useForm'
 /**
  * @param {number} amount Requested loan amount.
  * @param {Object[]} persons Array of persons.
  * @param {Object} person Information about the person.
  * @param {number} person.name The name of the person.
  * @param {number} person.age The age of the person.
  * @param {number} person.yearIncome The year income of the person.
  * @param {number} person.monthlyExpenses The monthly expenses of the person.
  * @param {number} person.creditScore The credit score of the person.
  * @param {string} person.occupation The occupation of the person.
  */

const initialData = {
  name: 'Bob',
  age: 0,
  yearIncome: 130000,
}

function App() {
  const { formFields, updateForm, errors, isErrors } = useForm(initialData)

  const handleClick = () => {
    setCount((count) => count + 1)
  }
 

  const submitHandler = (event) => {
    event.preventDefault();
    // if (errors)
    // console.log('submitHandler-errors', errors)
    console.log('isErrors', isErrors)
    // alert("Form submitted");
    // console.log('event.target.value', event.target.value)
    // console.log('event.target.value', event.target.name)
  }
  
  const formChangeHandler = (event) => {
    console.log('event.target', event.target)
    console.log('event.target.value', event.target.value)
    console.log('event.target.value', event.target.name)
    updateForm(event.target.name, event.target.value)
  }

  console.log('errors!!!', errors)
  
  return (
    <>
     <h1 className="text-3xl font-bold">
      Calculator
    </h1>

    <form className="flex flex-col gap-y-2" onSubmit={submitHandler}>
      <label className="h-6 mb-6 flex">
        <div className="flex-1">
          Name:
        </div>
        <div className="flex-1">
          <input type="text" name="name" value={formFields.name} onChange={formChangeHandler}/>
          <div className="text-red-600">
            {errors.name}
          </div>
        </div>
      </label>
      <label className="h-6 mb-6 flex">
        <div className="flex-1">
          Age:
        </div>
        <div className="flex-1">
          <input type="number" name="age" value={formFields.age} onChange={formChangeHandler}/>
          <div className="text-red-600">
            {errors.age}
          </div>
        </div>
      </label>
      <label className="h-6 mb-6 flex">
        <div className="flex-1">
          Year Income:
        </div>
        <div className="flex-1">
          <input type="number" name="yearIncome" value={formFields.yearIncome} onChange={formChangeHandler}/>
          <div className="text-red-600">
            {errors.yearIncome}
          </div>
        </div>
      </label>
      <input type="submit" value="Submit" />
    </form>
    </>
  )
}

export default App
