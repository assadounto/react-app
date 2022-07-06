import calculate from '../logic/calculate';
import operate from '../logic/operate';

describe('Tests for Logic files ', () => {
  test('tests calculate.js', () => {
    expect(
      calculate(
        {
          total: 52,
          next: null,
          operation: null,
        },
        'AC'
      )
    ).toEqual({
      total: null,
      next: null,
      operation: null,
    });
  });

  test('tests operate.js', () => {
    expect(operate(2, 2, '+')).toEqual('4');
  });
});
