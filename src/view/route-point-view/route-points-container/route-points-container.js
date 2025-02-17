import {createElement} from '../../../render';


const createRoutesPointContainerTemplate = () => (
  `
  <ul class="trip-events__list"></ul>
  `
);

export class RoutePointsContainer{
  getTemplate() {
    return createRoutesPointContainerTemplate();
  };

  getElement(){
    if (!this.element){
      this.element = createElement(this.getTemplate());
    }

    return this.element;
  }
}
