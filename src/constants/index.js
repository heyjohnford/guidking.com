import config from '../config'

const { protocol, host, port } = config.api

export const BASE_API = `${protocol}${host}:${port}/`
export const COPY_TEXT = 'Copy to clipboard'
export const COPY_TEXT_COMPLETED = 'Copied!'

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
