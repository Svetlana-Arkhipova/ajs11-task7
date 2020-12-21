import Validator from '../app';

test.each([
  ['four digits', 'd4444name'],
  ['five digits', 'd55555name'],
])('no more 3 digits', (description, name) => {
  const valid = new Validator();
  expect(() => { valid.validateUsername(name); }).toThrowError(/^Имя не может содержать более трех цифр подряд$/);
});

test.each([
  ['begin digit', '333name'],
  ['begin _', '_d333name'],
  ['begin -', '-d333name'],
])('beginning symbol', (description, name) => {
  const valid = new Validator();
  expect(() => { valid.validateUsername(name); }).toThrowError(/^Недопустимое имя$/);
});

test.each([
  ['end digit', 'd333name0'],
  ['end _', 'd333name_'],
  ['end -', 'd333name-'],
])('ending symbol', (description, name) => {
  const valid = new Validator();
  expect(() => { valid.validateUsername(name); }).toThrowError(/^Недопустимое имя$/);
});

test('rus symbol', () => {
  const valid = new Validator();
  expect(() => { valid.validateUsername('d333имяD'); }).toThrowError(/^Недопустимое имя$/);
});
