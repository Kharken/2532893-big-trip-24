import {createIDfromTitle} from "../utility";

const OFFERS_LIST = {
  TAXI: 'taxi',
  BUS: 'bus',
  TRAIN: 'train',
  SHIP: 'ship',
  DRIVE: 'drive',
  FLIGHT: 'flight',
  CHECK_IN: 'check-in',
  SIGHTSEEING: 'sightseeing',
  RESTAURANT: 'restaurant'
}

const createOffersSpecialList = (value, item) => {
  let offers = []
  for (let i = 0; i < value; i++){
    offers.push(new Object({
      id: `${createIDfromTitle(`${item}-offer-${i + 1}`)}`,
      title: `offer-${i + 1}`,
      price: `${50 * (i + 1)}`,
    }))

  }
  return offers;
}

const createOffersMockList = (offer) => {
  return Object.values(offer).map((item) => new Object({
    type: item,
    offers: createOffersSpecialList(3, item)
  }))
}

export {createOffersMockList, OFFERS_LIST}

