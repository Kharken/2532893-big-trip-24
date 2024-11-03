import {createOffersMockList, OFFERS_LIST} from "../mocks/mock-offers";

export default class OffersModel {
    offers = createOffersMockList(OFFERS_LIST)

    getOffers(){
        return this.offers;
    }
}
