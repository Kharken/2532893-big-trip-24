import {render} from '../render';

import {pointFormButtonValue} from '../view/point-form-view/point-form-components/point-form-data';

import {SortingView} from '../view/sorting-view/sorting-view';
import {PointFormView} from '../view/point-form-view/point-form-view';
import {RoutePointView} from '../view/route-point-view/route-point-view';
import {RoutePointsContainer} from '../view/route-point-view/route-points-container/route-points-container';

export class MainPresenter {
  sortingComponent = new SortingView();
  editFormComponent = new PointFormView(pointFormButtonValue.Edit);
  addFormComponent = new PointFormView(pointFormButtonValue.Add);
  routePointsContainer = new RoutePointsContainer();

  constructor({mainContainer}) {
    this.mainContainer = mainContainer;
  }

  init() {
    render(this.sortingComponent, this.mainContainer);
    render(this.editFormComponent, this.mainContainer);
    render(this.addFormComponent, this.mainContainer);
    render(this.routePointsContainer, this.mainContainer);
    for (let i = 0; i < 3; i++){
      render(new RoutePointView(), this.routePointsContainer.getElement());
    }
  }
}


