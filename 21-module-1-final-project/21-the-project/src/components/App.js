import { Component } from '../core/Component';
import { Form } from './Form';
import { List } from './List';

export function createElement(tag, attrs = {}) {
  const el = document.createElement(tag);
  Object.assign(el, attrs);
  return el;
}

export class App extends Component {
  setup(props) {
    this.state = { donates: [], total: 0 };

    this.$rootElement = createElement('div', { className: 'app' });

    const $formContainer = document.createElement('div')

    this.$total = createElement('h1');
    this.$total.textContent = `Итого: $${this.state.total}`;
    $formContainer.appendChild(this.$total);

    this.form = new Form({ onSubmit: this.onItemCreate.bind(this) });
    $formContainer.appendChild(this.form.$rootElement);

    this.$rootElement.append($formContainer)

    this.$list = new List();
    this.$rootElement.appendChild(this.$list.$rootElement);

    this.initDonates();
  }

  initDonates() {
    const initials = [
      { amount: 1, timestamp: '19/01/2024, 19:46:30' },
      { amount: 2, timestamp: '19/01/2024, 19:46:31' },
      { amount: 3, timestamp: '19/01/2024, 19:46:31' },
      { amount: 4, timestamp: '19/01/2024, 19:46:31' },
      { amount: 5, timestamp: '19/01/2024, 19:46:32' }
    ];
    initials.forEach(donate => this.onItemCreate(donate));
  }

  onItemCreate(donate) {
    this.state.donates.push(donate);
    this.state.total += donate.amount;
    this.$list.addItem(donate);
    this.updateTotal();
  }

  updateTotal() {
    this.$total.textContent = `Итого: $${this.state.total}`;
  }
}