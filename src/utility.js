const createDynamicMarkup = (list, cb) => {
  return (list.map(item => cb(item))).join('')
}

const capitalizeWord = (word) => {
  return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
}

const createIDfromTitle = (title) => {
 return (title.split('').map((item, index) => title.charCodeAt(index)).join('-'))

}

const getRandomArrayElement = (array) => {
    return array[Math.floor(Math.random() * (array.length - 1))]
}

export {createDynamicMarkup, capitalizeWord, createIDfromTitle, getRandomArrayElement}


