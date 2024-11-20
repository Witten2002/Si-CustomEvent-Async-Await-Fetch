import { template } from './my-custom-application-template.js'
import '../my-custom-button/index.js'
import '../my-custom-title/index.js'

customElements.define('my-custom-application',
  /**
   * Extends the HTMLElement
   */
  class extends HTMLElement {
    #button
    #title
    #abortController
    
    /**
     * Creates an instance of the custom element and attaches a shadow DOM.
     */
    constructor () {
      super()
      this.attachShadow({ mode: 'open' })
      this.shadowRoot.appendChild(template.content.cloneNode(true))

      this.#button = this.shadowRoot.querySelector('my-custom-button')
      this.#title = this.shadowRoot.querySelector('my-custom-title')

      this.#abortController = new AbortController()
    }
    
    /**
     * Called when the element is connected to the DOM.
     */
    connectedCallback () {
      // Listen to the custom event sent by the my-custom-button.
      // set the number to the my-custom-title.
      this.#button.addEventListener('', (event) => {
      },
      { signal: this.#abortController.signal }
      )
    }
    
    /**
     * Called when the element is disconnected from the DOM.
     */
    disconnectedCallback () {
      this.#abortController.abort()
    }
  })