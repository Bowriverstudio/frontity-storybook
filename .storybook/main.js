module.exports = {
  stories: ["../packages/mars-theme/src/**/*.stories.js"],
  addons: [
    "@storybook/preset-typescript",
    "@storybook/addon-actions",
    "@storybook/addon-links",
  ],
  webpackFinal: (config) => {
    const tsRule = config.module.rules.find((rule) => /ts/.test(rule.test));
    delete tsRule.include;
    delete tsRule.exclude;
    return config;
  },
};
