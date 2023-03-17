// matchers
test('test obj', () => {
  const data = { name: 'nico' };
  data.lastname = 'urbano';
  expect(data).toEqual({ name: 'nico', lastname: 'urbano' });
});

test('null', () => {
  const data = null;
  expect(data).toBeNull();
  expect(data).toBeDefined();
  expect(data).not.toBeUndefined();
});

test('booleans', () => {
  expect(true).toEqual(true);
  expect(false).toEqual(false);

  expect(0).toBeFalsy();
  expect('').toBeFalsy();
  expect(false).toBeFalsy();
});

test('string', () => {
  expect('Chirstoph').toMatch(/stop/);
});

test('list / array', () => {
  const numbers = [1, 2, 3, 4, 5];
  expect(numbers).toContain(3);
});
