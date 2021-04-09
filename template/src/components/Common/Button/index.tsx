import React, {forwardRef} from 'react';

const Button = forwardRef(function Button(
    props: React.ComponentPropsWithoutRef<'button'>,
    ref: React.Ref<HTMLButtonElement>
) {
    return (
        <button ref={ref} {...props} className={`da-button ${props.className}`}>
            {props.children}
        </button>
    );
});

Button.displayName = 'DaButton';

export default Button;
