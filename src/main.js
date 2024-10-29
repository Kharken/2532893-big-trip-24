import {render} from './render'
import SortView from "./view/sort-view";
import FilterView from "./view/filter-view";
import MainPresenter from "./presenter/main-presenter";
import './test'

const tripEventsElement = document.querySelector('.trip-events')
const tripControlsFiltersElements = document.querySelector('.trip-controls__filters')

const mainPresenter = new MainPresenter({container: tripEventsElement})

render (new FilterView(), tripControlsFiltersElements)
render(new SortView(), tripEventsElement);
mainPresenter.init()
