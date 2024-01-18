import { describe, it, excpect, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import App from './App'
import * as ApplicantsHook from './hooks/useApplicants'

describe.only('App', () => {
  it('should render Applicants header', () => {
    render(<App addApplicant={vi.fn()}></App>)
    expect(screen.getByText('Applicants')).toBeDefined()
  })

  it('should call useApplicants hook and render applicants', () => {
    const spy = vi.spyOn(ApplicantsHook, 'useApplicants')
    expect(spy.getMockName()).toEqual('useApplicants')

    spy.mockImplementationOnce(() => {
      return { applicants: [{ name: 'Sam' }, { name: 'Tom' }] }
    })

    render(<App></App>)

    expect(screen.getByText('Name: Sam')).toBeDefined()
    expect(screen.getByText('Name: Tom')).toBeDefined()
  })
})
