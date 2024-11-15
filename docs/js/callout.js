class CalloutComponent extends HTMLElement {
  static get observedAttributes() {
    return ['name', 'size', 'border'];
  }

  // Size mapping
  static width = {
    md: '250px',
    lg: '500px',
    xl: '1000px'
  };

  static height = {
    auto: 'auto',
    md: '125px',
    lg: '250px',
    xl: '500px'
  };

  // Color mapping
  static borderColor = {
    primary: 'var(--sl-color-neutral-700)',
    secondary: 'var(--sl-color-neutral-500)'
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
    const name = this.getAttribute('name') || 'default';
    const width = this.getAttribute('width') || 'md';
    const height = this.getAttribute('height') || 'auto';
    const border = this.getAttribute('border-color') || 'primary';

    const calloutWidth = CalloutComponent.sizes[width];
    const calloutHeight = CalloutComponent.sizes[height];
    const borderColor = CalloutComponent.colors[border];

    this.innerHTML = '';  // Clear existing content

    // Set component styles
    // this.style.display = 'inline-block';
    this.style.width = calloutWidth;
    this.style.height = calloutHeight;
    this.style.color = borderColor;

    // Create the icon element
    const callout = document.createElement('callout');
    // callout.className = `fa-${type} fa-${weight} fa-${name}`;
    callout.className = `callout-${name} border-color-${border} width-${calloutWidth} height-${calloutHeight}`;
    callout.style.calloutWidth = calloutWidth;
    callout.style.calloutHeight = calloutHeight;
    // icon.setAttribute('aria-hidden', 'true');

    this.appendChild(callout);
  }
}

// Register the custom element
customElements.define('callout-box', CalloutComponent);
