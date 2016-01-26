const ALWAYS = 'always'
const DISABLE = 0
const ENABLE = 2
const INDENT_LENGTH = 2
const INDENT_LENGTH_JSX = 4
const MAX_BLOCK_DEPTH = 4
const MAX_COMPLEXITY = 10
const MAX_FUNCTION_PARAMETERS = 3
const MAX_LINE_LENGTH = 80
const MAX_NESTED_CALLBACKS = 2
const MAX_STATEMENTS = 10
const NEVER = 'never'

module.exports = {
  ecmaFeatures: {
    arrowFunctions: true,
    binaryLiterals: true,
    blockBindings: true,
    classes: true,
    defaultParams: true,
    destructuring: true,
    forOf: true,
    generators: true,
    modules: true,
    objectLiteralComputedProperties: true,
    objectLiteralDuplicateProperties: true,
    objectLiteralShorthandMethods: true,
    objectLiteralShorthandProperties: true,
    octalLiterals: true,
    regexUFlag: true,
    regexYFlag: true,
    restParams: true,
    spread: true,
    superInFunctions: true,
    templateStrings: true,
    unicodeCodePointEscapes: true,
    globalReturn: false,
    jsx: true,
    experimentalObjectRestSpread: true,
  },
  env: {
    browser: true,
    node: true,
    commonjs: true,
    worker: true,
    amd: false,
    mocha: true,
    jasmine: false,
    jest: false,
    phantomjs: true,
    protractor: false,
    qunit: false,
    jquery: false,
    prototypejs: false,
    shelljs: false,
    meteor: false,
    mongo: false,
    applescript: false,
    nashorn: false,
    serviceworker: true,
    embertest: false,
    webextensions: true,
    es6: true,
  },
  parser: 'babel-eslint',
  plugins: [
    'babel',
    'react',
  ],
  rules: {
    'generator-star-spacing': DISABLE,
    'babel/generator-star-spacing': [ENABLE, 'before'],
    'new-cap': DISABLE,
    'babel/new-cap': [ENABLE, {
      newIsCap: true,
      capIsNew: true,
    }],
    'object-curly-spacing': DISABLE,
    'babel/object-curly-spacing': [ENABLE, NEVER, {
      objectsInObjects: false,
      arraysInObjects: false,
    }],
    'object-shorthand': DISABLE,
    'babel/object-shorthand': [ENABLE, ALWAYS],
    'arrow-parens': DISABLE,
    'babel/arrow-parens': [ENABLE, ALWAYS],
    'babel/no-await-in-loop': ENABLE,
    'react/display-name': ENABLE,
    'react/forbid-prop-types': ENABLE,
    'react/jsx-boolean-value': [ENABLE, ALWAYS],
    'react/jsx-closing-bracket-location': [ENABLE, {
      nonEmpty: 'line-aligned',
      selfClosing: 'line-aligned',
    }],
    'react/jsx-curly-spacing': [ENABLE, ALWAYS, {
      allowMultiline: true,
    }],
    'react/jsx-equals-spacing': [ENABLE, NEVER],
    'react/jsx-handler-names': [ENABLE, {
      eventHandlerPrefix: 'handle',
      eentHandlerPropPrefix: 'on',
    }],
    'react/jsx-indent-props': [ENABLE, INDENT_LENGTH_JSX],
    'react/jsx-indent': [ENABLE, INDENT_LENGTH_JSX],
    'react/jsx-key': ENABLE,
    'react/jsx-max-props-per-line': [ENABLE, {
      maximum: 1,
    }],
    'react/jsx-no-bind': [ENABLE, {
      ignoreRefs: false,
      allowArrowFunctions: false,
      allowBind: false,
    }],
    'react/jsx-no-duplicate-props': [ENABLE, {
      ignoreCase: false,
    }],
    'react/jsx-no-literals': ENABLE,
    'react/jsx-no-undef': ENABLE,
    'react/jsx-pascal-case': ENABLE,
    'react/jsx-sort-prop-types': [ENABLE, {
      ignoreCase: false,
      callbacksLast: true,
      requiredFirst: true,
    }],
    'react/jsx-sort-props': [ENABLE, {
      ignoreCase: false,
      callbacksLast: true,
      shorthandFirst: true,
    }],
    'react/jsx-uses-react': ENABLE,
    'react/jsx-uses-vars': ENABLE,
    'react/no-danger': ENABLE,
    'react/no-deprecated': ENABLE,
    'react/no-did-mount-set-state': ENABLE,
    'react/no-did-update-set-state': ENABLE,
    'react/no-direct-mutation-state': ENABLE,
    'react/no-is-mounted': ENABLE,
    'react/no-multi-comp': [ENABLE, {ignoreStateless: false}],
    'react/no-set-state': ENABLE,
    'react/no-string-refs': ENABLE,
    'react/no-unknown-property': ENABLE,
    'react/prefer-es6-class': [ENABLE, ALWAYS],
    'react/prop-types': ENABLE,
    'react/react-in-jsx-scope': ENABLE,
    'react/require-extension': ENABLE,
    'react/self-closing-comp': ENABLE,
    'react/sort-comp': ENABLE,
    'react/wrap-multilines': [ENABLE, {
      declaration: true,
      assignment: true,
      return: true,
    }],
    'comma-dangle': [ENABLE, 'always-multiline'],
    'no-cond-assign': [ENABLE, 'except-parens'],
    'no-console': ENABLE,
    'no-constant-condition': ENABLE,
    'no-control-regex': ENABLE,
    'no-debugger': ENABLE,
    'no-dupe-args': ENABLE,
    'no-dupe-keys': ENABLE,
    'no-duplicate-case': ENABLE,
    'no-empty-character-class': ENABLE,
    'no-empty': ENABLE,
    'no-ex-assign': ENABLE,
    'no-extra-boolean-cast': ENABLE,
    'no-extra-parens': DISABLE,
    'no-extra-semi': ENABLE,
    'no-func-assign': ENABLE,
    'no-inner-declarations': [ENABLE, 'both'],
    'no-invalid-regexp': ENABLE,
    'no-irregular-whitespace': ENABLE,
    'no-negated-in-lhs': ENABLE,
    'no-obj-calls': ENABLE,
    'no-regex-spaces': ENABLE,
    'no-sparse-arrays': ENABLE,
    'no-unexpected-multiline': ENABLE,
    'no-unreachable': ENABLE,
    'use-isnan': ENABLE,
    'valid-jsdoc': [ENABLE, {
      prefer: {
        return: 'return',
      },
      requireReturn: true,
      requireParamDescription: true,
      requireReturnDescription: true,
    }],
    'valid-typeof': ENABLE,
    'accessor-pairs': [ENABLE, {
      getWithoutSet: true,
    }],
    'block-scoped-var': ENABLE,
    'complexity': [ENABLE, MAX_COMPLEXITY],
    'consistent-return': ENABLE,
    'curly': [ENABLE, 'all'],
    'default-case': ENABLE,
    'dot-location': [ENABLE, 'object'],
    'dot-notation': [ENABLE, {
      allowKeywords: true,
    }],
    'eqeqeq': ENABLE,
    'guard-for-in': ENABLE,
    'no-alert': ENABLE,
    'no-caller': ENABLE,
    'no-case-declarations': ENABLE,
    'no-div-regex': ENABLE,
    'no-else-return': ENABLE,
    'no-empty-label': ENABLE,
    'no-empty-pattern': ENABLE,
    'no-eq-null': ENABLE,
    'no-eval': ENABLE,
    'no-extend-native': ENABLE,
    'no-extra-bind': ENABLE,
    'no-fallthrough': ENABLE,
    'no-floating-decimal': ENABLE,
    'no-implicit-coercion': [ENABLE, {
      boolean: true,
      number: true,
      string: true,
    }],
    'no-implied-eval': ENABLE,
    'no-invalid-this': ENABLE,
    'no-iterator': ENABLE,
    'no-labels': ENABLE,
    'no-lone-blocks': ENABLE,
    'no-loop-func': ENABLE,
    'no-magic-numbers': [ENABLE, {
      ignore: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
      enforceConst: false,
      detectObjects: false,
    }],
    'no-multi-spaces': [ENABLE, {
      exceptions: {
        Property: false,
      },
    }],
    'no-multi-str': ENABLE,
    'no-native-reassign': ENABLE,
    'no-new-func': ENABLE,
    'no-new-wrappers': ENABLE,
    'no-new': ENABLE,
    'no-octal-escape': ENABLE,
    'no-octal': ENABLE,
    'no-param-reassign': ENABLE,
    'no-process-env': ENABLE,
    'no-proto': ENABLE,
    'no-redeclare': [ENABLE, {
      builtinGlobals: true,
    }],
    'no-return-assign': [ENABLE, ALWAYS],
    'no-script-url': ENABLE,
    'no-self-compare': ENABLE,
    'no-sequences': ENABLE,
    'no-throw-literal': ENABLE,
    'no-unused-expressions': [ENABLE, {
      allowShortCircuit: false,
      allowTernary: false,
    }],
    'no-useless-call': ENABLE,
    'no-useless-concat': ENABLE,
    'no-void': ENABLE,
    'no-warning-comments': [ENABLE, {
      terms: ['todo', 'fixme', 'any other term'],
      location: 'anywhere',
    }],
    'no-with': ENABLE,
    'radix': ENABLE,
    'vars-on-top': ENABLE,
    'wrap-iife': [ENABLE, 'inside'],
    'yoda': [ENABLE, NEVER, {
      exceptRange: true,
    }],
    'strict': [ENABLE, 'global'],
    'init-declarations': [ENABLE, ALWAYS],
    'no-catch-shadow': DISABLE,
    'no-delete-var': ENABLE,
    'no-label-var': ENABLE,
    'no-shadow-restricted-names': ENABLE,
    'no-shadow': [ENABLE, {
      builtinGlobals: true,
      hoist: 'all',
      allow: [],
    }],
    'no-undef-init': ENABLE,
    'no-undef': [ENABLE, {
      typeof: true,
    }],
    'no-undefined': ENABLE,
    'no-unused-vars': [ENABLE, {
      vars: 'all',
      args: 'after-used',
    }],
    'no-use-before-define': [ENABLE, 'nofunc'],
    'callback-return': [ENABLE, ['callback', 'cb', 'next']],
    'global-require': ENABLE,
    'handle-callback-err': [ENABLE, '^(err|error)$'],
    'no-mixed-requires': [ENABLE, {
      grouping: true,
    }],
    'no-new-require': ENABLE,
    'no-path-concat': ENABLE,
    'no-process-exit': ENABLE,
    'no-restricted-modules': DISABLE,
    'no-sync': ENABLE,
    'array-bracket-spacing': [ENABLE, NEVER, {
      singleValue: false,
      objectsInArrays: false,
      arraysInArrays: false,
    }],
    'block-spacing': [ENABLE, NEVER],
    'brace-style': [ENABLE, '1tbs', {
      allowSingleLine: false,
    }],
    'camelcase': [ENABLE, {
      properties: ALWAYS,
    }],
    'comma-spacing': [ENABLE, {
      before: false,
      after: true,
    }],
    'comma-style': [ENABLE, 'last'],
    'computed-property-spacing': [ENABLE, NEVER],
    'consistent-this': [ENABLE, 'self'],
    'eol-last': [ENABLE, 'unix'],
    'func-names': ENABLE,
    'func-style': [ENABLE, 'declaration', {
      allowArrowFunctions: true,
    }],
    'id-length': [ENABLE, {
      min: ENABLE,
      properties: ALWAYS,
      exceptions: ['_'],
    }],
    'id-match': DISABLE,
    'indent': [ENABLE, INDENT_LENGTH, {
      SwitchCase: 1,
      VariableDeclarator: {
        var: 2,
        let: 2,
        const: 3,
      },
    }],
    'jsx-quotes': [ENABLE, 'prefer-double'],
    'key-spacing': [ENABLE, {
      beforeColon: false,
      afterColon: true,
      mode: 'strict',
    }],
    'linebreak-style': [ENABLE, 'unix'],
    'lines-around-comment': [ENABLE, {
      beforeBlockComment: true,
      afterBlockComment: false,
      beforeLineComment: true,
      afterLineComment: false,
      allowBlockStart: true,
      allowBlockEnd: true,
      allowObjectStart: true,
      allowObjectEnd: true,
      allowArrayStart: true,
      allowArrayEnd: true,
    }],
    'max-depth': [ENABLE, MAX_BLOCK_DEPTH],
    'max-len': [ENABLE, MAX_LINE_LENGTH, ENABLE, {
      ignoreComments: false,
      ignoreUrls: false,
    }],
    'max-nested-callbacks': [ENABLE, MAX_NESTED_CALLBACKS],
    'max-params': [ENABLE, MAX_FUNCTION_PARAMETERS],
    'max-statements': [ENABLE, MAX_STATEMENTS],
    'new-parens': ENABLE,
    'newline-after-var': [ENABLE, ALWAYS],
    'no-array-constructor': ENABLE,
    'no-bitwise': ENABLE,
    'no-continue': ENABLE,
    'no-inline-comments': ENABLE,
    'no-lonely-if': ENABLE,
    'no-mixed-spaces-and-tabs': ENABLE,
    'no-multiple-empty-lines': [ENABLE, {
      max: ENABLE,
      maxEOF: ENABLE,
    }],
    'no-negated-condition': ENABLE,
    'no-nested-ternary': ENABLE,
    'no-new-object': ENABLE,
    'no-plusplus': [ENABLE, {
      allowForLoopAfterthoughts: false,
    }],
    'no-restricted-syntax': DISABLE,
    'no-spaced-func': ENABLE,
    'no-ternary': DISABLE,
    'no-trailing-spaces': [ENABLE, {
      skipBlankLines: false,
    }],
    'no-underscore-dangle': DISABLE,
    'no-unneeded-ternary': [ENABLE, {
      defaultAssignment: false,
    }],
    'one-var': [ENABLE, NEVER],
    'operator-assignment': [ENABLE, ALWAYS],
    'operator-linebreak': [ENABLE, 'after'],
    'padded-blocks': [ENABLE, NEVER],
    'quote-props': [ENABLE, 'consistent-as-needed'],
    'quotes': [ENABLE, 'single'],
    'require-jsdoc': ENABLE,
    'semi-spacing': [ENABLE, {
      before: false,
      after: true,
    }],
    'semi': [ENABLE, NEVER],
    'sort-vars': [ENABLE, {
      ignoreCase: false,
    }],
    'space-after-keywords': [ENABLE, ALWAYS],
    'space-before-blocks': [ENABLE, {
      functions: ALWAYS,
      keywords: ALWAYS,
    }],
    'space-before-function-paren': [ENABLE, NEVER],
    'space-before-keywords': [ENABLE, ALWAYS],
    'space-in-parens': [ENABLE, NEVER, {
      exceptions: [],
    }],
    'space-infix-ops': [ENABLE, {
      int32Hint: false,
    }],
    'space-return-throw-case': ENABLE,
    'space-unary-ops': [ENABLE, {
      words: true,
      nonwords: false,
    }],
    'spaced-comment': [ENABLE, ALWAYS],
    'wrap-regex': ENABLE,
    'arrow-body-style': [ENABLE, ALWAYS],
    'arrow-spacing': [ENABLE, {
      before: true,
      after: true,
    }],
    'constructor-super': ENABLE,
    'no-arrow-condition': ENABLE,
    'no-class-assign': ENABLE,
    'no-const-assign': ENABLE,
    'no-dupe-class-members': ENABLE,
    'no-this-before-super': ENABLE,
    'no-var': ENABLE,
    'prefer-arrow-callback': ENABLE,
    'prefer-const': ENABLE,
    'prefer-reflect': ENABLE,
    'prefer-spread': ENABLE,
    'prefer-template': ENABLE,
    'require-yield': ENABLE,
  },
  settings: {
    react: {
      pragma: 'React',
    },
  },
}

