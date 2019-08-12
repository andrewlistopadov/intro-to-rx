import './styles/index.css';
import {basicCaseButton} from './cases/basic';
import {filterCaseButton} from './cases/filter';

const container = document.createDocumentFragment();

const elementsToBeAppended = [
  basicCaseButton,
  filterCaseButton
];
elementsToBeAppended.forEach(e => container.appendChild(e));

const casesContainer = document.querySelector('.cases-container');
casesContainer.appendChild(container);
