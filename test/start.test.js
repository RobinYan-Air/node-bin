const chalk = require('chalk');
const start = require('../lib/start')

describe('bin.start', () => {
  test('should throw module not found error', () => {
    function startTest() {
      start()
    }
    expect(startTest).toThrow()
  })
})