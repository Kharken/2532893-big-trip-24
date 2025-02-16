import {render} from '../render';

import {SortingView} from '../view/sorting-view/sorting-view';
import {PointFormView} from '../view/point-form-view/point-form-view';

export class MainPresenter {
  sortingComponent = new SortingView();
  editFormComponent = new PointFormView('Delete');

  constructor({mainContainer}) {
    this.mainContainer = mainContainer;
  }

  init() {
    render(this.sortingComponent, this.mainContainer);
    render(this.editFormComponent, this.mainContainer);
  }
}
