import './styles/index.css';
import { basicCaseButton } from './cases/basic';
import { filterCaseButton } from './cases/filter';
import { mergeCaseButton } from './cases/merge';
import { transformCaseButton } from './cases/transform';

const container = document.createDocumentFragment();

const elementsToBeAppended = [
  basicCaseButton,
  filterCaseButton,
  mergeCaseButton,
  transformCaseButton
];
elementsToBeAppended.forEach(e => container.appendChild(e));

const casesContainer = document.querySelector('.cases-container');
casesContainer.appendChild(container);
