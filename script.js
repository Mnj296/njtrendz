// HTML5 Elements and Attributes Data
const htmlData = {
  elements: [
    '!DOCTYPE', 'a', 'abbr', 'address', 'area', 'article', 'aside', 'audio', 'b', 
    'base', 'bdi', 'bdo', 'blockquote', 'body', 'br', 'button', 'canvas', 'caption', 
    'cite', 'code', 'col', 'colgroup', 'data', 'datalist', 'dd', 'del', 'details', 
    'dfn', 'dialog', 'div', 'dl', 'dt', 'em', 'embed', 'fieldset', 'figcaption', 
    'figure', 'footer', 'form', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'head', 'header', 
    'hr', 'html', 'i', 'iframe', 'img', 'input', 'ins', 'kbd', 'label', 'legend', 
    'li', 'link', 'main', 'map', 'mark', 'meta', 'meter', 'nav', 'noscript', 'object', 
    'ol', 'optgroup', 'option', 'output', 'p', 'param', 'picture', 'pre', 'progress', 
    'q', 'rp', 'rt', 'ruby', 's', 'samp', 'script', 'section', 'select', 'small', 
    'source', 'span', 'strong', 'style', 'sub', 'summary', 'sup', 'table', 'tbody', 
    'td', 'template', 'textarea', 'tfoot', 'th', 'thead', 'time', 'title', 'tr', 
    'track', 'u', 'ul', 'var', 'video', 'wbr'
  ],
  attributes: {
    global: [
      'accesskey', 'class', 'contenteditable', 'contextmenu', 'data-*', 'dir', 
      'draggable', 'dropzone', 'hidden', 'id', 'lang', 'spellcheck', 'style', 
      'tabindex', 'title', 'translate'
    ],
    specific: {
      'a': ['href', 'target', 'download', 'rel', 'hreflang', 'type'],
      'img': ['src', 'alt', 'width', 'height', 'crossorigin', 'ismap', 'usemap'],
      'form': ['accept-charset', 'action', 'autocomplete', 'enctype', 'method', 'name', 'novalidate', 'target'],
      'input': ['accept', 'alt', 'autocomplete', 'autofocus', 'checked', 'dirname', 'disabled', 'form', 'formaction', 'formenctype', 'formmethod', 'formnovalidate', 'formtarget', 'height', 'list', 'max', 'maxlength', 'min', 'multiple', 'name', 'pattern', 'placeholder', 'readonly', 'required', 'size', 'src', 'step', 'type', 'value', 'width'],
      'link': ['href', 'crossorigin', 'rel', 'rev', 'media', 'hreflang', 'type', 'sizes'],
      'meta': ['name', 'http-equiv', 'content', 'charset'],
      'script': ['src', 'type', 'charset', 'async', 'defer', 'crossorigin'],
      'style': ['media', 'type', 'scoped'],
      'video': ['src', 'crossorigin', 'poster', 'preload', 'autoplay', 'playsinline', 'loop', 'muted', 'controls', 'width', 'height'],
      'audio': ['src', 'crossorigin', 'preload', 'autoplay', 'loop', 'muted', 'controls'],
      'iframe': ['src', 'srcdoc', 'name', 'sandbox', 'seamless', 'allowfullscreen', 'width', 'height'],
      'canvas': ['width', 'height'],
      'source': ['src', 'type', 'media'],
      'track': ['kind', 'src', 'srclang', 'label', 'default'],
      'area': ['alt', 'coords', 'shape', 'target', 'download', 'rel', 'hreflang', 'type'],
      'base': ['href', 'target'],
      'col': ['span'],
      'colgroup': ['span'],
      'data': ['value'],
      'del': ['cite', 'datetime'],
      'details': ['open'],
      'dialog': ['open'],
      'embed': ['src', 'type', 'width', 'height'],
      'fieldset': ['disabled', 'form', 'name'],
      'ins': ['cite', 'datetime'],
      'li': ['value'],
      'map': ['name'],
      'meter': ['value', 'min', 'max', 'low', 'high', 'optimum'],
      'object': ['data', 'type', 'name', 'usemap', 'form', 'width', 'height'],
      'ol': ['reversed', 'start', 'type'],
      'optgroup': ['disabled', 'label'],
      'option': ['disabled', 'label', 'selected', 'value'],
      'output': ['for', 'form', 'name'],
      'param': ['name', 'value'],
      'progress': ['value', 'max'],
      'q': ['cite'],
      'select': ['autofocus', 'disabled', 'form', 'multiple', 'name', 'required', 'size'],
      'textarea': ['autofocus', 'cols', 'dirname', 'disabled', 'form', 'maxlength', 'name', 'placeholder', 'readonly', 'required', 'rows', 'wrap'],
      'td': ['colspan', 'rowspan', 'headers'],
      'th': ['colspan', 'rowspan', 'headers', 'scope'],
      'time': ['datetime'],
      'track': ['default', 'kind', 'label', 'src', 'srclang']
    }
  }
};

