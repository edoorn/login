/**
 * getPasswordErrors
 * @param {string} value
 * 
 * @returns {array}
 */
export function getPasswordErrors(value) {
  const errors = [];

  if (value === '') {
    errors.push('This field is required');
    
    return errors;
  }

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
 * getLoginError
 * @param {string} username
 * @param {password} password
 * 
 * @returns {boolean}
 */
export function getLoginError(username, password) {
  return username !== 'level' || password !== 'Access123';
}

/**
 * announce
 * @param {string} text - Message to announce
 * @param {string} mode - Aria-live politeness
 */
export function announce(text, mode) {
  let liveRegion;

  if (mode === 'assertive') {
    liveRegion = document.getElementById('app-live-assertive');
  } else if (mode === 'polite') {
    liveRegion = document.getElementById('app-live-polite');
  }

  // Only update live region if the text has changed
  if (liveRegion && liveRegion.innerText !== text) {
    liveRegion.innerText = text;
  }
}
