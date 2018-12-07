const checkApp = require('../lib/check')

describe('bin.check', () => {
  it('should return the path of shellJs', () => {
    const shellJsPath = require.resolve('shelljs')
    expect(checkApp('shelljs')).toBe(shellJsPath)
  })

  it('should return undefined', () => {
    expect(checkApp('123123')).toBeUndefined()
  })
})