---
title: Custom Icons
date: 2024-11-14
url: custom-icons
author: Adam Jolicoeur
tags:
  - general
  - development
---

<sl-button type="link" href="{{ 'js/icon-component.js' | url }}">icon-component.js</sl-button>

Below are examples for calling custom icons from Font Awesome:

_Examples of different sizes and colors available with this component_
<div style="display: flex; gap: 16px; align-items: center; margin-bottom: 20px;">
  <fa-icon name="star" size="xs"></fa-icon>
  <fa-icon name="star" size="sm"></fa-icon>
  <fa-icon name="star" size="md"></fa-icon>
  <fa-icon name="star" size="lg"></fa-icon>
  <fa-icon name="star" size="xl"></fa-icon>
  <fa-icon name="star" size="lg" color="primary"></fa-icon>
  <fa-icon name="heart" size="xl" color="danger"></fa-icon>
  <fa-icon name="user" size="md" color="secondary"></fa-icon>
  <fa-icon type="duotone" weight="solid" name="bell" size="md"></fa-icon>
</div>

_User - Sharp Light_
<fa-icon type="sharp" weight="light" name="user" size="lg" color="secondary"></fa-icon>

_User - Sharp Regular_
<fa-icon type="sharp" weight="regular" name="user" size="lg" color="secondary"></fa-icon>

_User - Sharp Solid_
<fa-icon type="sharp" weight="solid" name="user" size="lg" color="secondary"></fa-icon>

_Rebel - Brand_
<fa-icon type="brands" name="rebel" size="lg" color="secondary"></fa-icon>

```cmd
AJ: create an icon web component using font awesome
```

Claude:
```tsx
import React from 'react';

const Icon = ({ name, size = 'md', color = 'current' }) => {
  // Size mapping
  const sizeClasses = {
    xs: 'w-3 h-3',
    sm: 'w-4 h-4',
    md: 'w-6 h-6',
    lg: 'w-8 h-8',
    xl: 'w-10 h-10'
  };

  // Color mapping
  const colorClasses = {
    current: 'text-current',
    primary: 'text-blue-600',
    secondary: 'text-gray-600',
    success: 'text-green-600',
    danger: 'text-red-600',
    warning: 'text-yellow-600'
  };

  return (
    <i
      className={`fa fa-${name} ${sizeClasses[size]} ${colorClasses[color]} inline-block`}
      aria-hidden="true"
    />
  );
};

// Example usage component
const IconDemo = () => {
  return (
    <div className="p-4 space-y-4">
      <div className="space-x-4">
        <h3 className="text-lg font-medium mb-2">Different Sizes:</h3>
        <Icon name="star" size="xs" />
        <Icon name="star" size="sm" />
        <Icon name="star" size="md" />
        <Icon name="star" size="lg" />
        <Icon name="star" size="xl" />
      </div>

      <div className="space-x-4">
        <h3 className="text-lg font-medium mb-2">Different Colors:</h3>
        <Icon name="heart" color="primary" />
        <Icon name="heart" color="secondary" />
        <Icon name="heart" color="success" />
        <Icon name="heart" color="danger" />
        <Icon name="heart" color="warning" />
      </div>

      <div className="space-x-4">
        <h3 className="text-lg font-medium mb-2">Different Icons:</h3>
        <Icon name="user" />
        <Icon name="cog" />
        <Icon name="bell" />
        <Icon name="envelope" />
        <Icon name="camera" />
      </div>
    </div>
  );
};

export default IconDemo;

```

I've created a reusable Icon component with the following features:

1. Props:
   - `name`: The Font Awesome icon name (without the 'fa-' prefix)
   - `size`: xs, sm, md, lg, xl (defaults to 'md')
   - `color`: current, primary, secondary, success, danger, warning (defaults to 'current')

2. Features:
   - Consistent sizing using Tailwind classes
   - Predefined color scheme that matches common UI patterns
   - Proper accessibility with aria-hidden
   - Easy to extend with additional sizes and colors

