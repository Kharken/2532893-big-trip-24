import {createOffersMockList, OFFERS_LIST} from "../mocks/mock-offers";
import {createDestinationsMockList, DestinationsList} from "../mocks/mock-destinations";
import {getRandomArrayElement} from "../utility";

const getRandomType = (listENum) => {
  return getRandomArrayElement(Object.keys(listENum))
}


const createMockPoints = (array, offers) => {
  return array.map((item, index) => {
      return new Object({
        basePrice: 1,
        dateFrom: '1',
        dateTo: '2',
        destination: createDestinationsMockList(array)[index],
        isFavorite: true,
        offers: createOffersMockList(offers),
        type: OFFERS_LIST[getRandomType(offers)]
      })
    }
  )
}
export {createMockPoints}
