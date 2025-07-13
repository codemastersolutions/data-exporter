import { describe, it, expect, vi } from 'vitest'
import { helloWorld } from '../src/index'

describe('helloWorld', () => {
  it('should return "Hello, World!" and log it to the console', () => {
    const logSpy = vi.spyOn(console, 'log')
    expect(helloWorld()).toBe('Hello, World!')
    expect(logSpy).toHaveBeenCalledWith('Hello, World!')
    logSpy.mockRestore()
  })
})
