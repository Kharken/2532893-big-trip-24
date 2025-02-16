import {getCapitalizedWord} from '../../../../utils';

export const createEventTypeItemTemplate = (str) => (
  ` <div class="event__type-item">
        <input id="event-type-${str}-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="${str}">
        <label class="event__type-label  event__type-label--${str}" for="event-type-${str}-1">
        ${getCapitalizedWord(str)}
        </label>
      </div>
  `
);
