import './styles/index.css';
import {basicCaseButton} from './cases/basic';

const container = document.createDocumentFragment();

const elementsToBeAppended = [
  basicCaseButton
];
elementsToBeAppended.forEach(e => container.appendChild(e));

const casesContainer = document.querySelector('.cases-container');
casesContainer.appendChild(container);