// CSS Properties and Values Data
const cssData = {
  properties: [
    'align-content', 'align-items', 'align-self', 'all', 'animation', 'animation-delay', 
    'animation-direction', 'animation-duration', 'animation-fill-mode', 'animation-iteration-count',
    'animation-name', 'animation-play-state', 'animation-timing-function', 'backface-visibility',
    'background', 'background-attachment', 'background-blend-mode', 'background-clip', 
    'background-color', 'background-image', 'background-origin', 'background-position', 
    'background-repeat', 'background-size', 'border', 'border-bottom', 'border-bottom-color', 
    'border-bottom-left-radius', 'border-bottom-right-radius', 'border-bottom-style', 
    'border-bottom-width', 'border-collapse', 'border-color', 'border-image', 'border-image-outset', 
    'border-image-repeat', 'border-image-slice', 'border-image-source', 'border-image-width', 
    'border-left', 'border-left-color', 'border-left-style', 'border-left-width', 'border-radius', 
    'border-right', 'border-right-color', 'border-right-style', 'border-right-width', 'border-spacing', 
    'border-style', 'border-top', 'border-top-color', 'border-top-left-radius', 
    'border-top-right-radius', 'border-top-style', 'border-top-width', 'border-width', 'bottom', 
    'box-decoration-break', 'box-shadow', 'box-sizing', 'break-after', 'break-before', 
    'break-inside', 'caption-side', 'clear', 'clip', 'color', 'column-count', 'column-fill', 
    'column-gap', 'column-rule', 'column-rule-color', 'column-rule-style', 'column-rule-width', 
    'column-span', 'column-width', 'columns', 'content', 'counter-increment', 'counter-reset', 
    'cursor', 'direction', 'display', 'empty-cells', 'filter', 'flex', 'flex-basis', 
    'flex-direction', 'flex-flow', 'flex-grow', 'flex-shrink', 'flex-wrap', 'float', 'font', 
    'font-family', 'font-feature-settings', 'font-kerning', 'font-language-override', 
    'font-size', 'font-size-adjust', 'font-stretch', 'font-style', 'font-synthesis', 
    'font-variant', 'font-variant-alternates', 'font-variant-caps', 'font-variant-east-asian', 
    'font-variant-ligatures', 'font-variant-numeric', 'font-variant-position', 'font-weight', 
    'grid', 'grid-area', 'grid-auto-columns', 'grid-auto-flow', 'grid-auto-rows', 
    'grid-column', 'grid-column-end', 'grid-column-gap', 'grid-column-start', 
    'grid-gap', 'grid-row', 'grid-row-end', 'grid-row-gap', 'grid-row-start', 
    'grid-template', 'grid-template-areas', 'grid-template-columns', 'grid-template-rows', 
    'hanging-punctuation', 'height', 'hyphens', 'image-orientation', 
    'image-rendering', 'image-resolution', 'ime-mode', 'isolation', 'justify-content', 
    'left', 'letter-spacing', 'line-break', 'line-height', 'list-style', 'list-style-image', 
    'list-style-position', 'list-style-type', 'margin', 'margin-bottom', 'margin-left', 
    'margin-right', 'margin-top', 'marks', 'mask', 'mask-type', 'max-height', 'max-width', 
    'min-height', 'min-width', 'mix-blend-mode', 'object-fit', 'object-position', 'opacity', 
    'order', 'orphans', 'outline', 'outline-color', 'outline-offset', 'outline-style', 
    'outline-width', 'overflow', 'overflow-wrap', 'overflow-x', 'overflow-y', 'padding', 
    'padding-bottom', 'padding-left', 'padding-right', 'padding-top', 'page-break-after', 
    'page-break-before', 'page-break-inside', 'perspective', 'perspective-origin', 
    'pointer-events', 'position', 'quotes', 'resize', 'right', 'scroll-behavior', 
    'tab-size', 'table-layout', 'text-align', 'text-align-last', 'text-decoration', 
    'text-decoration-color', 'text-decoration-line', 'text-decoration-style', 
    'text-indent', 'text-justify', 'text-overflow', 'text-shadow', 'text-transform', 
    'top', 'transform', 'transform-origin', 'transform-style', 'transition', 
    'transition-delay', 'transition-duration', 'transition-property', 'transition-timing-function', 
    'unicode-bidi', 'vertical-align', 'visibility', 'white-space', 'widows', 'width', 
    'will-change', 'word-break', 'word-spacing', 'word-wrap', 'writing-mode', 'z-index'
  ],
  values: {
    'display': ['block', 'inline', 'inline-block', 'flex', 'grid', 'none', 'inherit', 'initial'],
    'position': ['static', 'relative', 'absolute', 'fixed', 'sticky', 'inherit', 'initial'],
    'float': ['left', 'right', 'none', 'inherit', 'initial'],
    'clear': ['none', 'left', 'right', 'both', 'inherit', 'initial'],
    'color': ['transparent', 'currentColor', 'inherit', 'initial'],
    'background-color': ['transparent', 'currentColor', 'inherit', 'initial'],
    'width': ['auto', 'inherit', 'initial'],
    'height': ['auto', 'inherit', 'initial'],
    'margin': ['auto', 'inherit', 'initial'],
    'padding': ['inherit', 'initial'],
    'font-family': ['serif', 'sans-serif', 'monospace', 'cursive', 'fantasy', 'inherit', 'initial'],
    'font-weight': ['normal', 'bold', 'bolder', 'lighter', '100', '200', '300', '400', '500', '600', '700', '800', '900', 'inherit', 'initial'],
    'font-style': ['normal', 'italic', 'oblique', 'inherit', 'initial'],
    'text-align': ['left', 'right', 'center', 'justify', 'inherit', 'initial'],
    'text-decoration': ['none', 'underline', 'overline', 'line-through', 'blink', 'inherit', 'initial'],
    'border-style': ['none', 'hidden', 'dotted', 'dashed', 'solid', 'double', 'groove', 'ridge', 'inset', 'outset', 'inherit', 'initial'],
    'cursor': ['auto', 'default', 'none', 'context-menu', 'help', 'pointer', 'progress', 'wait', 'cell', 'crosshair', 'text', 'vertical-text', 'alias', 'copy', 'move', 'no-drop', 'not-allowed', 'grab', 'grabbing', 'e-resize', 'n-resize', 'ne-resize', 'nw-resize', 's-resize', 'se-resize', 'sw-resize', 'w-resize', 'ew-resize', 'ns-resize', 'nesw-resize', 'nwse-resize', 'col-resize', 'row-resize', 'all-scroll', 'zoom-in', 'zoom-out', 'inherit', 'initial'],
    'flex-direction': ['row', 'row-reverse', 'column', 'column-reverse', 'inherit', 'initial'],
    'flex-wrap': ['nowrap', 'wrap', 'wrap-reverse', 'inherit', 'initial'],
    'justify-content': ['flex-start', 'flex-end', 'center', 'space-between', 'space-around', 'space-evenly', 'inherit', 'initial'],
    'align-items': ['stretch', 'flex-start', 'flex-end', 'center', 'baseline', 'inherit', 'initial'],
    'align-content': ['flex-start', 'flex-end', 'center', 'space-between', 'space-around', 'stretch', 'inherit', 'initial'],
    'overflow': ['visible', 'hidden', 'scroll', 'auto', 'inherit', 'initial'],
    'visibility': ['visible', 'hidden', 'collapse', 'inherit', 'initial'],
    'opacity': ['0', '0.1', '0.2', '0.3', '0.4', '0.5', '0.6', '0.7', '0.8', '0.9', '1', 'inherit', 'initial'],
    'z-index': ['auto', 'inherit', 'initial'],
    'box-sizing': ['content-box', 'border-box', 'inherit', 'initial'],
    'text-transform': ['none', 'capitalize', 'uppercase', 'lowercase', 'inherit', 'initial'],
    'white-space': ['normal', 'nowrap', 'pre', 'pre-line', 'pre-wrap', 'inherit', 'initial'],
    'list-style-type': ['none', 'disc', 'circle', 'square', 'decimal', 'decimal-leading-zero', 'lower-roman', 'upper-roman', 'lower-greek', 'lower-latin', 'upper-latin', 'armenian', 'georgian', 'lower-alpha', 'upper-alpha', 'inherit', 'initial'],
    'list-style-position': ['inside', 'outside', 'inherit', 'initial'],
    'list-style-image': ['none', 'inherit', 'initial'],
    'background-repeat': ['repeat', 'repeat-x', 'repeat-y', 'no-repeat', 'space', 'round', 'inherit', 'initial'],
    'background-position': ['top', 'bottom', 'left', 'right', 'center', 'inherit', 'initial'],
    'background-size': ['auto', 'cover', 'contain', 'inherit', 'initial'],
    'border-radius': ['inherit', 'initial'],
    'box-shadow': ['none', 'inherit', 'initial'],
    'text-shadow': ['none', 'inherit', 'initial'],
    'transition-property': ['none', 'all', 'inherit', 'initial'],
    'transition-timing-function': ['ease', 'linear', 'ease-in', 'ease-out', 'ease-in-out', 'step-start', 'step-end', 'inherit', 'initial'],
    'animation-direction': ['normal', 'reverse', 'alternate', 'alternate-reverse', 'inherit', 'initial'],
    'animation-fill-mode': ['none', 'forwards', 'backwards', 'both', 'inherit', 'initial'],
    'animation-iteration-count': ['infinite', 'inherit', 'initial'],
    'animation-play-state': ['running', 'paused', 'inherit', 'initial']
  },
  units: ['px', 'em', 'rem', '%', 'vw', 'vh', 'vmin', 'vmax', 'cm', 'mm', 'in', 'pt', 'pc', 'ex', 'ch'],
  colors: ['aliceblue', 'antiquewhite', 'aqua', 'aquamarine', 'azure', 'beige', 'bisque', 'black', 'blanchedalmond', 'blue', 'blueviolet', 'brown', 'burlywood', 'cadetblue', 'chartreuse', 'chocolate', 'coral', 'cornflowerblue', 'cornsilk', 'crimson', 'cyan', 'darkblue', 'darkcyan', 'darkgoldenrod', 'darkgray', 'darkgreen', 'darkgrey', 'darkkhaki', 'darkmagenta', 'darkolivegreen', 'darkorange', 'darkorchid', 'darkred', 'darksalmon', 'darkseagreen', 'darkslateblue', 'darkslategray', 'darkslategrey', 'darkturquoise', 'darkviolet', 'deeppink', 'deepskyblue', 'dimgray', 'dimgrey', 'dodgerblue', 'firebrick', 'floralwhite', 'forestgreen', 'fuchsia', 'gainsboro', 'ghostwhite', 'gold', 'goldenrod', 'gray', 'green', 'greenyellow', 'grey', 'honeydew', 'hotpink', 'indianred', 'indigo', 'ivory', 'khaki', 'lavender', 'lavenderblush', 'lawngreen', 'lemonchiffon', 'lightblue', 'lightcoral', 'lightcyan', 'lightgoldenrodyellow', 'lightgray', 'lightgreen', 'lightgrey', 'lightpink', 'lightsalmon', 'lightseagreen', 'lightskyblue', 'lightslategray', 'lightslategrey', 'lightsteelblue', 'lightyellow', 'lime', 'limegreen', 'linen', 'magenta', 'maroon', 'mediumaquamarine', 'mediumblue', 'mediumorchid', 'mediumpurple', 'mediumseagreen', 'mediumslateblue', 'mediumspringgreen', 'mediumturquoise', 'mediumvioletred', 'midnightblue', 'mintcream', 'mistyrose', 'moccasin', 'navajowhite', 'navy', 'oldlace', 'olive', 'olivedrab', 'orange', 'orangered', 'orchid', 'palegoldenrod', 'palegreen', 'paleturquoise', 'palevioletred', 'papayawhip', 'peachpuff', 'peru', 'pink', 'plum', 'powderblue', 'purple', 'rebeccapurple', 'red', 'rosybrown', 'royalblue', 'saddlebrown', 'salmon', 'sandybrown', 'seagreen', 'seashell', 'sienna', 'silver', 'skyblue', 'slateblue', 'slategray', 'slategrey', 'snow', 'springgreen', 'steelblue', 'tan', 'teal', 'thistle', 'tomato', 'turquoise', 'violet', 'wheat', 'white', 'whitesmoke', 'yellow', 'yellowgreen']
};

