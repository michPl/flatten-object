import flattenObject from '.';

describe('Flatten object', () => {
  it('Should return empty object for undefined input', () => {
    expect(flattenObject()).toEqual({});
  });

  it('Should return empty object for non object input', () => {
    expect(flattenObject(null)).toEqual({});
  });

  it('Should return the same object for the flatten object', () => {
    expect(flattenObject({test: 1, newOne: 2}))
      .toEqual({test: 1, newOne: 2});
  });

  it('Should return the flatten object for the nested object without array', () => {
    const input = {
      test: 1,
      deep: {
        level1: 1,
        deep: {
          level2: 2
        }
      }
    };

    expect(flattenObject(input))
      .toEqual({
        test: 1,
        'deep.level1': 1,
        'deep.deep.level2': 2
      });
  });

  it('Should return the flatten object for the nested object without flatten array', () => {
    const input = {
      test: 1,
      deep: {
        level1: [{item1: 1}, {item1: 2}],
        deep: {
          level2: 2
        }
      }
    };

    expect(flattenObject(input, {flattenArray: false}))
      .toEqual({
        test: 1,
        'deep.level1': [{item1: 1}, {item1: 2}],
        'deep.deep.level2': 2
      });
  });

  it('Should return the flatten object for the nested object with flatten array', () => {
    const input = {
      test: 1,
      deep: {
        level1: [{item1: 1}, {item1: 2}],
        deep: {
          level2: 2
        }
      }
    };

    expect(flattenObject(input, {flattenArray: true}))
      .toEqual({
        test: 1,
        'deep.level1.0.item1': 1,
        'deep.level1.1.item1': 2,
        'deep.deep.level2': 2
      });
  });
});
