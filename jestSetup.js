jest.spyOn(global, 'document', 'get').mockImplementation(() => {
    return {
      body: {},
      createElement: jest.fn(),
      ...
    };
  });
  