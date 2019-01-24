import { BASE_API } from '../constants'

export const hyphensPipeline = (guids) => {
  return guids.map(guid => guid.replace(/-/gi, ''))
}

export const uppercasePipeline = (guids) => {
  return guids.map(guid => guid.toUpperCase())
}

export const bracesPipeline = (guids) => {
  return guids.map(guid => `{${guid}}`)
}

export const gofetch = async (relPath = '', query = '') => {
  return await (await fetch(`${BASE_API}${relPath}${query}`)).json()
}

export default {
  hyphensPipeline,
  uppercasePipeline,
  bracesPipeline,
  gofetch
}
