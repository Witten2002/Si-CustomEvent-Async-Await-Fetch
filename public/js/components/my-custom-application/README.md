# My Custom Application
``my-custom-application`` är en anpassad web komponent som kombinerar my-custom-button och ``my-custom-title`` för att skapa en interaktiv applikation. När användaren klickar på knappen, hämtas ett slumpmässigt nummer, och detta nummer visas som en titel.

## Funktioner
- Använder Shadow DOM för kapsling av logik och stil.
- Integrerar andra custom elements: my-custom-button och my-custom-title.
- Hämtar ett slumpmässigt nummer och visar det som en dynamisk titel.

## Installation
För att använda my-custom-application, inkludera skriptet i ditt projekt:

```javascript
import './my-custom-application.js'
```
Säkerställ att relaterade beroenden (``my-custom-button`` och`` my-custom-title``) och tillhörande mallfiler finns i ditt projekt.

## Användning
Lägg till komponenten i din HTML:

```html
<my-custom-application></my-custom-application>
```
Komponenten är nu redo att användas. Vid klick på knappen uppdateras titeln automatiskt.

## Struktur
``my-custom-application`` består av två interna komponenter:

1. ``my-custom-button``: Används för att hämta ett slumpmässigt nummer.
2. ``my-custom-title``: Visar det hämtade numret som en titel.

## Exempel
```html
<my-custom-application></my-custom-application>
```
När användaren klickar på knappen i komponenten, hämtas ett nummer och visas som titeln.

## API
### Events
- ``my-custom-button::gotNumber``
Hanteras internt av komponenten. När detta event triggas, uppdateras ``title``-attributet för ``my-custom-title`` med det hämtade numret.

### Livscykelhändelser
- ``connectedCallback``
Registrerar event-lyssnare för ``my-custom-button``.

- ``disconnectedCallback``
Rensar event-lyssnare genom att avbryta ``AbortController``.

## Utveckling
### Filstruktur
- ``my-custom-application.js``: Huvudfilen för applikationskomponenten.
- ``my-custom-application-template.js``: Innehåller mallen för komponenten.
- ``my-custom-button``: Modul för knappen som hämtar slumpmässiga nummer.
- ``my-custom-title``: Modul för att visa en dynamisk titel.

### Exempelmall (my-custom-application-template.js)
Komponentens mall kan innehålla följande:

```javascript
export const template = document.createElement('template');
template.innerHTML = `
  <style>
    :host {
      display: block;
      font-family: Arial, sans-serif;
    }
  </style>
  <my-custom-title title="Default Title"></my-custom-title>
  <my-custom-button></my-custom-button>
`
```

## Kompatibilitet
Denna komponent fungerar i moderna webbläsare som stödjer Shadow DOM och Custom Elements.