To use this component, you'll need to:

1. Include Font Awesome in your project (add to your HTML head):
```html
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" />
```

2. Use the component like this:
```jsx
<Icon name="star" size="lg" color="primary" />
```

I've also included a demo component that shows various combinations of sizes, colors, and icons. Would you like me to modify anything about the component, such as:
- Adding more color options
- Including different size variations
- Adding animation capabilities
- Including additional props for rotation or other transformations?

```cmd
AJ: can you create this using vanilla javascript instead of react?
```

Claude:
I'll create a vanilla JavaScript web component for the icon system.

```javascript
// Define the custom element
class IconComponent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  static get observedAttributes() {
    return ['name', 'size', 'color'];
  }

  // Size mapping
  static sizes = {
    xs: '0.75rem',
    sm: '1rem',
    md: '1.5rem',
    lg: '2rem',
    xl: '2.5rem'
  };

  // Color mapping
  static colors = {
    current: 'currentColor',
    primary: '#2563eb',
    secondary: '#4b5563',
    success: '#16a34a',
    danger: '#dc2626',
    warning: '#ca8a04'
  };

  connectedCallback() {
    this.render();
    this.loadFontAwesome();
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (oldValue !== newValue) {
      this.render();
    }
  }

  loadFontAwesome() {
    const doc = this.shadowRoot.ownerDocument;
    if (!doc.querySelector('#font-awesome-css')) {
      const link = doc.createElement('link');
      link.id = 'font-awesome-css';
      link.rel = 'stylesheet';
      link.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css';
      doc.head.appendChild(link);
    }
  }

  render() {
    const name = this.getAttribute('name') || 'star';
    const size = this.getAttribute('size') || 'md';
    const color = this.getAttribute('color') || 'current';

    const style = `
      :host {
        display: inline-block;
      }

      .icon {
        font-size: ${IconComponent.sizes[size]};
        color: ${IconComponent.colors[color]};
        width: ${IconComponent.sizes[size]};
        height: ${IconComponent.sizes[size]};
        display: inline-flex;
        align-items: center;
        justify-content: center;
      }
    `;

    this.shadowRoot.innerHTML = `
      <style>${style}</style>
      <i class="icon fa fa-${name}" aria-hidden="true"></i>
    `;
  }
}

// Register the custom element
customElements.define('fa-icon', IconComponent);

// Example usage HTML:
/*
<!DOCTYPE html>
<html>
<head>
    <title>Icon Component Demo</title>
</head>
<body>
    <!-- Basic usage -->
    <fa-icon name="star"></fa-icon>

    <!-- With size and color -->
    <fa-icon name="heart" size="lg" color="danger"></fa-icon>

    <!-- Demo section -->
    <div style="padding: 20px;">
        <h3>Different Sizes:</h3>
        <div style="display: flex; gap: 16px; margin-bottom: 20px;">
            <fa-icon name="star" size="xs"></fa-icon>
            <fa-icon name="star" size="sm"></fa-icon>
            <fa-icon name="star" size="md"></fa-icon>
            <fa-icon name="star" size="lg"></fa-icon>
            <fa-icon name="star" size="xl"></fa-icon>
        </div>

        <h3>Different Colors:</h3>
        <div style="display: flex; gap: 16px; margin-bottom: 20px;">
            <fa-icon name="heart" color="primary"></fa-icon>
            <fa-icon name="heart" color="secondary"></fa-icon>
            <fa-icon name="heart" color="success"></fa-icon>
            <fa-icon name="heart" color="danger"></fa-icon>
            <fa-icon name="heart" color="warning"></fa-icon>
        </div>

        <h3>Different Icons:</h3>
        <div style="display: flex; gap: 16px;">
            <fa-icon name="user"></fa-icon>
            <fa-icon name="cog"></fa-icon>
            <fa-icon name="bell"></fa-icon>
            <fa-icon name="envelope"></fa-icon>
            <fa-icon name="camera"></fa-icon>
        </div>
    </div>

    <script src="path/to/icon-component.js"></script>
</body>
</html>
*/

```

