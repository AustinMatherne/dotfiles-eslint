const INDENT_LENGTH = 2
const INDENT_LENGTH_JSX = 4
const MAX_BLOCK_DEPTH = 4
const MAX_COMPLEXITY = 10
const MAX_FUNCTION_PARAMETERS = 3
const MAX_LINE_LENGTH = 80
const MAX_LINES = 500
const MAX_NESTED_CALLBACKS = 2
const MAX_STATEMENTS = 10
const MAX_STATEMENTS_PER_LINE = 1

module.exports = {
  env: {
    'browser': true,
    'node': true,
    'commonjs': true,
    'shared-node-browser': true,
    'es6': true,
    'worker': true,
    'amd': false,
    'mocha': true,
    'jasmine': false,
    'jest': false,
    'phantomjs': true,
    'protractor': false,
    'qunit': false,
    'jquery': false,
    'prototypejs': false,
    'shelljs': false,
    'meteor': false,
    'mongo': false,
    'applescript': false,
    'nashorn': false,
    'serviceworker': true,
    'atomtest': false,
    'embertest': false,
    'webextensions': true,
    'greasemonkey': true,
  },
  extends: [
    'eslint:recommended',
    'plugin:import/recommended',
    'plugin:react/recommended',
  ],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 2017,
    sourceType: 'module',
    ecmaFeatures: {
      globalReturn: false,
      impliedStrict: true,
      jsx: true,
      experimentalObjectRestSpread: true,
    },
  },
  plugins: [
    'babel',
    'flowtype',
    'import',
    'react',
  ],
  rules: {
    'generator-star-spacing': 'off',
    'babel/generator-star-spacing': ['error', 'before'],
    'new-cap': 'off',
    'babel/new-cap': ['error', {
      newIsCap: true,
      capIsNew: true,
    }],
    'array-bracket-spacing': 'off',
    'babel/array-bracket-spacing': ['error', 'never', {
      singleValue: false,
      objectsInArrays: false,
      arraysInArrays: false,
    }],
    'object-curly-spacing': 'off',
    'babel/object-curly-spacing': ['error', 'never', {
      objectsInObjects: false,
      arraysInObjects: false,
    }],
    'object-shorthand': 'off',
    'babel/object-shorthand': ['error', 'always'],
    'arrow-parens': 'off',
    'babel/arrow-parens': ['error', 'always'],
    'babel/no-await-in-loop': 'error',
    'babel/flow-object-type': ['error', 'semicolon'],
    'babel/func-params-comma-dangle': ['error', 'always-multiline'],
    'flowtype/boolean-style': ['error', 'boolean'],
    'flowtype/define-flow-type': 'error',
    'flowtype/delimiter-dangle': ['error', 'always-multiline'],
    'flowtype/generic-spacing': ['error', 'never'],
    'flowtype/no-dupe-keys': 'error',
    'flowtype/no-weak-types': ['error', {
      any: true,
      Object: true,
      Function: true,
    }],
    'flowtype/require-parameter-type': ['error', {
      excludeArrowFunctions: false,
    }],
    'flowtype/require-return-type': ['error', {
      excludeArrowFunctions: false,
    }],
    'flowtype/require-valid-file-annotation': ['error', 'always', {
      annotationStyle: 'block',
    }],
    'flowtype/semi': ['error', 'never'],
    'flowtype/sort-keys': ['error', {
      asc: {
        caseSensitive: true,
        natural: true,
      },
    }],
    'flowtype/space-after-type-colon': ['error', 'always'],
    'flowtype/space-before-generic-bracket': ['error', 'never'],
    'flowtype/space-before-type-colon': ['error', 'never'],
    'flowtype/type-id-match': 'error',
    'flowtype/union-intersection-spacing': ['error', 'always'],
    'flowtype/use-flow-type': 'error',
    'flowtype/valid-syntax': 'error',
    'import/no-unresolved': ['error', {
      commonjs: true,
      amd: true,
    }],
    'import/named': 'error',
    'import/default': 'error',
    'import/namespace': ['error', {
      allowComputed: false,
    }],
    'import/no-restricted-paths': 'off',
    'import/no-absolute-path': 'error',
    'import/no-dynamic-require': 'error',
    'import/no-internal-modules': 'off',
    'import/no-webpack-loader-syntax': 'error',
    'import/export': 'error',
    'import/no-named-as-default': 'error',
    'import/no-named-as-default-member': 'error',
    'import/no-deprecated': 'error',
    'import/no-extraneous-dependencies': ['error', {
      devDependencies: true,
      optionalDependencies: true,
      peerDependencies: true,
    }],
    'import/no-mutable-exports': 'error',
    'import/unambiguous': 'error',
    'import/no-commonjs': 'off',
    'import/no-amd': 'error',
    'import/no-nodejs-modules': 'off',
    'import/first': 'error',
    'import/no-duplicates': 'error',
    'import/no-namespace': 'error',
    'import/extensions': ['error', 'never'],
    'import/order': ['error', {
      'groups': [
        'builtin',
        'external',
        'internal',
        'parent',
        'sibling',
        'index',
      ],
      'newlines-between': 'never',
    }],
    'import/newline-after-import': 'error',
    'import/prefer-default-export': 'error',
    'import/max-dependencies': ['error', {
      max: 10,
    }],
    'import/no-unassigned-import': 'error',
    'react/display-name': ['error', {
      ignoreTranspilerName: true,
    }],
    'react/forbid-component-props': 'error',
    'react/forbid-prop-types': 'error',
    'react/no-children-prop': 'error',
    'react/no-danger': 'error',
    'react/no-danger-with-children': 'error',
    'react/no-deprecated': 'error',
    'react/no-did-mount-set-state': 'error',
    'react/no-did-update-set-state': 'error',
    'react/no-direct-mutation-state': 'error',
    'react/no-find-dom-node': 'error',
    'react/no-is-mounted': 'error',
    'react/no-multi-comp': ['error', {
      ignoreStateless: false,
    }],
    'react/no-render-return-value': 'error',
    'react/no-set-state': 'error',
    'react/no-string-refs': 'error',
    'react/no-unescaped-entities': 'error',
    'react/no-unknown-property': 'error',
    'react/no-unused-prop-types': 'error',
    'react/prefer-es6-class': ['error', 'always'],
    'react/prefer-stateless-function': 'error',
    'react/prop-types': 'error',
    'react/react-in-jsx-scope': 'error',
    'react/require-optimization': 'error',
    'react/require-render-return': 'error',
    'react/self-closing-comp': ['error', {
      component: true,
      html: true,
    }],
    'react/sort-comp': 'error',
    'react/sort-prop-types': ['error', {
      callbacksLast: true,
      ignoreCase: false,
      requiredFirst: true,
    }],
    'react/style-prop-object': 'error',
    'react/jsx-boolean-value': ['error', 'always'],
    'react/jsx-closing-bracket-location': ['error', {
      nonEmpty: 'line-aligned',
      selfClosing: 'line-aligned',
    }],
    'react/jsx-curly-spacing': ['error', 'always', {
      allowMultiline: true,
    }],
    'react/jsx-equals-spacing': ['error', 'never'],
    'react/jsx-filename-extension': 'error',
    'react/jsx-first-prop-new-line': ['error', 'multiline'],
    'react/jsx-handler-names': 'error',
    'react/jsx-indent': ['error', INDENT_LENGTH_JSX],
    'react/jsx-indent-props': ['error', INDENT_LENGTH_JSX],
    'react/jsx-key': 'error',
    'react/jsx-max-props-per-line': ['error', {
      maximum: 1,
    }],
    'react/jsx-no-bind': ['error', {
      ignoreRefs: false,
      allowArrowFunctions: false,
      allowBind: false,
    }],
    'react/jsx-no-comment-textnodes': 'error',
    'react/jsx-no-duplicate-props': ['error', {
      ignoreCase: false,
    }],
    'react/jsx-no-literals': 'error',
    'react/jsx-no-target-blank': 'error',
    'react/jsx-no-undef': 'error',
    'react/jsx-pascal-case': ['error', {
      allowAllCaps: false,
      ignore: [],
    }],
    'react/jsx-sort-props': ['error', {
      ignoreCase: false,
      callbacksLast: true,
      shorthandFirst: true,
      shorthandLast: false,
    }],
    'react/jsx-space-before-closing': ['error', 'never'],
    'react/jsx-uses-react': 'error',
    'react/jsx-uses-vars': 'error',
    'react/jsx-wrap-multilines': ['error', {
      declaration: true,
      assignment: true,
      return: true,
    }],
    'no-cond-assign': ['error', 'always'],
    'no-console': 'error',
    'no-constant-condition': ['error', {
      checkLoops: true,
    }],
    'no-control-regex': 'error',
    'no-debugger': 'error',
    'no-dupe-args': 'error',
    'no-dupe-keys': 'error',
    'no-duplicate-case': 'error',
    'no-empty-character-class': 'error',
    'no-empty': ['error', {
      allowEmptyCatch: false,
    }],
    'no-ex-assign': 'error',
    'no-extra-boolean-cast': 'error',
    'no-extra-parens': 'off',
    'no-extra-semi': 'error',
    'no-func-assign': 'error',
    'no-inner-declarations': ['error', 'both'],
    'no-invalid-regexp': 'error',
    'no-irregular-whitespace': 'error',
    'no-obj-calls': 'error',
    'no-prototype-builtins': 'error',
    'no-regex-spaces': 'error',
    'no-sparse-arrays': 'error',
    'no-template-curly-in-string': 'error',
    'no-unexpected-multiline': 'error',
    'no-unreachable': 'error',
    'no-unsafe-finally': 'error',
    'no-unsafe-negation': 'error',
    'use-isnan': 'error',
    'valid-jsdoc': ['error', {
      prefer: {
        return: 'returns',
      },
      preferType: {
        string: 'String',
        object: 'Object',
        test: 'Test',
      },
      requireReturn: true,
      requireParamDescription: true,
      requireReturnDescription: true,
      requireReturnType: true,
    }],
    'valid-typeof': ['error', {
      requireStringLiterals: true,
    }],
    'accessor-pairs': ['error', {
      getWithoutSet: true,
    }],
    'array-callback-return': 'error',
    'block-scoped-var': 'error',
    'class-methods-use-this': 'error',
    'complexity': ['error', {
      max: MAX_COMPLEXITY,
    }],
    'consistent-return': ['error', {
      treatUndefinedAsUnspecified: false,
    }],
    'curly': ['error', 'all'],
    'default-case': 'error',
    'dot-location': ['error', 'object'],
    'dot-notation': ['error', {
      allowKeywords: true,
    }],
    'eqeqeq': 'error',
    'guard-for-in': 'error',
    'no-alert': 'error',
    'no-caller': 'error',
    'no-case-declarations': 'error',
    'no-div-regex': 'error',
    'no-else-return': 'error',
    'no-empty-function': 'error',
    'no-empty-pattern': 'error',
    'no-eq-null': 'error',
    'no-eval': 'error',
    'no-extend-native': 'error',
    'no-extra-bind': 'error',
    'no-extra-label': 'error',
    'no-fallthrough': 'error',
    'no-floating-decimal': 'error',
    'no-global-assign': 'error',
    'no-implicit-coercion': ['error', {
      boolean: true,
      number: true,
      string: true,
    }],
    'no-implicit-globals': 'error',
    'no-implied-eval': 'error',
    'no-invalid-this': 'error',
    'no-iterator': 'error',
    'no-labels': ['error', {
      allowLoop: false,
      allowSwitch: false,
    }],
    'no-lone-blocks': 'error',
    'no-loop-func': 'error',
    'no-magic-numbers': ['error', {
      ignore: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
      ignoreArrayIndexes: false,
      enforceConst: false,
      detectObjects: false,
    }],
    'no-multi-spaces': ['error', {
      exceptions: {
        Property: false,
      },
    }],
    'no-multi-str': 'error',
    'no-new-func': 'error',
    'no-new-wrappers': 'error',
    'no-new': 'error',
    'no-octal-escape': 'error',
    'no-octal': 'error',
    'no-param-reassign': 'error',
    'no-proto': 'error',
    'no-redeclare': ['error', {
      builtinGlobals: true,
    }],
    'no-return-assign': ['error', 'always'],
    'no-script-url': 'error',
    'no-self-assign': ['error', {
      props: true,
    }],
    'no-self-compare': 'error',
    'no-sequences': 'error',
    'no-throw-literal': 'error',
    'no-unmodified-loop-condition': 'error',
    'no-unused-expressions': ['error', {
      allowShortCircuit: false,
      allowTernary: false,
    }],
    'no-unused-labels': 'error',
    'no-useless-call': 'error',
    'no-useless-concat': 'error',
    'no-useless-escape': 'error',
    'no-void': 'error',
    'no-warning-comments': ['error', {
      terms: ['todo', 'fixme', 'any other term'],
      location: 'anywhere',
    }],
    'no-with': 'error',
    'radix': 'error',
    'vars-on-top': 'error',
    'wrap-iife': ['error', 'inside', {
      functionPrototypeMethods: true,
    }],
    'yoda': ['error', 'never', {
      exceptRange: true,
    }],
    'strict': ['error', 'global'],
    'init-declarations': ['error', 'always'],
    'no-catch-shadow': 'off',
    'no-delete-var': 'error',
    'no-label-var': 'error',
    'no-restricted-globals': 'off',
    'no-shadow-restricted-names': 'error',
    'no-shadow': ['error', {
      builtinGlobals: true,
      hoist: 'all',
    }],
    'no-undef-init': 'error',
    'no-undef': ['error', {
      typeof: true,
    }],
    'no-undefined': 'error',
    'no-unused-vars': ['error', {
      vars: 'all',
      args: 'after-used',
      caughtErrors: 'all',
    }],
    'no-use-before-define': ['error', {
      functions: true,
      classes: true,
    }],
    'callback-return': ['error', ['callback', 'cb', 'next']],
    'global-require': 'error',
    'handle-callback-err': ['error', '^(err|error)$'],
    'no-mixed-requires': ['error', {
      grouping: true,
      allowCall: false,
    }],
    'no-new-require': 'error',
    'no-path-concat': 'error',
    'no-process-env': 'error',
    'no-process-exit': 'error',
    'no-restricted-modules': 'off',
    'no-restricted-properties': 'off',
    'no-sync': 'error',
    'block-spacing': ['error', 'never'],
    'brace-style': ['error', '1tbs', {
      allowSingleLine: false,
    }],
    'camelcase': ['error', {
      properties: 'always',
    }],
    'comma-dangle': ['error', 'always-multiline'],
    'comma-spacing': ['error', {
      before: false,
      after: true,
    }],
    'comma-style': ['error', 'last'],
    'computed-property-spacing': ['error', 'never'],
    'consistent-this': ['error', 'self'],
    'eol-last': ['error', 'unix'],
    'func-call-spacing': ['error', 'never'],
    'func-name-matching': ['error', {
      includeCommonJSModuleExports: true,
    }],
    'func-names': 'error',
    'func-style': ['error', 'declaration', {
      allowArrowFunctions: true,
    }],
    'id-blacklist': 'off',
    'id-length': ['error', {
      min: 2,
      properties: 'always',
      exceptions: ['_'],
    }],
    'id-match': 'off',
    'indent': ['error', INDENT_LENGTH, {
      SwitchCase: 1,
      VariableDeclarator: {
        var: 2,
        let: 2,
        const: 3,
      },
    }],
    'jsx-quotes': ['error', 'prefer-double'],
    'key-spacing': ['error', {
      beforeColon: false,
      afterColon: true,
      mode: 'strict',
    }],
    'keyword-spacing': ['error', {
      before: true,
      after: true,
    }],
    'line-comment-position': ['error', {
      position: 'above',
      applyDefaultPatterns: true,
    }],
    'linebreak-style': ['error', 'unix'],
    'lines-around-comment': ['error', {
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
    'lines-around-directive': ['error', {
      before: 'never',
      after: 'always',
    }],
    'max-depth': ['error', {
      max: MAX_BLOCK_DEPTH,
    }],
    'max-len': ['error', {
      code: MAX_LINE_LENGTH,
      comments: MAX_LINE_LENGTH,
      tabWidth: INDENT_LENGTH,
      ignoreComments: false,
      ignoreTrailingComments: false,
      ignoreUrls: false,
      ignoreStrings: false,
      ignoreTemplateLiterals: false,
    }],
    'max-lines': ['error', {
      max: MAX_LINES,
      skipBlankLines: true,
      skipComments: true,
    }],
    'max-nested-callbacks': ['error', {
      max: MAX_NESTED_CALLBACKS,
    }],
    'max-params': ['error', {
      max: MAX_FUNCTION_PARAMETERS,
    }],
    'max-statements-per-line': ['error', {
      max: MAX_STATEMENTS_PER_LINE,
    }],
    'max-statements': ['error', {
      max: MAX_STATEMENTS,
    }, {
      ignoreTopLevelFunctions: false,
    }],
    'multiline-ternary': ['error', 'never'],
    'new-parens': 'error',
    'newline-after-var': ['error', 'always'],
    'newline-before-return': 'error',
    'newline-per-chained-call': ['error', {
      ignoreChainWithDepth: 2,
    }],
    'no-array-constructor': 'error',
    'no-bitwise': ['error', {
      int32Hint: false,
    }],
    'no-continue': 'error',
    'no-inline-comments': 'error',
    'no-lonely-if': 'error',
    'no-mixed-operators': 'error',
    'no-mixed-spaces-and-tabs': 'error',
    'no-multiple-empty-lines': ['error', {
      max: 1,
      maxEOF: 1,
      maxBOF: 0,
    }],
    'no-negated-condition': 'error',
    'no-nested-ternary': 'error',
    'no-new-object': 'error',
    'no-plusplus': ['error', {
      allowForLoopAfterthoughts: false,
    }],
    'no-restricted-syntax': 'off',
    'no-tabs': 'error',
    'no-ternary': 'off',
    'no-trailing-spaces': ['error', {
      skipBlankLines: false,
    }],
    'no-underscore-dangle': ['error', {
      allowAfterThis: true,
      allowAfterSuper: true,
    }],
    'no-unneeded-ternary': ['error', {
      defaultAssignment: false,
    }],
    'no-whitespace-before-property': 'error',
    'object-curly-newline': ['error', {
      ObjectExpression: 'always',
      ObjectPattern: 'never',
    }],
    'object-property-newline': ['error', {
      allowMultiplePropertiesPerLine: false,
    }],
    'one-var-declaration-per-line': ['error', 'initializations'],
    'one-var': ['error', 'never'],
    'operator-assignment': ['error', 'always'],
    'operator-linebreak': ['error', 'after'],
    'padded-blocks': ['error', 'never'],
    'quote-props': ['error', 'consistent-as-needed'],
    'quotes': ['error', 'single'],
    'require-jsdoc': 'error',
    'semi-spacing': ['error', {
      before: false,
      after: true,
    }],
    'semi': ['error', 'never'],
    'sort-keys': ['error', 'asc', {
      caseSensitive: true,
      natural: false,
    }],
    'sort-vars': ['error', {
      ignoreCase: false,
    }],
    'space-before-blocks': ['error', {
      functions: 'always',
      keywords: 'always',
    }],
    'space-before-function-paren': ['error', 'never'],
    'space-in-parens': ['error', 'never'],
    'space-infix-ops': ['error', {
      int32Hint: false,
    }],
    'space-unary-ops': ['error', {
      words: true,
      nonwords: false,
    }],
    'spaced-comment': ['error', 'always', {
      block: {
        balanced: true,
      },
    }],
    'unicode-bom': ['error', 'never'],
    'wrap-regex': 'error',
    'arrow-body-style': ['error', 'always'],
    'arrow-spacing': ['error', {
      before: true,
      after: true,
    }],
    'constructor-super': 'error',
    'no-class-assign': 'error',
    'no-confusing-arrow': ['error', {
      allowParens: false,
    }],
    'no-const-assign': 'error',
    'no-dupe-class-members': 'error',
    'no-duplicate-imports': ['error', {
      includeExports: true,
    }],
    'no-new-symbol': 'error',
    'no-restricted-imports': 'off',
    'no-this-before-super': 'error',
    'no-useless-computed-key': 'error',
    'no-useless-constructor': 'error',
    'no-useless-rename': ['error', {
      ignoreImport: false,
      ignoreExport: false,
      ignoreDestructuring: false,
    }],
    'no-var': 'error',
    'prefer-arrow-callback': ['error', {
      allowNamedFunctions: false,
      allowUnboundThis: true,
    }],
    'prefer-const': ['error', {
      destructuring: 'any',
      ignoreReadBeforeAssign: false,
    }],
    'prefer-numeric-literals': 'error',
    'prefer-reflect': 'error',
    'prefer-rest-params': 'error',
    'prefer-spread': 'error',
    'prefer-template': 'error',
    'require-yield': 'error',
    'rest-spread-spacing': ['error', 'never'],
    'sort-imports': ['error', {
      ignoreCase: false,
      ignoreMemberSort: false,
      memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single'],
    }],
    'symbol-description': 'error',
    'template-curly-spacing': ['error', 'never'],
    'yield-star-spacing': ['error', {
      before: false,
      after: true,
    }],
  },
  settings: {
    flowtype: {
      onlyFilesWithFlowAnnotation: false,
    },
    react: {
      pragma: 'React',
    },
  },
}

