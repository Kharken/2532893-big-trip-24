import {createOffersMockList, OFFERS_LIST} from "./mocks/mock-offers";
import {createDestinationsMockList, DestinationsList} from "./mocks/mock-destinations";
import {getRandomArrayElement} from "./utility";

const getRandomType = (listENum) => {
  return getRandomArrayElement(Object.keys(listENum))
}

const point = {
  basePrice: 1,
  dateFrom: '1',
  dateTo: '2',
  destination: createDestinationsMockList(DestinationsList)[1],
  isFavorite: true,
  offers: createOffersMockList(OFFERS_LIST),
  type: OFFERS_LIST.TAXI
}

const points = DestinationsList.map((item, index) => {
  return new Object({
    basePrice: 1,
    dateFrom: '1',
    dateTo: '2',
    destination: createDestinationsMockList(DestinationsList)[index],
    isFavorite: true,
    offers: createOffersMockList(OFFERS_LIST),
    type: OFFERS_LIST[getRandomType(OFFERS_LIST)]
  })
  }

)

console.log(points)
