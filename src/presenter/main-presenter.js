import {render} from "../render";
import PointsListView from "../view/point-list-view";
import PointView from "../view/point-view";
import FormEditView from "../view/form-edit-view";
import FormCreateView from "../view/form-create-view";

const pointsListElement = new PointsListView();

export default class MainPresenter {


  constructor({container}) {
    this.container = container;
  }


  init(){
    render(new FormCreateView(), this.container)
    render(new FormEditView(), this.container)
    render(pointsListElement, this.container)
    for (let i = 0; i < 3; i++){
      render(new PointView(), pointsListElement.getElement())
    }

  }
}
