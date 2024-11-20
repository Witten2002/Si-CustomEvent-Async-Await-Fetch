# My Custom Title

``my-custom-title`` is a lightweight Web Component that provides a customizable title element. This component extends ``HTMLElement`` and allows you to dynamically update the content of a title ``(<h1>)`` using an attribute.

### Features
- Encapsulated styles and logic using Shadow DOM.
- Dynamically updates the title text when the title attribute is changed.
- Easy to integrate into any web project.

### Installation
To use ``my-custom-title``, include the component script in your project:

```javascript
import './my-custom-title.js'
```
Ensure that the corresponding template file ``my-custom-title-template.js`` is in the same directory or adjust the path accordingly.

### Usage
Add the ``my-custom-title`` custom element to your HTML:

```html
<my-custom-title title="Hello, World!"></my-custom-title>
```

### Dynamic Updates
You can dynamically update the title by changing the ``title`` attribute:

```javascript
const titleElement = document.querySelector('my-custom-title')
titleElement.setAttribute('title', 'Updated Title')
```
The content of the ``<h1>`` inside the component will automatically update.

### API
#### Observed Attributes
The component observes the following attribute:

- title: The text to display in the ``<h1>`` element.

#### Methods
- ``attributeChangedCallback(name, oldValue, newValue)``
Called when the ``title`` attribute is modified. Automatically updates the ``<h1>`` content.

### Development
The component uses the Shadow DOM to encapsulate styles and DOM structure. Ensure your project supports ES modules and modern JavaScript.

#### File Structure
- ``my-custom-title.js``: Contains the definition of the ``my-custom-title`` component.
- ``my-custom-title-template.js``: Contains the template for the component.

#### Example Template (my-custom-title-template.js)
Ensure the ``template`` includes an ``<h1>`` element as the component uses this to update the title.

```javascript
export const template = document.createElement('template');
template.innerHTML = `
  <style>
    h1 {
      font-size: 2em;
      color: #333;
    }
  </style>
  <h1>Default Title</h1>
`
```
### Compatibility
This component works with all modern browsers that support the Shadow DOM and Custom Elements.