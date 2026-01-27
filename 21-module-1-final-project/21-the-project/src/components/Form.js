import { Component } from '../core/Component';
import { createElement } from './App';

export class Form extends Component {
  setup(props) {
    this.$rootElement = createElement('form', { className: 'donate-form' });

    const $labelDonate = createElement('label', { className: 'donate-form__input-label' });
    $labelDonate.textContent = 'Введите сумму в $';

    this.$inputDonate = createElement('input', {
      className: 'donate-form__donate-input',
      name: 'amount',
      type: 'number',
      min: '1',
      max: '100',
      required: true
    });
    $labelDonate.appendChild(this.$inputDonate);

    this.$rootElement.appendChild($labelDonate);

    this.$buttonDonate = createElement('button', { className: 'donate-form__submit-button' });
    this.$buttonDonate.textContent = 'Задонатить';
    this.$buttonDonate.disabled = true;
    this.$buttonDonate.addEventListener('click', this.handleSubmit.bind(this));

    this.$rootElement.appendChild(this.$buttonDonate);

    this.$inputDonate.addEventListener('input', this.handleInput.bind(this));
  }

  handleInput(event) {
    const value = parseInt(event.target.value);
    this.$buttonDonate.disabled = isNaN(value) || value < 1 || value > 100 || !event.target.value.trim();
  }

  handleSubmit(event) {
    event.preventDefault();
    const amount = parseInt(this.$inputDonate.value);
    if (amount >= 1 && amount <= 100) {
      const timestamp = new Date().toLocaleString('ru-RU');
      this.props.onSubmit({ amount, timestamp });
      this.$inputDonate.value = '';
      this.$buttonDonate.disabled = true;
    }
  }
}