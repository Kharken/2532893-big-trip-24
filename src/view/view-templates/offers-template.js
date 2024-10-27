const Offers = [
  {
    offer: 'luggage',
    title: 'Add luggage',
    price: 30
  },
  {
    offer: 'comfort',
    title: 'Switch to comfort class',
    price: 100
  },
  {
    offer: 'meal',
    title: 'Add meal',
    price: 15
  },
  {
    offer: 'seats',
    title: 'Choose seats',
    price: 5
  },
  {
    offer: 'train',
    title: 'Travel by train',
    price: 40
  },
]

const createOfferTemplate = (item) => {
  return `
    <div class="event__offer-selector">
      <input class="event__offer-checkbox  visually-hidden" id="event-offer-${item.offer}-1" type="checkbox"    name="event-offer-${item.offer}" checked>
       <label class="event__offer-label" for="event-offer-${item.offer}-1">
       <span class="event__offer-title">${item.title}</span>
           &plus;&euro;&nbsp;
       <span class="event__offer-price">${item.price}</span>
       </label>
    </div>`
}

// console.log(createOfferTemplate(Offers[0]))
export {Offers, createOfferTemplate}
