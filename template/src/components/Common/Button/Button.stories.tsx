import * as React from 'react';
import Button from '.';

export const defaultButton = () => {
    return (
        <Button onClick={()=> undefined}>
            Button Text
        </Button>

    );
};

export default {
    title: 'Common/Button'
};
