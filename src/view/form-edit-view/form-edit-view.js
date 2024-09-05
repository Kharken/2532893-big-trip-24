import { createElement } from '../../render.js';
import EventTypeView from '../form-create-view/form-create-view-components/event-type-view.js';
import createDestinationInputTemplate from '../form-create-view/form-create-view-components/event-destination-view.js';
import EventTimepointView from '../form-create-view/form-create-view-components/event-timepoint-view.js';
import createPriceInputTemplate from '../form-create-view/form-create-view-components/event-price-view.js';
import EventSaveButtonView from '../form-create-view/form-create-view-components/event-save-button-view.js';
import createEditResetButtonTemplate from '../form-edit-view/event-edit-reset-button-view.js';
import createAllOfferSelectorsTemplate from '../form-create-view/form-create-view-components/event-offer-selector-view.js';

const createEventType = new EventTypeView().getTemplate();
const createEventDestination = createDestinationInputTemplate();
const createEventTimepoint = new EventTimepointView().getTemplate();
const createEventPrice = createPriceInputTemplate();
const createSaveButton = new EventSaveButtonView().getTemplate();
const createResetButton = createEditResetButtonTemplate();
const createOfferSelector = createAllOfferSelectorsTemplate();

function createFormCreateTemplate() {
  return `
    <form class="event event--edit" action="#" method="post">
      <header class="event__header">
        ${createEventType}
        ${createEventDestination}
        ${createEventTimepoint}
        ${createEventPrice}
        ${createSaveButton}
        ${createResetButton}
      </header>
      <section class="event__details">
        <section class="event__section  event__section--offers">
          <h3 class="event__section-title  event__section-title--offers">Offers</h3>
            <div class="event__available-offers">
              ${createOfferSelector}
            </div>
        </section>
        <section class="event__section  event__section--destination">
            <h3 class="event__section-title  event__section-title--destination">Destination</h3>
            <p class="event__destination-description">Geneva is a city in Switzerland that lies at the southern tip of expansive Lac Léman (Lake Geneva). Surrounded by the Alps and Jura mountains, the city has views of dramatic Mont Blanc.</p>
          <div class="event__photos-container">
            <div class="event__photos-tape">
              <img class="event__photo" src="img/photos/1.jpg" alt="Event photo">
              <img class="event__photo" src="img/photos/2.jpg" alt="Event photo">
              <img class="event__photo" src="img/photos/3.jpg" alt="Event photo">
              <img class="event__photo" src="img/photos/4.jpg" alt="Event photo">
              <img class="event__photo" src="img/photos/5.jpg" alt="Event photo">
            </div>
          </div>
        </section>
      </section>
              </form>
  `;
}

export default class FormEditView {
  getTemplate() {
    return createFormCreateTemplate();
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

