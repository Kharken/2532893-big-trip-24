import {createIDfromTitle} from "../utility";

const DestinationsList = [
  'Chamonix',
  'Amsterdam',
  'Paris'
]

const createDestinationsMockList = (points) => {
  return points.map((item, index) => new Object({
    id: createIDfromTitle(item),
    description: `${item} is a best place in the World`,
    name: item,
    pictures: [
      {
        src: `https://loremflickr.com/248/152?random=${index + 100}`,
        description: `The favorite place of ${item}`,
      }
    ]
  }))
}

export {createDestinationsMockList, DestinationsList}
