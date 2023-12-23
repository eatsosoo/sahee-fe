module.exports = {
  extends: 'stylelint-config-standard',
  rules: {
    'color-no-invalid-hex': true,
    'declaration-block-no-duplicate-properties': true,
    'declaration-block-trailing-semicolon': 'always',
    'selector-pseudo-class-no-unknown': [
      true,
      {
        ignorePseudoClasses: ['global'],
      },
    ],
  },
}
