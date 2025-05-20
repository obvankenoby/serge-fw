export function addEventListener(eventName, handler, el) {
  el.addEventListener(eventName, handler);
  return handler;
}

export function addEventListeners(listeners = {}, el) {
  const addEventListener = {};
  Object.entries(listeners).forEach(([eventName, handler]) => {
    const listener = addEventListener(eventName, handler, el);
    addEventListener[eventName] = listener;
  });
  return addEventListener;
}

export function removeEventListeners(listeners = {}, el) {
  Object.entries(listeners).forEach(([eventName, handler]) => el.removeEventListener(eventName, handler));
}
