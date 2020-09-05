import { html, LitElement } from 'lit-element';
import { Service } from './app.service.js';
import { style } from './app.style.js';

class AsApp extends LitElement {
  constructor() {
    super();
    this.num1 = 0;
    this.num2 = 0;
    this.sum = 0;
  }

  static get properties() {
    return {
      num1: {type: Number},
      num2: {type: Number},
      sum: {type: Number}
    }
  }

  static get styles() {
    return [style];
  }

  render() {
    return html`
      <h1>Calculate with AssemblyScript!</h1>
      <button type="button" @click="${this.addRandomNumbers}">Add Random Numbers</button>
      <p>${this.num1} + ${this.num2} = ${this.sum}</p>
    `;
  }

  addRandomNumbers() {
    this.num1 = Math.floor(Math.random() * 100);
    this.num2 = Math.floor(Math.random() * 100);
    this.sum = Service.doAdd(this.num1, this.num2);
  }
}

customElements.define('as-app', AsApp);
