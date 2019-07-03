import foo from './foo.bad';

describe('foo', () => {
  it('has foo', () => {
    expect(foo.prop).toEqual('bar');
  });
});

