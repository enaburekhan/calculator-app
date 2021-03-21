import operate from '../logic/operate';

test('can add numbers', () => {
  expect(operate('4', '5', '+')).toEqual('9')    
});

test('can subtract numbers', () => {
  expect(operate('4', '5', '-' )).toEqual('-1')    
});

test('can multiply numbers', () => {
  expect(operate('4', '5', 'x')).toEqual('20')    
});

test('can divide numbers', () => {
  expect(operate('4', '5', '/')).toEqual('0.8')    
});