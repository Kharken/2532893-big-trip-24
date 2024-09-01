import { createElement } from '../../render.js';
import FilterItemsView from './filter-view-components/filter-items-view.js';

const createFiltersItems = new FilterItemsView().getTemplate();

function createFiltersTemplate() {
  return `<form class="trip-filters" action="#" method="get">
                ${createFiltersItems}

                <button class="visually-hidden" type="submit">Accept filter</button>
              </form>`;
}

export default class FiltersView {
  getTemplate() {
    return createFiltersTemplate();
  }

  getElement() {
    if (!this.element) {
      this.element = createElement(this.getTemplate());
    }
    return this.element;
  }

  removeElement() {
    this.element = null;
  }
}
