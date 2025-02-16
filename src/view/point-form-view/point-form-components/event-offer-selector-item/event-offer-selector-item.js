

export const createEventOfferSelectorItemTemplate = (entry) => {
  const [key, value] = entry;

  return (
    `
  <div class="event__offer-selector">
     <input class="event__offer-checkbox  visually-hidden" id="event-offer-${key}-1" type="checkbox" name="event-offer-${key}">
     <label class="event__offer-label" for="event-offer-${key}-1">
     <span class="event__offer-title">${value}</span>
               &euro;&nbsp;
     <span class="event__offer-price">40</span>
     </label>
  </div>
  `
  );

};
