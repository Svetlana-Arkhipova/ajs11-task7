export default class Validator {
  validateUsername(name) {
    if (name.match(/\d{4,}/g) !== null) {
      throw new Error('Имя не может содержать более трех цифр подряд');
    }
    if (name.match(/^[a-z][a-z-_\d{0,3}]*[a-z]$/i) === null) {
      throw new Error('Недопустимое имя');
    }
  }
}