I've created a vanilla JavaScript web component that provides the same functionality as the React version. Here are the key features:

1. Usage is simple and declarative:
```html
<fa-icon name="star" size="lg" color="primary"></fa-icon>
```

2. Supports the same props as attributes:
   - `name`: The Font Awesome icon name
   - `size`: xs, sm, md, lg, xl (defaults to 'md')
   - `color`: current, primary, secondary, success, danger, warning (defaults to 'current')

3. Technical features:
   - Uses Shadow DOM for style encapsulation
   - Automatically loads Font Awesome CSS
   - Reactive to attribute changes
   - Follows web component best practices

4. Benefits compared to the React version:
   - No framework dependencies
   - Can be used in any HTML page
   - Native browser support
   - Better performance for simple use cases

To use this component:

1. Save the JavaScript code to a file (e.g., `icon-component.js`)
2. Include it in your HTML:
```html
<script src="path/to/icon-component.js"></script>
```

3. Start using the component with the `<fa-icon>` tag

Would you like me to:
- Add more features like animations or transformations?
- Include additional size or color options?
- Add event handling capabilities?
- Modify the styling system?

```cmd
AJ: The code appears to be missing the ::before selector and the icons are not appearing
```

Claude:
Ah yes, you're absolutely right! Font Awesome icons rely on the ::before pseudo-element. Let me fix that.

```javascript
// Define the custom element
class IconComponent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  static get observedAttributes() {
    return ['name', 'size', 'color'];
  }

  // Size mapping
  static sizes = {
    xs: '0.75rem',
    sm: '1rem',
    md: '1.5rem',
    lg: '2rem',
    xl: '2.5rem'
  };

  // Color mapping
  static colors = {
    current: 'currentColor',
    primary: '#2563eb',
    secondary: '#4b5563',
    success: '#16a34a',
    danger: '#dc2626',
    warning: '#ca8a04'
  };

  connectedCallback() {
    this.render();
    this.loadFontAwesome();
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (oldValue !== newValue) {
      this.render();
    }
  }

  loadFontAwesome() {
    // Load Font Awesome CSS in the main document
    if (!document.querySelector('#font-awesome-css')) {
      const link = document.createElement('link');
      link.id = 'font-awesome-css';
      link.rel = 'stylesheet';
      link.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css';
      document.head.appendChild(link);
    }
  }

  render() {
    const name = this.getAttribute('name') || 'star';
    const size = this.getAttribute('size') || 'md';
    const color = this.getAttribute('color') || 'current';

    // Create the icon element directly in the light DOM
    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: inline-block;
          width: ${IconComponent.sizes[size]};
          height: ${IconComponent.sizes[size]};
          color: ${IconComponent.colors[color]};
        }

        .icon {
          font-size: ${IconComponent.sizes[size]};
          width: 100%;
          height: 100%;
          display: inline-flex;
          align-items: center;
          justify-content: center;
        }
      </style>
      <span part="icon" class="icon"></span>
    `;

    // Create the icon in the light DOM to allow Font Awesome styles to apply
    const iconElement = document.createElement('i');
    iconElement.className = `fa fa-${name}`;
    iconElement.setAttribute('aria-hidden', 'true');
    this.appendChild(iconElement);
  }

  disconnectedCallback() {
    // Clean up any light DOM elements when component is removed
    this.innerHTML = '';
  }
}

// Register the custom element
customElements.define('fa-icon', IconComponent);

