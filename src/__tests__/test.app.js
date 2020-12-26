import Validator from '../app';

test.each([
  ['three digits', 'd333name', true],
  ['four digits', 'd4444name', false],
  ['five digits', 'd55555name', false],
])('no more 3 digits', (description, name, expected) => {
  const valid = new Validator();
  expect(valid.validateUsername(name)).toBe(expected);
});

test.each([
  ['correct name', 'd333name', true],
  ['begin digit', '333name', false],
  ['begin _', '_d333name', false],
  ['begin -', '-d333name', false],
])('beginning symbol', (description, name, expected) => {
  const valid = new Validator();
  expect(valid.validateUsername(name)).toBe(expected);
});

test.each([
  ['correct name', 'd333name', true],
  ['end digit', 'd333name0', false],
  ['end _', 'd333name_', false],
  ['end -', 'd333name-', false],
])('ending symbol', (description, name, expected) => {
  const valid = new Validator();
  expect(valid.validateUsername(name)).toBe(expected);
});

test('rus symbol', () => {
  const valid = new Validator();
  expect(valid.validateUsername('d333имяD')).toBe(false);
});
