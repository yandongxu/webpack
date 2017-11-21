module.exports = {
  "helpers": {
    "if_or": function (v1, v2, options) {
      if (v1 || v2) {
        return options.fn(this);
      }

      return options.inverse(this);
    }
  },
  "prompts": {
    "name": {
      "type": "string",
      "required": true,
      "message": "Project name"
    },
    "description": {
      "type": "string",
      "required": false,
      "message": "Project description",
      "default": "A Vue.js project"
    },
    "author": {
      "type": "string",
      "message": "Author"
    },
    "router": {
      "type": "confirm",
      "message": "Install vue-router?"
    },
    "vuex": {
      "type": "confirm",
      "message": "Install vue-vuex?"
    },
    "i18n": {
      "type": "confirm",
      "message": "Install vue-i18n?"
    },
    "lint": {
      "type": "confirm",
      "message": "Use ESLint to lint your code? (Airbnb preset)"
    },
    "unit": {
      "type": "confirm",
      "message": "Setup unit tests"
    },
    "runner": {
      "when": "unit",
      "type": "list",
      "message": "Pick a test runner",
      "choices": [
        {
          "name": "Jest",
          "value": "jest",
          "short": "jest"
        },
        {
          "name": "Karma and Mocha",
          "value": "karma",
          "short": "karma"
        },
        {
          "name": "none (configure it yourself)",
          "value": "noTest",
          "short": "noTest"
        }
      ]
    },
    "e2e": {
      "type": "confirm",
      "message": "Setup e2e tests with Nightwatch?"
    }
  },
  "filters": {
    ".eslintrc.js": "lint",
    ".eslintignore": "lint",
    "config/test.env.js": "unit || e2e",
    "test/unit/**/*": "unit",
    "test/unit/index.js": "unit && runner === 'karma'",
    "test/unit/karma.conf.js": "unit && runner === 'karma'",
    "test/unit/specs/index.js": "unit && runner === 'karma'",
    "test/unit/setup.js": "unit && runner === 'jest'",
    "test/e2e/**/*": "e2e",
    "src/router/**/*": "router",
    "src/store/**/*": "vuex",
    "src/i18n/**/*": "i18n"
  },
  "completeMessage": "To get started:\n\n  {{^inPlace}}cd {{destDirName}}\n  {{/inPlace}}npm install\n  npm run dev\n\nDocumentation can be found at https://vuejs-templates.github.io/webpack"
};
