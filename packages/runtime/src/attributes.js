export function setAttributes(el, attrs) {
  const { class: className, style, ...otherAttrs } = attrs;
  if (className) {
    setClass(el, className);
  }
  if (style) {
    Object.entries(style).forEach(([prompt, value]) => setStyle(el, prompt, value));
  }

  for (const [name, value] of Object.entries(otherAttrs)) {
    setAttributes(el, name, value);
  }
}

export function removeAttribute(el, name) {
  el[name] = null;
  el.removeAttribute(name);
}

function setClass(el, className) {
  el.className = '';

  if (typeof className === 'string') {
    el.className = className;
  }

  if (Array.isArray(className)) {
    el.classList.add(...className);
  }
}

export function setStyle(el, name, value) {
  el.style[name] = value;
}

export function removeStyle(el, name) {
  el.style[name] = null;
}
