import { template } from './my-custom-button-template.js'

customElements.define('my-custom-button',
  /**
   * Extends the HTMLElement
   */
  class extends HTMLElement {
    #button
    #abortController
    
    /**
     * Creates an instance of the custom element and attaches a shadow DOM.
     */
    constructor () {
      super()
      this.attachShadow({ mode: 'open' })
      this.shadowRoot.appendChild(template.content.cloneNode(true))

      this.#button = this.shadowRoot.querySelector('button')
      this.#abortController = new AbortController()
    }
    
    /**
     * Called when the element is connected to the DOM.
     */
    connectedCallback () {
      this.#button.addEventListener('click', async (event) => {
        event.preventDefault()

        const number = await this.#fetchNumber()

        this.#sendCustomEvent(number)
      },
    { signal: this.#abortController.signal })
    }
    
    /**
     * Called when the element is disconnected from the DOM.
     */
    disconnectedCallback () {
      this.#abortController.abort()
    }

    /**
     * Fetch to random.org to get a random number.
     * After we fetch we need to check if the response if bad. If so Throw an error.
     * Translate the response from json to js.
     * 
     * @returns The number that beeing fetched.
     */
    async #fetchNumber () {
      // Implement me!
    }

    /**
     * Dispatches a new Custom Event.
     * We want to send the number using details.
     * 
     * @param {number} number The number we Fetched.
     */
    #sendCustomEvent(number) {
      // Implement me!
    }
  })