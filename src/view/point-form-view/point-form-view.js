import {createSimilarComponentsList} from '../../utils.js';

import {eventTypeData} from './point-form-components/event-type-item/event-type-data.js';
import {eventCityData} from './point-form-components/event-city-item/event-city-data';
import {eventOfferSelectorData} from './point-form-components/event-offer-selector-item/event-offer-selector-data';

import {createEventTypeItemTemplate} from './point-form-components/event-type-item/event-type-item.js';
import {createEventCityItemTemplate} from './point-form-components/event-city-item/event-city-item';
import {
  createEventOfferSelectorItemTemplate
} from './point-form-components/event-offer-selector-item/event-offer-selector-item';


import {createElement} from '../../render.js';

const eventTypeList = createSimilarComponentsList(Object.values(eventTypeData), createEventTypeItemTemplate);
const eventCityList = createSimilarComponentsList(Object.values(eventCityData), createEventCityItemTemplate);
const eventOfferSelectorItemList = createSimilarComponentsList(Object.entries(eventOfferSelectorData), createEventOfferSelectorItemTemplate);

console.log(eventOfferSelectorItemList);

const createPointFormViewTemplate = (buttonValue) => (
  `
              <form class="event event--edit" action="#" method="post">
                <header class="event__header">
                  <div class="event__type-wrapper">
                    <label class="event__type  event__type-btn" for="event-type-toggle-1">
                      <span class="visually-hidden">Choose event type</span>
                      <img class="event__type-icon" width="17" height="17" src="img/icons/flight.png" alt="Event type icon">
                    </label>
                    <input class="event__type-toggle  visually-hidden" id="event-type-toggle-1" type="checkbox">

                    <div class="event__type-list">
                      <fieldset class="event__type-group">
                        <legend class="visually-hidden">Event type</legend>
                            ${eventTypeList}

                      </fieldset>
                    </div>
                  </div>

                  <div class="event__field-group  event__field-group--destination">
                    <label class="event__label  event__type-output" for="event-destination-1">
                      Flight
                    </label>
                    <input class="event__input  event__input--destination" id="event-destination-1" type="text" name="event-destination" value="Chamonix" list="destination-list-1">
                    <datalist id="destination-list-1">
                      ${eventCityList}
                    </datalist>
                  </div>

                  <div class="event__field-group  event__field-group--time">
                    <label class="visually-hidden" for="event-start-time-1">From</label>
                    <input class="event__input  event__input--time" id="event-start-time-1" type="text" name="event-start-time" value="18/03/19 12:25">
                    &mdash;
                    <label class="visually-hidden" for="event-end-time-1">To</label>
                    <input class="event__input  event__input--time" id="event-end-time-1" type="text" name="event-end-time" value="18/03/19 13:35">
                  </div>

                  <div class="event__field-group  event__field-group--price">
                    <label class="event__label" for="event-price-1">
                      <span class="visually-hidden">Price</span>
                      &euro;
                    </label>
                    <input class="event__input  event__input--price" id="event-price-1" type="text" name="event-price" value="160">
                  </div>

                  <button class="event__save-btn  btn  btn--blue" type="submit">Save</button>
                  <button class="event__reset-btn" type="reset">${buttonValue}</button>
                  <button class="event__rollup-btn" type="button">
                    <span class="visually-hidden">Open event</span>
                  </button>
                </header>
                <section class="event__details">
                  <section class="event__section  event__section--offers">
                    <h3 class="event__section-title  event__section-title--offers">Offers</h3>

                    <div class="event__available-offers">
                      ${eventOfferSelectorItemList}
                  </section>

                  <section class="event__section  event__section--destination">
                    <h3 class="event__section-title  event__section-title--destination">Destination</h3>
                    <p class="event__destination-description">Chamonix-Mont-Blanc (usually shortened to Chamonix) is a resort area near the junction of France, Switzerland and Italy. At the base of Mont Blanc, the highest summit in the Alps, it's renowned for its skiing.</p>
                  </section>
                </section>
              </form>
    `
);

export class PointFormView {
  constructor(buttonValue) {
    this.buttonValue = buttonValue;
  }

  getTemplate() {
    return createPointFormViewTemplate(this.buttonValue);
  };

  getElement(){
    if (!this.element){
      this.element = createElement(this.getTemplate());
    }

    return this.element;
  }
}