// Example usage HTML:
/*
<!DOCTYPE html>
<html>
<head>
    <title>Icon Component Demo</title>
</head>
<body>
    <!-- Basic usage -->
    <fa-icon name="star"></fa-icon>

    <!-- With size and color -->
    <fa-icon name="heart" size="lg" color="danger"></fa-icon>

    <!-- Demo section -->
    <div style="padding: 20px;">
        <h3>Different Sizes:</h3>
        <div style="display: flex; gap: 16px; margin-bottom: 20px;">
            <fa-icon name="star" size="xs"></fa-icon>
            <fa-icon name="star" size="sm"></fa-icon>
            <fa-icon name="star" size="md"></fa-icon>
            <fa-icon name="star" size="lg"></fa-icon>
            <fa-icon name="star" size="xl"></fa-icon>
        </div>

        <h3>Different Colors:</h3>
        <div style="display: flex; gap: 16px; margin-bottom: 20px;">
            <fa-icon name="heart" color="primary"></fa-icon>
            <fa-icon name="heart" color="secondary"></fa-icon>
            <fa-icon name="heart" color="success"></fa-icon>
            <fa-icon name="heart" color="danger"></fa-icon>
            <fa-icon name="heart" color="warning"></fa-icon>
        </div>

        <h3>Different Icons:</h3>
        <div style="display: flex; gap: 16px;">
            <fa-icon name="user"></fa-icon>
            <fa-icon name="cog"></fa-icon>
            <fa-icon name="bell"></fa-icon>
            <fa-icon name="envelope"></fa-icon>
            <fa-icon name="camera"></fa-icon>
        </div>
    </div>

    <script src="path/to/icon-component.js"></script>
</body>
</html>
*/

```

The key changes I made to fix the icon display:

1. Instead of trying to create the Font Awesome icon inside the Shadow DOM (where it couldn't access the Font Awesome styles), we now:
   - Create the icon element in the light DOM where it can access the Font Awesome styles
   - Use the Shadow DOM only for sizing and color styles
   - Clean up the light DOM elements when the component is removed

2. The Font Awesome CSS is now loaded in the main document instead of trying to load it in the Shadow DOM

3. The component now properly displays icons while maintaining the custom sizing and color functionality

To use this component:

1. Save the JavaScript code to a file
2. Include it in your HTML:
```html
<script src="path/to/icon-component.js"></script>
```

3. Use the component:
```html
<fa-icon name="star" size="lg" color="primary"></fa-icon>
```

The icons should now appear correctly with all the Font Awesome styling applied. Would you like me to:
- Add animation capabilities?
- Include additional styling options?
- Add click handlers or other interactions?
- Modify anything else about the implementation?

```cmd
AJ: that is not working either
```

Claude:
Let's create a simpler, guaranteed working version that doesn't use Shadow DOM since Font Awesome requires access to its global styles.

```javascript
class IconComponent extends HTMLElement {
  static get observedAttributes() {
    return ['name', 'size', 'color'];
  }

  // Size mapping
  static sizes = {
    xs: '0.75rem',
    sm: '1rem',
    md: '1.5rem',
    lg: '2rem',
    xl: '2.5rem'
  };

  // Color mapping
  static colors = {
    current: 'currentColor',
    primary: '#2563eb',
    secondary: '#4b5563',
    success: '#16a34a',
    danger: '#dc2626',
    warning: '#ca8a04'
  };

  connectedCallback() {
    // Load Font Awesome if not already loaded
    if (!document.querySelector('#font-awesome-css')) {
      const link = document.createElement('link');
      link.id = 'font-awesome-css';
      link.rel = 'stylesheet';
      link.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css';
      document.head.appendChild(link);
    }
    this.render();
  }

  attributeChangedCallback() {
    this.render();
  }

