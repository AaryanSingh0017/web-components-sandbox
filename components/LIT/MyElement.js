import {LitElement, html} from 'lit';
import {customElement} from 'lit/decorators.js';

@customElement('my-element')
class MyElement extends LitElement {
  @property()
  message = 'Hello again.';
    
  render() {
    return html`
      <p>Hello world! From my-element.</p>
     `;
  }
}