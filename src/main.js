
import {render} from './render';

import {FilterView} from './view/filter-view/filter-view';
import {MainPresenter} from './presenter/main-presenter';

const tripMainControlsContainer = document.querySelector('.trip-controls__filters');
const tripEventsContainer = document.querySelector('.trip-events');

const filterView = new FilterView();

const mainPresenter = new MainPresenter({mainContainer: tripEventsContainer});

render(filterView, tripMainControlsContainer);
mainPresenter.init();


