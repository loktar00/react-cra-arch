import './src/styles/app.scss';

import React, {ComponentClass} from 'react';
import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';
import 'jest-canvas-mock';

Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: jest.fn().mockImplementation(query => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: jest.fn(), // Deprecated
        removeListener: jest.fn(), // Deprecated
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        dispatchEvent: jest.fn()
    }))
});

Object.defineProperty(window, 'scroll', { value: () => { return {}; }, writable: true });
