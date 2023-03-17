const {
  sum, multiply, divide, secondsToHours,
} = require('./02-math');

describe('Test for math', () => {
  describe('Test for sum', () => {
    test('adds 1 + 3 to equal 3', () => {
      const rta = sum(1, 3);
      expect(rta).toBe(4);
    });
  });
  describe('Test for multiply', () => {
    test('should be 4', () => {
      const rta = multiply(1, 4);
      expect(rta).toBe(4);
    });
  });
  describe('Test for divide', () => {
    test('should divide', () => {
      const rta = divide(6, 3);
      expect(rta).toBe(2);
      const rta2 = divide(5, 2);
      expect(rta2).toBe(2.5);
    });

    test('should divide for zero', () => {
      const rta = divide(6, 0);
      expect(rta).toBeNull();
      const rta2 = divide(5, 0);
      expect(rta2).toBeNull();
    });
  });
});

test('Convert second to hours', () => {
  const rta = secondsToHours(3600);
  expect(rta).toBe('1:0:0');
  const rta2 = secondsToHours(7200);
  expect(rta2).toBe('2:0:0');
  const rta3 = secondsToHours(3601);
  expect(rta3).toBe('1:0:1');
  const rta4 = secondsToHours(3700);
  expect(rta4).toBe('1:1:40');
});
