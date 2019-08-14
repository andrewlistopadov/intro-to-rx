import './styles/index.css';
import { basicCaseButton } from './cases/basic';
import { filterCaseButton } from './cases/filter';
import { mergeCaseButton } from './cases/merge';
import { transformCaseButton } from './cases/transform';
import { errorCaseButton } from './cases/error';

const container = document.createDocumentFragment();

const elementsToBeAppended = [
  basicCaseButton,
  filterCaseButton,
  mergeCaseButton,
  transformCaseButton,
  errorCaseButton
];
elementsToBeAppended.forEach(e => container.appendChild(e));

const casesContainer = document.querySelector('.cases-container');
casesContainer.appendChild(container);