// Global functions for menu and dark mode
// These are defined in the global scope to work with inline event handlers
function toggleNav() {
  const navContainer = document.querySelector('.nav-container');
  const overlay = document.querySelector('.overlay');
  
  if (navContainer) {
    navContainer.classList.toggle('active');
  }
  
  if (overlay) {
    overlay.classList.toggle('active');
  }
}

function toggleDarkMode() {
  const body = document.body;
  const darkModeToggle = document.querySelector('.dark-mode-toggle');
  
  body.classList.toggle('dark-mode');
  
  if (body.classList.contains('dark-mode')) {
    if (darkModeToggle) {
      darkModeToggle.innerHTML = '☀️';
    }
    localStorage.setItem('darkMode', 'enabled');
  } else {
    if (darkModeToggle) {
      darkModeToggle.innerHTML = '🌙';
    }
    localStorage.setItem('darkMode', 'disabled');
  }
}

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}

// Initialize everything when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {
  // Set up dark mode based on saved preference
  if (localStorage.getItem('darkMode') === 'enabled') {
    document.body.classList.add('dark-mode');
    const darkModeToggle = document.querySelector('.dark-mode-toggle');
    if (darkModeToggle) {
      darkModeToggle.innerHTML = '☀️';
    }
  }
  
  // Back to top button functionality
  const backToTopButton = document.querySelector('.back-to-top');
  
  if (backToTopButton) {
    window.addEventListener('scroll', () => {
      if (window.pageYOffset > 300) {
        backToTopButton.style.display = 'block';
      } else {
        backToTopButton.style.display = 'none';
      }
    });
  }
  
  // Add some basic canvas drawing
  const canvas = document.getElementById('myCanvas');
  if (canvas && canvas.getContext) {
    drawCanvas(canvas);
  }
  
  // HTML Compiler functionality
  const htmlCode = document.getElementById('htmlCode');
  const preview = document.getElementById('preview');
  
  if (htmlCode && preview) {
    // Run code on initial load
    runCode();
  }
  
  // Smooth scrolling for navigation links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        window.scrollTo({
          top: target.offsetTop - 80,
          behavior: 'smooth'
        });
        
        // Close mobile navigation if open
        const navContainer = document.querySelector('.nav-container');
        const overlay = document.querySelector('.overlay');
        if (navContainer) {
          navContainer.classList.remove('active');
        }
        if (overlay) {
          overlay.classList.remove('active');
        }
      }
    });
  });
  
  // Fix for form submission
  document.querySelectorAll('form').forEach(form => {
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      showNotification('Form submitted! (This is a demo - no actual submission occurs)');
    });
  });
  
  // Initialize the enhanced autocomplete
  initEnhancedAutocomplete();
});

