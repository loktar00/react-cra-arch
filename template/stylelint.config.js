module.exports = {
    'plugins': [
        'stylelint-config-rational-order/plugin',
        'stylelint-scss'
    ],
    'extends': [
        'stylelint-config-standard',
        'stylelint-config-rational-order',
        'stylelint-config-css-modules'
    ],
    'defaultSeverity': 'warning',
    'rules': {
        'block-no-empty': true,
        'color-no-invalid-hex': true,
        'declaration-colon-space-after': 'always',
        'declaration-colon-space-before': 'never',
        'function-comma-space-after': 'always',
        'function-url-quotes': 'never',
        'media-feature-colon-space-after': 'always',
        'media-feature-colon-space-before': 'never',
        'media-feature-name-no-vendor-prefix': true,
        'max-empty-lines': 5,
        'indentation': 4,
        'number-leading-zero': 'always',
        'at-rule-no-unknown': null,
        'number-no-trailing-zeros': true,
        'property-no-vendor-prefix': true,
        'declaration-block-no-duplicate-properties': true,
        'block-opening-brace-newline-after': 'always',
        'declaration-block-trailing-semicolon': 'always',
        'selector-list-comma-space-before': 'never',
        'selector-list-comma-newline-after': 'always',
        'no-descending-specificity': null,
        'selector-max-id': 0,
        'string-quotes': 'double',
        'value-no-vendor-prefix': true,
        'selector-pseudo-class-no-unknown': [true, {'ignorePseudoClasses': ["global", "local", "export", "var-"]}]
    }
};
