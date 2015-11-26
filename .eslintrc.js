module.exports = {
  "ecmaFeatures": {
    "arrowFunctions": true,
    "binaryLiterals": true,
    "blockBindings": true,
    "classes": true,
    "defaultParams": true,
    "destructuring": true,
    "forOf": true,
    "generators": true,
    "modules": true,
    "objectLiteralComputedProperties": true,
    "objectLiteralDuplicateProperties": true,
    "objectLiteralShorthandMethods": true,
    "objectLiteralShorthandProperties": true,
    "octalLiterals": true,
    "regexUFlag": true,
    "regexYFlag": true,
    "restParams": true,
    "spread": true,
    "superInFunctions": true,
    "templateStrings": true,
    "unicodeCodePointEscapes": true,
    "globalReturn": false,
    "jsx": true,
    "experimentalObjectRestSpread": true
  },
  "env": {
    "browser": true,
    "node": true,
    "commonjs": true,
    "worker": true,
    "amd": false,
    "mocha": true,
    "jasmine": false,
    "jest": false,
    "phantomjs": true,
    "protractor": false,
    "qunit": false,
    "jquery": false,
    "prototypejs": false,
    "shelljs": false,
    "meteor": false,
    "mongo": false,
    "applescript": false,
    "nashorn": false,
    "serviceworker": true,
    "embertest": false,
    "webextensions": true,
    "es6": true
  },
  "parser": "babel-eslint",
  "plugins": [
    "babel",
    "react"
  ],
  "rules": {
    "generator-star-spacing": 0,
    "babel/generator-star-spacing": [2, "before"],
    "new-cap": 0,
    "babel/new-cap": [2, {
      "newIsCap": true,
      "capIsNew": true
    }],
    "object-curly-spacing": 0,
    "babel/object-curly-spacing": [2, "never", {
      "objectsInObjects": true,
      "arraysInObjects": true
    }],
    "object-shorthand": 0,
    "babel/object-shorthand": [2, "always"],
    "arrow-parens": 0,
    "babel/arrow-parens": [2, "always"],
    "babel/no-await-in-loop": 2,
    "react/display-name": 2,
    "react/forbid-prop-types": 2,
    "react/jsx-boolean-value": [2, "always"],
    "react/jsx-closing-bracket-location": [2, {
      "nonEmpty": "line-aligned",
      "selfClosing": "line-aligned"
    }],
    "react/jsx-curly-spacing": [2, "always", {
      "allowMultiline": true
    }],
    "react/jsx-indent-props": [2, 4],
    "react/jsx-key": 2,
    "react/jsx-max-props-per-line": [2, {
      "maximum": 1
    }],
    "react/jsx-no-bind": 2,
    "react/jsx-no-duplicate-props": [2, {
      "ignoreCase": false
    }],
    "react/jsx-no-literals": 2,
    "react/jsx-pascal-case": 2,
    "react/jsx-no-undef": 2,
    "react/jsx-sort-prop-types": [2, {
      "callbacksLast": true,
      "ignoreCase": false
    }],
    "react/jsx-sort-props": [2, {
      "callbacksLast": true,
      "ignoreCase": false
    }],
    "react/jsx-uses-react": 2,
    "react/jsx-uses-vars": 2,
    "react/no-danger": 2,
    "react/no-did-mount-set-state": 2,
    "react/no-did-update-set-state": 2,
    "react/no-direct-mutation-state": 2,
    "react/no-multi-comp": [2, {"ignoreStateless": false}],
    "react/no-set-state": 2,
    "react/no-unknown-property": 2,
    "react/prop-types": 2,
    "react/react-in-jsx-scope": 2,
    "react/require-extension": 2,
    "react/self-closing-comp": 2,
    "react/sort-comp": 2,
    "react/wrap-multilines": [2, {
      "declaration": true,
      "assignment": true,
      "return": true
    }],
    "prefer-es6-class": 2,
    "comma-dangle": [2, "always-multiline"],
    "no-cond-assign": [2, "except-parens"],
    "no-console": 2,
    "no-constant-condition": 2,
    "no-control-regex": 2,
    "no-debugger": 2,
    "no-dupe-args": 2,
    "no-dupe-keys": 2,
    "no-duplicate-case": 2,
    "no-empty-character-class": 2,
    "no-empty": 2,
    "no-ex-assign": 2,
    "no-extra-boolean-cast": 2,
    "no-extra-parens": 0,
    "no-extra-semi": 2,
    "no-func-assign": 2,
    "no-inner-declarations": [2, "both"],
    "no-invalid-regexp": 2,
    "no-irregular-whitespace": 2,
    "no-negated-in-lhs": 2,
    "no-obj-calls": 2,
    "no-regex-spaces": 2,
    "no-sparse-arrays": 2,
    "no-unreachable": 2,
    "use-isnan": 2,
    "valid-jsdoc": [2, {
      "prefer": {
        "return": "return"
      },
      "requireReturn": true,
      "requireParamDescription": true,
      "requireReturnDescription": true
    }],
    "valid-typeof": 2,
    "no-unexpected-multiline": 2,
    "accessor-pairs": [2, {
      getWithoutSet: true
    }],
    "block-scoped-var": 2,
    "complexity": [2, 10],
    "consistent-return": 2,
    "curly": [2, "all"],
    "default-case": 2,
    "dot-notation": [2, {
      "allowKeywords": true
    }],
    "dot-location": [2, "object"],
    "eqeqeq": 2,
    "guard-for-in": 2,
    "no-alert": 2,
    "no-caller": 2,
    "no-case-declarations": 2,
    "no-div-regex": 2,
    "no-else-return": 2,
    "no-empty-label": 2,
    "no-empty-pattern": 2,
    "no-eq-null": 2,
    "no-eval": 2,
    "no-extend-native": 2,
    "no-extra-bind": 2,
    "no-fallthrough": 2,
    "no-floating-decimal": 2,
    "no-implicit-coercion": [2, {
      "boolean": true,
      "number": true,
      "string": true
    }],
    "no-implied-eval": 2,
    "no-invalid-this": 2,
    "no-iterator": 2,
    "no-labels": 2,
    "no-lone-blocks": 2,
    "no-loop-func": 2,
    "no-magic-numbers": [2, {
      "ignore": [0, 1, 2],
      "enforceConst": true,
      "detectObjects": true
    }],
    "no-multi-spaces": [2, {
      exceptions: {
        "Property": false
      }
    }],
    "no-multi-str": 2,
    "no-native-reassign": 2,
    "no-new-func": 2,
    "no-new-wrappers": 2,
    "no-new": 2,
    "no-octal-escape": 2,
    "no-octal": 2,
    "no-param-reassign": 2,
    "no-process-env": 2,
    "no-proto": 2,
    "no-redeclare": [2, {
      "builtinGlobals": true
    }],
    "no-return-assign": [2, "always"],
    "no-script-url": 2,
    "no-self-compare": 2,
    "no-sequences": 2,
    "no-throw-literal": 2,
    "no-unused-expressions": [2, {
      "allowShortCircuit": false,
      "allowTernary": false
    }],
    "no-useless-call": 2,
    "no-useless-concat": 2,
    "no-void": 2,
    "no-warning-comments": [2, {
      "terms": ["todo", "fixme", "any other term"],
      "location": "anywhere"
    }],
    "no-with": 2,
    "radix": 2,
    "vars-on-top": 2,
    "wrap-iife": [2, "inside"],
    "yoda": [2, "never", {
      "exceptRange": true
    }],
    "strict": [2, "global"],
    "init-declarations": [2, "always"],
    "no-catch-shadow": 0,
    "no-delete-var": 2,
    "no-label-var": 2,
    "no-shadow-restricted-names": 2,
    "no-shadow": [2, {
      "builtinGlobals": true,
      "hoist": "all",
      "allow": []
    }],
    "no-undef-init": 2,
    "no-undef": [2, {
      "typeof": true
    }],
    "no-undefined": 2,
    "no-unused-vars": [2, {
      "vars": "all",
      "args": "all"
    }],
    "no-use-before-define": 2,
    "callback-return": [2, ["callback", "cb", "next"]],
    "global-require": 2,
    "handle-callback-err": [2, "^(err|error)$"],
    "no-mixed-requires": [2, {
      "grouping": true
    }],
    "no-new-require": 2,
    "no-path-concat": 2,
    "no-process-exit": 2,
    "no-restricted-modules": 0,
    "no-sync": 2,
    "array-bracket-spacing": [2, "never", {
      "singleValue": true,
      "objectsInArrays": true,
      "arraysInArrays": true
    }],
    "block-spacing": [2, "never"],
    "brace-style": [2, "1tbs", {
      "allowSingleLine": false
    }],
    "camelcase": [2, {
      "properties": "always"
    }],
    "comma-spacing": [2, {
      "before": false,
      "after": true
    }],
    "comma-style": [2, "last"],
    "computed-property-spacing": [2, "never"],
    "consistent-this": [2, "self"],
    "eol-last": [2, "unix"],
    "func-names": 2,
    "func-style": [2, "declaration", {
      "allowArrowFunctions": true
    }],
    "id-length": [2, {
      "min": 2,
      "properties": "always"
    }],
    "id-match": 0,
    "indent": [2, 2, {
      "SwitchCase": 1,
      "VariableDeclarator": 1
    }],
    "jsx-quotes": [2, "prefer-double"],
    "key-spacing": [2, {
      "beforeColon": false,
      "afterColon": true,
      "mode": "strict"
    }],
    "lines-around-comment": [2, {
      "beforeBlockComment": true,
      "afterBlockComment": false,
      "beforeLineComment": true,
      "afterLineComment": false,
      "allowBlockStart": true,
      "allowBlockEnd": true,
      "allowObjectStart" : true,
      "allowObjectEnd" : true,
      "allowArrayStart" : true,
      "allowArrayEnd" : true
    }],
    "linebreak-style": [2, "unix"],
    "max-nested-callbacks": [2, 2],
    "new-parens": 2,
    "newline-after-var": [2, "always"],
    "no-array-constructor": 2,
    "no-continue": 2,
    "no-inline-comments": 2,
    "no-lonely-if": 2,
    "no-mixed-spaces-and-tabs": 2,
    "no-multiple-empty-lines": [2, {
      "max": 2,
      "maxEOF": 1
    }],
    "no-nested-ternary": 2,
    "no-negated-condition": 2,
    "no-new-object": 2,
    "no-restricted-syntax": 0,
    "no-spaced-func": 2,
    "no-ternary": 0,
    "no-trailing-spaces": [2, {
      "skipBlankLines": false
    }],
    "no-underscore-dangle": 0,
    "no-unneeded-ternary": [2, {
      "defaultAssignment": false
    }],
    "one-var": [2, "always"],
    "operator-assignment": [2, "always"],
    "operator-linebreak": [2, "after"],
    "padded-blocks": [2, "never"],
    "quote-props": [2, "as-needed", {
      "keywords": false,
      "numbers": false,
      "unnecessary": true
    }],
    "quotes": [2, "single"],
    "require-jsdoc":  2,
    "semi-spacing": [2, {
      "before": false,
      "after": true
    }],
    "semi": [2, "always"],
    "sort-vars": [2, {
      "ignoreCase": false
    }],
    "space-after-keywords": [2, "always"],
    "space-before-keywords": [2, "always"],
    "space-before-blocks": [2, {
      "functions": "always",
      "keywords": "always"
    }],
    "space-before-function-paren": [2, "never"],
    "space-in-parens": [2, "always", {
      "exceptions": ["{}", "[]", "()", "empty"]
    }],
    "space-infix-ops": [2, {
      "int32Hint": false
    }],
    "space-return-throw-case": 2,
    "space-unary-ops": [1, {
      "words": true,
      "nonwords": false
    }],
    "spaced-comment": [2, "always"],
    "wrap-regex": 2,
    "arrow-body-style": [2, "as-needed"],
    "arrow-spacing": [2, {
      "before": true,
      "after": true
    }],
    "constructor-super": 2,
    "no-arrow-condition": 2,
    "no-class-assign": 2,
    "no-const-assign": 2,
    "no-dupe-class-members": 2,
    "no-this-before-super": 2,
    "no-var": 2,
    "prefer-arrow-callback": 2,
    "prefer-const": 2,
    "prefer-spread": 2,
    "prefer-reflect": 2,
    "prefer-template": 2,
    "require-yield": 2,
    "max-depth": [2, 4],
    "max-len": [2, 80, 2, {
      "ignoreComments": false,
      "ignoreUrls": false
    }],
    "max-params": [2, 3],
    "max-statements": [2, 10],
    "no-bitwise": 2,
    "no-plusplus": [2, {
      "allowForLoopAfterthoughts": false
    }]
  }
}
