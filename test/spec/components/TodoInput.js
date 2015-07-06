'use strict';

// Uncomment the following lines to use the react test utilities
// import React from 'react/addons';
// const TestUtils = React.addons.TestUtils;

import createComponent from 'helpers/createComponent';
import TodoInput from 'components/TodoInput.js';

describe('TodoInput', () => {
    let TodoInputComponent;

    beforeEach(() => {
        TodoInputComponent = createComponent(TodoInput);
    });

    it('should have its component name as default className', () => {
        expect(TodoInputComponent._store.props.className).toBe('TodoInput');
    });
});
