# Laboration: SI Custom Events & Async/Await
I denna laboration kommer du att arbeta med **CustomEvent** och **Async/Await** genom att göra ett API-anrop. Målet är att skapa en applikation som hanterar dataflöden mellan komponenter genom anpassade events.

## Kom Igång

1. Clona ner Övningsuppgiften.
```javascript
git clone LÄNK
```
2. installera alla node modules.
```javascript
npm i
```
3. Starta applikationen.
```javascript
npm run dev
```
4. Börja KODA!!!

## Förutsättningar
Du har tillgång till tre komponenter:

- ``my-custom-button``
- ``my-custom-title``
  - Denna komponent är färdig och ska inte ändras.
- ``my-custom-application``

## Uppgifter
### 1. ``my-custom-button``
Komplettera följande metoder:

#### ``#fetchNumber()``
- Gör ett API-anrop till:
``https://www.random.org/integers/?num=1&min=1&max=100&col=1&base=10&format=plain&rnd=new``
- Returnera det slumpmässiga numret som svar.

<details>
  <summary>Klicka för att visa koden</summary>

  ```javascript
  async #fetchNumber () {
    const response = await fetch('https://www.random.org/integers/?num=1&min=1&max=100&col=1&base=10&format=plain&rnd=new')

    if (!response.ok) {
      throw new Error('Failed to fetch')
    }

    const data = await response.json()

    return data
  }
  ```
</details>

#### ``#sendCustomEvent(number)``
- Skapa ett **CustomEvent** med följande egenskaper:
  - **Namn**: ``my-custom-button::gotNumber``
  - **Detalj:** Skicka med det hämtade numret som ett objekt i ``detail``.

<details>
  <summary>Klicka för att visa koden</summary>

  ```javascript
  #sendCustomEvent(number) {
    this.dispatchEvent(new CustomEvent('my-custom-button::gotNumber', {
      detail: { number }
    }))
  }
  ```
</details>

### 2. ``my-custom-application``
Komplettera ``connectedCallback`` så att komponenten lyssnar på custom eventet ``my-custom-button::gotNumber`` och utför följande:

- Uppdatera ``title``-attributet på ``my-custom-title`` med numret som skickas via eventet.

<details>
  <summary>Klicka för att visa koden</summary>

  ```javascript
  connectedCallback () {
    this.#button.addEventListener('my-custom-button::gotNumber', (event) => {
      this.#title.setAttribute('title', event.detail.number)
    },
    { signal: this.#abortController.signal }
    )
  }
  ```
</details>

## Övrigt
- Komponenten ``my-custom-title`` är komplett och ska inte modifieras.
- När du är klar ska applikationen fungera enligt följande:
  - Användaren klickar på knappen i ``my-custom-button``.
  - Ett slumpmässigt nummer hämtas via API-anropet i ``my-custom-button``.
  - Det hämtade numret skickas som ett custom event.
  - ``my-custom-application`` uppdaterar titeln i ``my-custom-title`` med numret.

## Lycka till!