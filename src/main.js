import {render} from './render'
import SortView from "./view/sort-view";
import FilterView from "./view/filter-view";
import MainPresenter from "./presenter/main-presenter";
import OffersModel from "./model/offers-model";
import DestinationsModel from "./model/destinations-model";
import PointsModel from "./model/points-model";
import {createMockPoints} from "./mocks/mock-points";
import {createOffersMockList} from "./mocks/mock-offers";
import {DestinationsList, createDestinationsMockList} from "./mocks/mock-destinations";
import {OFFERS_LIST} from "./mocks/mock-offers";

const tripEventsElement = document.querySelector('.trip-events')
const tripControlsFiltersElements = document.querySelector('.trip-controls__filters')

const offersModel = new OffersModel();
const destinationsModel = new DestinationsModel();
const pointsModel = new PointsModel();

const mainPresenter = new MainPresenter({container: tripEventsElement, offersModel, destinationsModel, pointsModel})


render (new FilterView(), tripControlsFiltersElements)
render(new SortView(), tripEventsElement);
mainPresenter.init()

console.log(createOffersMockList(OFFERS_LIST))
console.log(createMockPoints(DestinationsList, OFFERS_LIST))
