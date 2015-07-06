'use strict';

// Uncomment the following lines to use the react test utilities
// import React from 'react/addons';
// const TestUtils = React.addons.TestUtils;

import createComponent from 'helpers/createComponent';
import TodoList from 'components/TodoList.js';

describe('TodoList', () => {
    let TodoListComponent;

    beforeEach(() => {
        TodoListComponent = createComponent(TodoList);
    });

    it('should have its component name as default className', () => {
        expect(TodoListComponent._store.props.className).toBe('TodoList');
    });
});
