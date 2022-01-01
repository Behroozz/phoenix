module.exports = {
  // since next js is not auto refresh sometimes in docker we need this
  webpackDevMiddleware: (config) => {
    config.watchOptions.poll = 300
    return config
  }
}
