import { describe, it, expect, vi } from 'vitest'
import { render, renderHook, screen, act } from '@testing-library/react';

import useForm from './index'

describe('useForm', () => {
    it('should set intial value as provided', () => {
        const { result } = renderHook(() => useForm({ foo: 'bar' }))
        expect(result.current.formFields).toEqual({ foo: 'bar' })
    })

    it('should set intial value if not provided', () => {
        const { result } = renderHook(() => useForm())
        expect(result.current.formFields).toEqual({})
    })

    it('should update state if updateForm used', () => {
        const { result } = renderHook(() => useForm())
        act(() => result.current.updateForm('foo', 'bar'))

        expect(result.current.formFields).toEqual({ foo: 'bar'})
    })
})