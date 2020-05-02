import './styles/index.css';
import { basicCaseButton } from './cases/basic';
import { filterCaseButton } from './cases/filter';
import { mergeCaseButton } from './cases/merge';
import { transformCaseButton } from './cases/transform';
import { errorCaseButton } from './cases/error';
import { subjectCaseButton } from './cases/subject';
import { hotNColdCaseButton } from './cases/hot-n-cold';
import { scanCaseButton } from './cases/scan';

const container = document.createDocumentFragment();

const elementsToBeAppended = [
  basicCaseButton,
  subjectCaseButton,
  filterCaseButton,
  mergeCaseButton,
  transformCaseButton,
  errorCaseButton,
  hotNColdCaseButton,
  scanCaseButton,
];
elementsToBeAppended.forEach((e) => container.appendChild(e));

const casesContainer = document.querySelector('.cases-container');
casesContainer.appendChild(container);
