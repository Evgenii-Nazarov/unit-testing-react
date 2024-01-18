import { useState } from 'react'
import ApplicantForm from './components/UserForm'
import LoanForm from './components/LoanForm'
import { useApplicants } from './hooks/useApplicants'
import './App.css'

function App() {
  const { applicants, addApplicant } = useApplicants()

  return (
    <div className="flex gap-10">
      <div className="flex-1">
        <h2 className="text-3xl font-bold">Applicants</h2>
        <div className="flex gap-1 py-1 my-1 flex-wrap min-h-40 min-w-500 justify-center border rounded-lg border-amber-300 hover:cursor-default">
          {applicants.map((el) => (
            <div
              className="flex flex-col p-2 justify-center text-xs border rounded-lg border-amber-300 text-start"
              key={Math.random()}
            >
              <div>Name: {el.name}</div>
              <div>Age: {el.age}</div>
              <div>Year Income: {el.yearIncome}</div>
              <div>Credit Score: {el.creditScore}</div>
              <div>Occupation: {el.occupation}</div>
              <div>Monthly expenses: {el.monthlyExpenses}</div>
            </div>
          ))}
        </div>
        <ApplicantForm addApplicant={addApplicant} />
      </div>
      {/* <div className="flex-1"></div> */}
      <div className="flex-1">
        <LoanForm applicants={applicants} />
      </div>
    </div>
  )
}

export default App
