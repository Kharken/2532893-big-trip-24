import {createMockPoints} from "../mocks/mock-points";
import {DestinationsList} from "../mocks/mock-destinations";
import {OFFERS_LIST} from "../mocks/mock-offers";

export default class PointsModel {
  points = createMockPoints(DestinationsList, OFFERS_LIST);

  getPoints(){
    return this.points;
  }
}
