import { html, css, LitElement } from 'lit'
import { property, customElement } from 'lit/decorators.js'
// import styles from './price.styles.scss'

@customElement('price-component')
export class PriceComponent extends LitElement {
  // static get styles() {
  //   return styles
  // }

  @property() price: number = 0
  @property() badge: string = 'only'

  constructor() {
    super()
  }

  render() {
    return html`
      <div class="price-container">
        <label>${this.badge}</label>
        <div class="price-box">
          <div class="price">
            £${this.price}
          </div>
        </div>
      </div>
    `
  }
}
