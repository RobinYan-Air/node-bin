module.exports = (app) => {
  try {
    return require.resolve(app)
  } catch (error) {
    return undefined
  }
}