import {createDestinationsMockList, DestinationsList} from "../mocks/mock-destinations";

export default class DestinationsModel {
  destination = createDestinationsMockList(DestinationsList)

  getDestinations(){
    return this.destination
  }
}