// HTML Compiler functionality
function runCode() {
  const htmlCode = document.getElementById('htmlCode');
  const preview = document.getElementById('preview');
  
  if (!htmlCode || !preview) return;
  
  const code = htmlCode.value;
  const previewDoc = preview.contentDocument || preview.contentWindow.document;
  
  previewDoc.open();
  previewDoc.write(code);
  previewDoc.close();
}

function resetCode() {
  const htmlCode = document.getElementById('htmlCode');
  
  if (!htmlCode) return;
  
  htmlCode.value = `<!DOCTYPE html>
<html>
<head>
  <title>My Practice Page</title>
</head>
<body>
  <h1>Hello World!</h1>
  <p>This is my first HTML practice.</p>
  <button>Click Me</button>
</body>
</html>`;
  runCode();
}

// Enhanced Autocomplete Functionality
function initEnhancedAutocomplete() {
  const htmlCode = document.getElementById('htmlCode');
  const autocompleteSuggestions = document.getElementById('autocomplete-suggestions');
  
  if (!htmlCode || !autocompleteSuggestions) return;
  
  let currentSelection = -1;
  let suggestions = [];
  
  // Function to get the context of the cursor
  function getContext(text, cursorPos) {
    // Check if we're inside an HTML tag
    const tagStart = text.lastIndexOf('<', cursorPos - 1);
    const tagEnd = text.indexOf('>', cursorPos);
    
    if (tagStart !== -1 && (tagEnd === -1 || tagEnd > cursorPos)) {
      // We're inside an HTML tag
      const tagContent = text.substring(tagStart + 1, cursorPos);
      const spaceIndex = tagContent.indexOf(' ');
      
      if (spaceIndex === -1 || spaceIndex > cursorPos - tagStart - 1) {
        // We're in the element name part
        return {
          type: 'html-element',
          currentText: tagContent,
          startPos: tagStart + 1,
          endPos: cursorPos
        };
      } else {
        // We're in the attribute part
        const elementName = tagContent.substring(0, spaceIndex);
        const attrStart = text.lastIndexOf(' ', cursorPos - 1);
        const currentAttr = text.substring(attrStart + 1, cursorPos);
        
        return {
          type: 'html-attribute',
          elementName: elementName,
          currentText: currentAttr,
          startPos: attrStart + 1,
          endPos: cursorPos
        };
      }
    }
    
    // Check if we're typing an element name without < (new context)
    // Find the start of the current word
    let wordStart = cursorPos - 1;
    while (wordStart >= 0 && 
           text[wordStart] !== ' ' && 
           text[wordStart] !== '\n' && 
           text[wordStart] !== '<' && 
           text[wordStart] !== '>') {
      wordStart--;
    }
    wordStart++;
    
    const currentWord = text.substring(wordStart, cursorPos);
    
    // If the current word could be an HTML element
    if (currentWord.length > 0) {
      // Check if it's a valid HTML element
      const isElement = htmlData.elements.some(element => 
        element.toLowerCase().startsWith(currentWord.toLowerCase())
      );
      
      if (isElement) {
        return {
          type: 'plain-text-element',
          currentText: currentWord,
          startPos: wordStart,
          endPos: cursorPos
        };
      }
    }
    
    // Default context
    return {
      type: 'none',
      currentText: '',
      startPos: cursorPos,
      endPos: cursorPos
    };
  }
  
  // Function to show autocomplete suggestions
  function showAutocomplete(matches, startPos, endPos) {
    autocompleteSuggestions.innerHTML = '';
    currentSelection = -1;
    suggestions = [];
    
    if (matches.length === 0) {
      hideAutocomplete();
      return;
    }
    
    matches.forEach(match => {
      const suggestion = document.createElement('div');
      suggestion.className = 'autocomplete-suggestion';
      suggestion.textContent = match;
      suggestion.addEventListener('click', function() {
        selectSuggestion(match);
      });
      autocompleteSuggestions.appendChild(suggestion);
      suggestions.push(suggestion);
    });
    
    // Auto-select the first suggestion
    if (suggestions.length > 0) {
      currentSelection = 0;
      suggestions[0].classList.add('selected');
    }
    
    // Position the suggestions below the textarea
    autocompleteSuggestions.style.position = 'absolute';
    autocompleteSuggestions.style.top = '100%';
    autocompleteSuggestions.style.left = '0';
    autocompleteSuggestions.style.width = '100%';
    autocompleteSuggestions.style.zIndex = '10';
    autocompleteSuggestions.style.display = 'block';
  }
  
  // Function to hide autocomplete suggestions
  function hideAutocomplete() {
    autocompleteSuggestions.style.display = 'none';
    currentSelection = -1;
    suggestions = [];
  }
  
  // Function to update selection in the suggestion list
  function updateSelection() {
    suggestions.forEach((suggestion, index) => {
      if (index === currentSelection) {
        suggestion.classList.add('selected');
      } else {
        suggestion.classList.remove('selected');
      }
    });
  }
  
  // Function to complete an HTML element with tags
  function completeElement(elementName, startPos, endPos, isHtmlElement) {
    const value = htmlCode.value;
    let newValue;
    let newCursorPos;
    
    if (isHtmlElement) {
      // We're inside an HTML tag, so we need to close the tag and add the closing tag
      newValue = value.substring(0, startPos - 1) + 
                 `<${elementName}></${elementName}>` + 
                 value.substring(endPos);
      newCursorPos = startPos + elementName.length + 1; // after <element>
    } else {
      // We're typing plain text, so we add the full element
      newValue = value.substring(0, startPos) + 
                 `<${elementName}></${elementName}>` + 
                 value.substring(endPos);
      newCursorPos = startPos + elementName.length + 2; // after <element>
    }
    
    htmlCode.value = newValue;
    htmlCode.focus();
    htmlCode.setSelectionRange(newCursorPos, newCursorPos);
  }
  
  // Function to insert a newline at cursor position
  function insertNewline() {
    const cursorPos = htmlCode.selectionStart;
    const value = htmlCode.value;
    const newValue = value.substring(0, cursorPos) + '\n' + value.substring(cursorPos);
    
    htmlCode.value = newValue;
    htmlCode.focus();
    htmlCode.setSelectionRange(cursorPos + 1, cursorPos + 1);
  }
  
  // Input event for autocomplete
  htmlCode.addEventListener('input', function(e) {
    const value = e.target.value;
    const cursorPos = e.target.selectionStart;
    
    // Find the context of the cursor
    const context = getContext(value, cursorPos);
    
    if (context.type === 'html-element') {
      // Suggest HTML elements
      const matches = htmlData.elements.filter(element => 
        element.toLowerCase().startsWith(context.currentText.toLowerCase())
      );
      showAutocomplete(matches, context.startPos, context.endPos);
    } 
    else if (context.type === 'plain-text-element') {
      // Suggest HTML elements when typing element names without <>
      const matches = htmlData.elements.filter(element => 
        element.toLowerCase().startsWith(context.currentText.toLowerCase())
      );
      showAutocomplete(matches, context.startPos, context.endPos);
    }
    else {
      hideAutocomplete();
    }
  });
  
  // Keydown event for autocomplete and element completion
  htmlCode.addEventListener('keydown', function(e) {
    // Handle autocomplete navigation and selection
    if (autocompleteSuggestions.style.display === 'block') {
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        currentSelection = (currentSelection + 1) % suggestions.length;
        updateSelection();
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        currentSelection = (currentSelection - 1 + suggestions.length) % suggestions.length;
        updateSelection();
      } else if (e.key === 'Enter' || e.key === 'Tab') {
        e.preventDefault();
        if (currentSelection >= 0 && suggestions[currentSelection]) {
          selectSuggestion(suggestions[currentSelection].textContent);
        }
      } else if (e.key === 'Escape') {
        hideAutocomplete();
      }
    } 
    // Handle element completion when pressing Enter without autocomplete visible
    else if (e.key === 'Enter' && !e.shiftKey) {
      const value = htmlCode.value;
      const cursorPos = htmlCode.selectionStart;
      const context = getContext(value, cursorPos);
      
      if (context.type === 'plain-text-element') {
        e.preventDefault();
        // Find the first matching element
        const matches = htmlData.elements.filter(element => 
          element.toLowerCase().startsWith(context.currentText.toLowerCase())
        );
        
        if (matches.length > 0) {
          completeElement(matches[0], context.startPos, context.endPos, false);
        }
      }
    }
    // Handle Shift+Enter to always go to next line
    else if (e.key === 'Enter' && e.shiftKey) {
      e.preventDefault();
      insertNewline();
    }
  });
  
  // Function to select a suggestion
  function selectSuggestion(value) {
    const cursorPos = htmlCode.selectionStart;
    const context = getContext(htmlCode.value, cursorPos);
    
    if (context.type === 'html-element') {
      completeElement(value, context.startPos, context.endPos, true);
    } 
    else if (context.type === 'plain-text-element') {
      completeElement(value, context.startPos, context.endPos, false);
    }
    
    hideAutocomplete();
  }
}

