import { template } from './my-custom-title-template.js'

customElements.define('my-custom-title',
  /**
   * Extends the HTMLElement
   */
  class extends HTMLElement {
    #h1
    
    /**
     * Creates an instance of the custom element and attaches a shadow DOM.
     */
    constructor () {
      super()
      this.attachShadow({ mode: 'open' })
      this.shadowRoot.appendChild(template.content.cloneNode(true))

      this.#h1 = this.shadowRoot.querySelector('h1')
    }
    
    /**
     * Returns an array of attributes to be observed for changes.
     *
     * @returns {string[]} The list of attributes to be observed.
     */
    static get observedAttributes () {
      return ['title']
    }
    
    /**
     * Called when one of the observed attributes changes.
     *
     * @param {string} name The name of the attribute that changed.
     * @param {string} oldValue The old value of the attribute.
     * @param {string} newValue The new value of the attribute.
     */
    attributeChangedCallback (name, oldValue, newValue) {
      if (name === 'title' && oldValue !== newValue) {
        this.#h1.textContent = newValue
      }
    }
  })
