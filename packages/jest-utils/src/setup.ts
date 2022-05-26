function isTrue(received: boolean): jest.CustomMatcherResult {
  return {
    pass: received === true,
    message: () => "did not receive 'true'",
  };
}

expect.extend({ isTrue });
