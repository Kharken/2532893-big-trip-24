const Cities = [
  'Amsterdam',
  'Geneva',
  'Chamonix'
]

const createOptionCityTemplate = (item) => {
  return `<option value=${item}></option>`
}

export {Cities, createOptionCityTemplate}
