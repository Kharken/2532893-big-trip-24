import {render} from "../render";
import PointsListView from "../view/point-list-view";
import PointView from "../view/point-view";
import FormEditView from "../view/form-edit-view";
import FormCreateView from "../view/form-create-view";

const pointsListElement = new PointsListView();

export default class MainPresenter {


  constructor({container, offersModel, destinationsModel, pointsModel}) {
    this.container = container;
    this.offersModel = offersModel;
    this.destinationsModel = destinationsModel;
    this.pointsModel = pointsModel;
  }


  init(){
    this.offers = [...this.offersModel.getOffers()]
    this.destinations = [...this.destinationsModel.getDestinations()]
    this.points = [...this.pointsModel.getPoints()]


    render(new FormCreateView(), this.container)
    render(new FormEditView(), this.container)
    render(pointsListElement, this.container)
    for (let i = 0; i < this.points.length; i++){
      render(new PointView({point: this.points[i]}), pointsListElement.getElement())
    }

  }
}
