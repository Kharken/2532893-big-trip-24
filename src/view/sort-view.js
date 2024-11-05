import {createElement} from "../render";
import {createDynamicMarkup} from "../utility";

const SortOptionsList = [
    'Day',
    'Event',
    'Time',
    'Price',
    'Offers'
]

const createSortItemTemplate = (item) => {
  return `<div class="trip-sort__item  trip-sort__item--day">
              <input id="sort-day" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-day">
              <label class="trip-sort__btn" for="sort-day">${item}</label>
            </div>
  `
}

const createSortTemplate = () => {
  return ` <form class="trip-events__trip-sort  trip-sort" action="#" method="get">
               ${createDynamicMarkup(SortOptionsList, createSortItemTemplate)}
          </form>`
}

export default class SortView {
  getTemplate(){
    return createSortTemplate();
  }

  getElement(){
    if (!this.element){
      this.element = createElement(this.getTemplate())
    }

    return this.element;
  }

  removeElement(){
    this.element = null;
  }

}
