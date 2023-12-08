import { useState } from 'react'
import ApplicantForm from './components/UserForm'
import { useApplicants } from './hooks/useApplicants'
import './App.css'

function App() {
  const { applicants, addApplicant } = useApplicants()

  return (
    <div className="flex">
      <div className="flex-1">
        <h2 className="text-3xl font-bold">Applicants</h2>
        {applicants.map((el) => (
          <div className="flex gap-y-2">
            <div key={el.name}>Name: {el.name}</div>
            <div key={el.age}>Age: {el.age}</div>
            <div key={el.yearIncome}>Year Income: {el.yearIncome}</div>
          </div>
        ))}
      </div>
      <div className="flex-1">
        <ApplicantForm addApplicant={addApplicant} />
      </div>
    </div>
  )
}

export default App
