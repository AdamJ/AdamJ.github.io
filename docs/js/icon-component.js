// Code created using prompts in Claude
class IconComponent extends HTMLElement {
  static get observedAttributes() {
    return ['name', 'size', 'color'];
  }

  // Size mapping
  static sizes = {
    xs: '0.5rem',
    sm: '.75rem',
    md: '1rem',
    lg: '1.5rem',
    xl: '2rem'
  };

  // Color mapping
  static colors = {
    current: 'currentColor',
    primary: 'var(--sl-color-neutral-700)',
    secondary: 'var(--sl-color-neutral-500)',
    success: '#16a34a',
    danger: '#dc2626',
    warning: '#ca8a04'
  };

  // connectedCallback() {
  //   // Load Font Awesome if not already loaded
  //   if (!document.querySelector('#font-awesome-css')) {
  //     const link = document.createElement('link');
  //     link.id = 'font-awesome-css';
  //     link.rel = 'stylesheet';
  //     link.href = '/css/fontawesome.css';
  //     document.head.appendChild(link);
  //   }
  //   this.render();
  // }

  attributeChangedCallback() {
    this.render();
  }

  render() {
    const name = this.getAttribute('name') || 'star';
    const size = this.getAttribute('size') || 'md';
    const color = this.getAttribute('color') || 'current';
    const type = this.getAttribute('type') || 'sharp';
    const weight = this.getAttribute('weight') || 'regular';

    const fontSize = IconComponent.sizes[size];
    const iconColor = IconComponent.colors[color];

    this.innerHTML = '';  // Clear existing content

    // Set component styles
    // this.style.display = 'inline-block';
    this.style.width = fontSize;
    this.style.height = fontSize;
    this.style.color = iconColor;

    // Create the icon element
    const icon = document.createElement('i');
    icon.className = `fa-${type} fa-${weight} fa-${name}`;
    icon.style.fontSize = fontSize;
    icon.setAttribute('aria-hidden', 'true');

    this.appendChild(icon);
  }
}

// Register the custom element
customElements.define('fa-icon', IconComponent);
// <fa-icon type="brands" name="codepen" size="lg"></fa-icon>

// Icon Duo for fa-duotone icons
class IconDuo extends HTMLElement {
  static get observedAttributes() {
    return ['name', 'size', 'color'];
  }
  // Size mapping
  static sizes = {
    xs: '0.5rem',
    sm: '.75rem',
    md: '1rem',
    lg: '1.5rem',
    xl: '2rem'
  };
  // Color mapping
  static colors = {
    current: 'currentColor',
    primary: 'var(--sl-color-neutral-700)',
    secondary: 'var(--sl-color-neutral-500)',
    success: '#16a34a',
    danger: '#dc2626',
    warning: '#ca8a04'
  };
  attributeChangedCallback() {
    this.render();
  }

  render() {
    const name = this.getAttribute('name') || 'star';
    const size = this.getAttribute('size') || 'md';
    const color = this.getAttribute('color') || 'current';
    const weight = this.getAttribute('weight') || 'solid';

    const fontSize = IconComponent.sizes[size];
    const iconColor = IconComponent.colors[color];

    this.innerHTML = '';  // Clear existing content

    // Set component styles
    // this.style.display = 'inline-block';
    this.style.width = fontSize;
    this.style.height = fontSize;
    this.style.color = iconColor;

    // Create the icon element
    const icon = document.createElement('i');
    icon.className = `fa-sharp-duotone fa-${weight} fa-${name}`;
    icon.style.fontSize = fontSize;
    icon.setAttribute('aria-hidden', 'true');

    this.appendChild(icon);
  }
}

customElements.define('icon-duo', IconDuo);
// <icon-duo name="house" size="lg"></icon-duo>
// Add a custom color to the duotone icon by adding a style attribute with either --fa-primary-color or --fa-secondary-color
// <icon-duo name="house" size="lg" style="--fa-primary-color: var(--sl-color-orange-800); --fa-secondary-color: var(--sl-color-orange-100);></icon-duo>
