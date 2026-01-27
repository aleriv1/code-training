import { Component } from '../core/Component';

export class ListItem extends Component {
  setup(props) {
    this.$rootElement = document.createElement('div');
    this.$rootElement.className = 'donate-item';

    const $itemText = document.createElement('div');
    $itemText.textContent = `${props.donate.timestamp} — $${props.donate.amount}`;
    this.$rootElement.appendChild($itemText);
  }
}