// Draw on canvas
function drawCanvas(canvas) {
  const ctx = canvas.getContext('2d');
  
  // Clear canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  
  // Draw rectangle
  ctx.fillStyle = '#3498db';
  ctx.fillRect(10, 10, 50, 50);
  
  // Draw circle
  ctx.fillStyle = '#e74c3c';
  ctx.beginPath();
  ctx.arc(150, 50, 30, 0, Math.PI * 2);
  ctx.fill();
  
  // Draw a line
  ctx.beginPath();
  ctx.moveTo(10, 100);
  ctx.lineTo(190, 100);
  ctx.strokeStyle = '#2ecc71';
  ctx.lineWidth = 3;
  ctx.stroke();
}

// Show notification instead of alert
function showNotification(message) {
  // Create notification element if it doesn't exist
  let notification = document.getElementById('notification');
  
  if (!notification) {
    notification = document.createElement('div');
    notification.id = 'notification';
    notification.style.position = 'fixed';
    notification.style.bottom = '20px';
    notification.style.left = '50%';
    notification.style.transform = 'translateX(-50%)';
    notification.style.backgroundColor = '#3498db';
    notification.style.color = 'white';
    notification.style.padding = '15px 25px';
    notification.style.borderRadius = '5px';
    notification.style.boxShadow = '0 4px 6px rgba(0,0,0,0.1)';
    notification.style.zIndex = '1000';
    notification.style.opacity = '0';
    notification.style.transition = 'opacity 0.3s ease';
    
    document.body.appendChild(notification);
  }
  
  // Set message and show notification
  notification.textContent = message;
  notification.style.opacity = '1';
  
  // Hide notification after 3 seconds
  setTimeout(() => {
    notification.style.opacity = '0';
  }, 3000);
}