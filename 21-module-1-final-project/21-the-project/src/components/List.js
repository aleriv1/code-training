import { Component } from '../core/Component';
import { createElement } from './App';
import { ListItem } from './ListItem';

export class List extends Component {
  setup() {
    this.$rootElement = createElement('div', { className: 'donates-container' });

    const $donatesContTitle = createElement('h2', { className: 'donates-container__title' });
    $donatesContTitle.textContent = 'Список донатов';
    this.$rootElement.appendChild($donatesContTitle);

    this.$donatesCont = createElement('div', { className: 'donates-container__donates' });
    this.$rootElement.appendChild(this.$donatesCont);
  }

  addItem(donate) {
    const listItem = new ListItem({ donate });
    this.$donatesCont.appendChild(listItem.$rootElement);
  }
}