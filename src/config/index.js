import defaultConfig from './default.json'

class Config {
  constructor() {
    this.config = this.config || this.setupConfig()
  }

  setupConfig() {
    const appEnv = process.env.REACT_APP_ENV || process.env.NODE_ENV || 'development'
    const appEnvConfig = require(`./${appEnv}.json`)

    this.config = {
      ...defaultConfig,
      ...appEnvConfig,
      ...process.env
    }

    return this.config
  }
}

export default new Config().config
