import foo from './foo.good';

describe('foo', () => {
  it('returns foo', () => {
    expect(foo()).toEqual('bar');
  });
});

