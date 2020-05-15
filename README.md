# frontity-storybook

This project was bootstrapped with [Frontity](https://frontity.org/).

# Steps used to create this repo.

`npx frontity create frontity-storybook`

`cd frontity-storybook`

`npx -p @storybook/cli sb init --type react`
npm run storybook
`npm run storybook`

- This works

THen modified the .storybook/main.js file to the mars-theme and moved the "stories" there.

`stories: ["../packages/mars-theme/src/**/*.stories.js"],`

- This works as well for very simple stories.

Then added a story that needs webpack.
`import Image from "@frontity/components/image";`

Get the error:
`ERROR in ./packages/mars-theme/src/stories/2-Button-broken.stories.js Module not found: Error: Can't resolve '@frontity/components/image'`

Storybook recommends using a custom webpack.

https://storybook.js.org/docs/configurations/custom-webpack-config/

Example replacing the loaders from storybook with the loaders from your app’s webpack.config.js
`
const path = require('path');

// your app's webpack.config.js
const custom = require('../webpack.config.js');

module.exports = {
webpackFinal: (config) => {
return { ...config, module: { ...config.module, rules: custom.module.rules } };
},
};
`

# Tasks

## Ensure Storybook is working correctly

When Running `npm run storybook`
There are five test stories. Please ensure they all work.

packages/mars-theme/src/stories/0-Welcome.stories.js
packages/mars-theme/src/stories/1-Button.stories.js
packages/mars-theme/src/stories/2-Button-broken.stories.js
packages/mars-theme/src/components/TailwindSample/TailwindSample.stories.mdx
packages/mars-theme/src/components/TailwindSample/TailwindSample.stories.js

## Add Structural Testing to storybook.

In storybook - https://storybook.js.org/docs/testing/structural-testing/

## Add jest Testing to storybook.

https://github.com/storybookjs/storybook/tree/master/addons/jest
