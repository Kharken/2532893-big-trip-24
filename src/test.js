import {createOffersMockList, OFFERS_LIST} from "./mocks/mock-offers";
import {createDestinationsMockList, DestinationsList} from "./mocks/mock-destinations";

const point = {
  destination: createDestinationsMockList(DestinationsList)[1],
  offers: createOffersMockList(OFFERS_LIST)
}

console.log(point)