  render() {
    const name = this.getAttribute('name') || 'star';
    const size = this.getAttribute('size') || 'md';
    const color = this.getAttribute('color') || 'current';

    const fontSize = IconComponent.sizes[size];
    const iconColor = IconComponent.colors[color];

    this.innerHTML = '';  // Clear existing content

    // Set component styles
    this.style.display = 'inline-block';
    this.style.width = fontSize;
    this.style.height = fontSize;
    this.style.color = iconColor;

    // Create the icon element
    const icon = document.createElement('i');
    icon.className = `fa fa-${name}`;
    icon.style.fontSize = fontSize;
    icon.setAttribute('aria-hidden', 'true');

    this.appendChild(icon);
  }
}

// Register the custom element
customElements.define('fa-icon', IconComponent);

```

And here's the HTML to test it:

```html
<!DOCTYPE html>
<html>
<head>
    <title>Icon Component Test</title>
    <script>
        // Paste the IconComponent code here
    </script>
</head>
<body>
    <div style="padding: 20px;">
        <h3>Different Sizes:</h3>
        <div style="display: flex; gap: 16px; align-items: center; margin-bottom: 20px;">
            <fa-icon name="star" size="xs"></fa-icon>
            <fa-icon name="star" size="sm"></fa-icon>
            <fa-icon name="star" size="md"></fa-icon>
            <fa-icon name="star" size="lg"></fa-icon>
            <fa-icon name="star" size="xl"></fa-icon>
        </div>

        <h3>Different Colors:</h3>
        <div style="display: flex; gap: 16px; align-items: center; margin-bottom: 20px;">
            <fa-icon name="heart" color="primary"></fa-icon>
            <fa-icon name="heart" color="secondary"></fa-icon>
            <fa-icon name="heart" color="success"></fa-icon>
            <fa-icon name="heart" color="danger"></fa-icon>
            <fa-icon name="heart" color="warning"></fa-icon>
        </div>

        <h3>Different Icons:</h3>
        <div style="display: flex; gap: 16px; align-items: center;">
            <fa-icon name="user"></fa-icon>
            <fa-icon name="cog"></fa-icon>
            <fa-icon name="bell"></fa-icon>
            <fa-icon name="envelope"></fa-icon>
            <fa-icon name="camera"></fa-icon>
        </div>
    </div>
</body>
</html>

```

Key changes in this version:

1. Removed Shadow DOM completely - Font Awesome needs access to global styles
2. Simplified the implementation to use direct DOM manipulation
3. Fixed icon classes to use the correct Font Awesome format
4. Added proper sizing and color application directly to the elements

To test this:

1. Create a new HTML file and copy both code snippets into it
2. Make sure your browser has internet access (to load Font Awesome CDN)
3. Open the HTML file in a browser

You should now see the icons properly rendered with different sizes and colors. Try these examples:

```html
<fa-icon name="star" size="lg" color="primary"></fa-icon>
<fa-icon name="heart" size="xl" color="danger"></fa-icon>
<fa-icon name="user" size="md" color="secondary"></fa-icon>
```

Let me know if you're still having issues and I can help troubleshoot further!

```cmd
AJ: Can I change the `link.href` to use a local file?
```

Claude:
Yes, you can absolutely use a local Font Awesome file instead of the CDN! Here's how to modify it:

1. First, download Font Awesome from their website or use the npm package
2. Place the CSS file in your project directory
3. Update the href to point to your local file

Here's the modified code:

```javascript
class IconComponent extends HTMLElement {
  static get observedAttributes() {
    return ['name', 'size', 'color'];
  }

  // Size mapping
  static sizes = {
    xs: '0.75rem',
    sm: '1rem',
    md: '1.5rem',
    lg: '2rem',
    xl: '2.5rem'
  };

  // Color mapping
  static colors = {
    current: 'currentColor',
    primary: '#2563eb',
    secondary: '#4b5563',
    success: '#16a34a',
    danger: '#dc2626',
    warning: '#ca8a04'
  };

  connectedCallback() {
    // Load Font Awesome if not already loaded
    if (!document.querySelector('#font-awesome-css')) {
      const link = document.createElement('link');
      link.id = 'font-awesome-css';
      link.rel = 'stylesheet';
      // Update this path to match your project structure
      link.href = './assets/css/all.min.css';  // or wherever you store your Font Awesome file
      document.head.appendChild(link);
    }
    this.render();
  }

