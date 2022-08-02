const randomText = 'Hello world';

test('should contain text', () => {
  expect(randomText).toMatch(/world/);
})
