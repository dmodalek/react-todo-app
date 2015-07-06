'use strict';

describe('ReactMvcApp', () => {
  let React = require('react/addons');
  let ReactMvcApp, component;

  beforeEach(() => {
    let container = document.createElement('div');
    container.id = 'content';
    document.body.appendChild(container);

    ReactMvcApp = require('components/ReactMvcApp.js');
    component = React.createElement(ReactMvcApp);
  });

  it('should create a new instance of ReactMvcApp', () => {
    expect(component).toBeDefined();
  });
});
