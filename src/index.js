import _ from 'lodash';
import './style.css';
import renderPopup from './modules/renderPopup.js';
import displayMeal from './modules/displayMeal.js';

window.addEventListener('DOMContentLoaded', () => {
  displayMeal();
  renderPopup();
});
