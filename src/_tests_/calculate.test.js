import calculate from '../logic/calculate';

test('number buttons when total and next are not empty', () => {
    const data = calculate({ total: '2', next: '4', operation: '+'}, '5')
    expect(data).toEqual({ total: '2', next: '45', operation: '+'});
});

test('number buttons when total and next are empty', () => {
  const data = calculate({ total: null, next: null, operation: '+'}, '5')
  expect(data).not.toEqual({total: '9', next: null, operation: '+'})     
});