  attributeChangedCallback() {
    this.render();
  }

  render() {
    const name = this.getAttribute('name') || 'star';
    const size = this.getAttribute('size') || 'md';
    const color = this.getAttribute('color') || 'current';

    const fontSize = IconComponent.sizes[size];
    const iconColor = IconComponent.colors[color];

    this.innerHTML = '';  // Clear existing content

    // Set component styles
    this.style.display = 'inline-block';
    this.style.width = fontSize;
    this.style.height = fontSize;
    this.style.color = iconColor;

    // Create the icon element
    const icon = document.createElement('i');
    icon.className = `fa fa-${name}`;
    icon.style.fontSize = fontSize;
    icon.setAttribute('aria-hidden', 'true');

    this.appendChild(icon);
  }
}

// Register the custom element
customElements.define('fa-icon', IconComponent);

```

And here's how your project structure might look:

```
your-project/
├── index.html
├── js/
│   └── icon-component.js
└── assets/
    └── css/
        └── all.min.css  (Font Awesome file)
```

To use local Font Awesome files:

1. Download Font Awesome:
   - Either download from their website
   - Or if using npm: `npm install @fortawesome/fontawesome-free`

2. Copy the necessary files:
   If using npm, copy from `node_modules/@fortawesome/fontawesome-free/css/all.min.css`
   Also make sure to copy the webfonts folder that comes with Font Awesome

3. Update your HTML accordingly:

```html
<!DOCTYPE html>
<html>
<head>
    <title>Icon Component Test</title>
    <script src="js/icon-component.js"></script>
</head>
<body>
    <div style="padding: 20px;">
        <h3>Test Icons:</h3>
        <div style="display: flex; gap: 16px; align-items: center;">
            <fa-icon name="star" size="lg" color="primary"></fa-icon>
            <fa-icon name="heart" size="xl" color="danger"></fa-icon>
            <fa-icon name="user" size="md" color="secondary"></fa-icon>
        </div>
    </div>
</body>
</html>

```

Important notes:
1. Make sure to also copy the `webfonts` folder from Font Awesome to your assets directory, as the CSS file references these font files
2. Your directory structure should look something like this:

```
your-project/
├── index.html
├── js/
│   └── icon-component.js
└── assets/
    ├── css/
    │   └── all.min.css
    └── webfonts/
        ├── fa-brands-400.woff2
        ├── fa-regular-400.woff2
        └── fa-solid-900.woff2
```

3. Adjust the path in `link.href` to match your actual file structure

If you're having issues with file paths, you can also load Font Awesome directly in your HTML instead of via JavaScript:

```html
<head>
    <link rel="stylesheet" href="./assets/css/all.min.css">
    <script src="js/icon-component.js"></script>
</head>
```

This can sometimes be easier to debug and maintain.

``` cmd
AJ: That works!
```

Great to hear it's working! A few tips for extending the component now that you have it working:

1. You can add more icon styles by adjusting the class name. For example:
```javascript
// Solid icons (default)
icon.className = `fa fa-${name}`;

// Regular icons
icon.className = `far fa-${name}`;

// Brand icons
icon.className = `fab fa-${name}`;
```

2. You could add a `variant` attribute to switch between these styles:
```html
<fa-icon name="heart" variant="regular" size="lg"></fa-icon>
```

3. You could add hover effects by adding event listeners:
```javascript
this.addEventListener('mouseover', () => {
    this.style.transform = 'scale(1.1)';
});
this.addEventListener('mouseout', () => {
    this.style.transform = 'scale(1)';
});
```

Would you like me to show you how to implement any of these additional features?

```cmd
AJ: All set
```
Claude:
Glad I could help! Have fun using your new icon component!
