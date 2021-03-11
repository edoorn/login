/**
 * getPasswordErrors
 * @param {string} value
 * 
 * @returns {array}
 */
export function getPasswordErrors(value) {
  const errors = [];

  // Test cases
  const uppercase = value.match(/[A-Z]/g);
  const lowercase = value.match(/[a-z]/g);
  const number = value.match(/[0-9]/g);

  // Must contain 1 capital letter
  if (!uppercase) {
    errors.push('Missing uppercase letter');
  }

  // Must contain 1 lowercase letter
  if (!lowercase) {
    errors.push('Missing lowercase letter');
  }

  // Must contain 1 number
  if (!number) {
    errors.push('Must contain a number');
  }

  return errors;
}

/**
 * announce
 * @param {string} text - Message to announce
 * @param {string} mode - Aria-live politeness
 */
export function announce(text, mode) {
  if (mode === 'assertive') {
    const liveRegion = document.getElementById('app-live-assertive');
    liveRegion.innerText = text;
  } else if (mode === 'polite') {
    const liveRegion = document.getElementById('app-live-polite');
    liveRegion.innerText = text;
  }
}
