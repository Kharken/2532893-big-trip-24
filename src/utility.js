const createDynamicMarkup = (list, cb) => {
  return (list.map(item => cb(item))).join('')
}

const capitalizeWord = (word) => {
  return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
}

export {createDynamicMarkup, capitalizeWord}
