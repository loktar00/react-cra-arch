import React from 'react';
import renderer from 'react-test-renderer';
import { render, fireEvent, screen } from '@testing-library/react';

import Button from '..';

describe('Default Button', () => {
    describe ('Render Button', () => {
        it('It renders the component', () => {
            const tree = renderer.create(
                <Button>Default</Button>).toJSON();
            expect(tree).toMatchSnapshot();
        });
    });

    describe ('Button Functionality', () => {
        test('Can click the button', () => {
            const clickHandler = jest.fn();
            const { container }= render(<Button onClick={clickHandler}>Default</Button>);
            const button = screen.getByText('Default');
            fireEvent.click(button);
            expect(clickHandler).toHaveBeenCalledTimes(1);
        });

        test('Cannot click disabled button', () => {
            const clickHandler = jest.fn();
            const { container }= render(<Button disabled onClick={clickHandler}>Default</Button>);
            const button = screen.getByText('Default');
            fireEvent.click(button);
            expect(clickHandler).toHaveBeenCalledTimes(0);
        });
    });
});
