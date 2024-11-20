# My Custom Button
``my-custom-button`` är en anpassad web komponent som tillhandahåller en dynamisk knapp. Vid klick hämtar den ett slumpmässigt nummer från en API och skickar ut detta via ett custom event.

## Funktioner
- Använder Shadow DOM för kapsling av stil och logik.
- Klicka på knappen för att hämta ett slumpmässigt nummer från en API.
- Skickar ut ett custom event med det hämtade numret.
- Automatisk hantering av event-lyssnare vid anslutning och borttagning från DOM.

## Installation
För att använda ``my-custom-button``, importera skriptet i ditt projekt:

```javascript
import './my-custom-button.js'
```

Säkerställ att den tillhörande mallen ``my-custom-button-template.js`` finns i samma katalog eller uppdatera sökvägen.

## Användning
Lägg till komponenten i din HTML:

```html
<my-custom-button></my-custom-button>
```

## Lyssna på Custom Event
Komponenten skickar ett custom event när ett nummer hämtats. Du kan hantera detta event på följande sätt:

```javascript
const buttonElement = document.querySelector('my-custom-button')
buttonElement.addEventListener('my-custom-button::gotNumber', (event) => {
  console.log('Received number:', event.detail.number)
})
```

## API
### Events
- ``my-custom-button::gotNumber``
Detta event utlöses efter att ett slumpmässigt nummer har hämtats.
#### Detaljer:
- number: Numret som hämtades.

### Metoder (Privata)
- ``#fetchNumber()``
Hämtar ett slumpmässigt nummer från API
`https://www.random.org/integers/?num=1&min=1&max=100&col=1&base=10&format=plain&rnd=new`.

- ``#sendCustomEvent(number)``
Skapar och skickar ett custom event med det hämtade numret.

## Livscykelhändelser
- ``connectedCallback:``
Lägger till en klick-lyssnare för knappen när elementet ansluts till DOM.

- ``disconnectedCallback``:
Rensar event-lyssnaren när elementet tas bort från DOM.

## Utveckling
### Filstruktur
- ``my-custom-button.js``: Innehåller definitionen av komponenten.
- ``my-custom-button-template.js``: Innehåller mallen för komponenten.

### Exempelmall (``my-custom-button-template.js``)
Mallen bör inkludera en ``<button>``-tagg som komponenten använder:

```javascript
export const template = document.createElement('template');
template.innerHTML = `
  <style>
    button {
      font-size: 1em;
      padding: 10px 20px;
      cursor: pointer;
    }
  </style>
  <button>Click me</button>
`
```
## Kompatibilitet
Komponenten fungerar i moderna webbläsare som stödjer Shadow DOM och Custom Elements.