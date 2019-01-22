export const hyphensPipeline = (guids) => {
  return guids.map(guid => guid.replace(/-/gi, ''))
}

export const uppercasePipeline = (guids) => {
  return guids.map(guid => guid.toUpperCase())
}

export const bracesPipeline = (guids) => {
  return guids.map(guid => `{${guid}}`)
}

export default {
  hyphensPipeline,
  uppercasePipeline,
  bracesPipeline
}
