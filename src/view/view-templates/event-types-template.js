import {capitalizeWord} from "../../utility";

const EventTypesList = [
  'Taxi',
  'Bus',
  'Train',
  'Ship',
  'Drive',
  'Flight',
  'Check-in',
  'Sightseeing',
  'Restaurant'
]

const EventTypesListToLowerCase = EventTypesList.map(item => item.toLowerCase())


const createEventTypeTemplate = (item) => {
  return `<div class="event__type-item">
            <input id="event-type-${item}-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="${item}">
            <label class="event__type-label  event__type-label--${item}" for="event-type-${item}-1">${capitalizeWord(item)}</label>
          </div>`
}

export {EventTypesList, EventTypesListToLowerCase, createEventTypeTemplate}

