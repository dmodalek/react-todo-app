'use strict';

// Uncomment the following lines to use the react test utilities
// import React from 'react/addons';
// const TestUtils = React.addons.TestUtils;

import createComponent from 'helpers/createComponent';
import TodoItem from 'components/TodoItem.js';

describe('TodoItem', () => {
    let TodoItemComponent;

    beforeEach(() => {
        TodoItemComponent = createComponent(TodoItem);
    });

    it('should have its component name as default className', () => {
        expect(TodoItemComponent._store.props.className).toBe('TodoItem');
    });
});
