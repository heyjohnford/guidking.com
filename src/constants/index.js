import config from '../config'

const { protocol, host, port } = config.api

export const BASE_API = `${protocol}${host}:${port}/`

export const formOptions = [
  {
    name: 'Hyphens',
    checked: true
  },
  {
    name: 'Uppercase',
    checked: false
  },
  {
    name: 'Braces',
    checked: false
  }
]
