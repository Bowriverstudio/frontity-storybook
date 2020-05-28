import React from "react";
import { withKnobs, text } from "@storybook/addon-knobs/react";

import TailwindSample from "./TailwindSample";

export default {
  component: TailwindSample,
  title: "TailwindSample",
  decorators: [withKnobs],
  // Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/
};

export const actionsData = {};

export const Default = () => (
  <TailwindSample title={text("Title Attribute", "Title")} {...actionsData} />
);
Default.story = {
  parameters: {
    jest: ["TailwindSample.test.js"]
  }
};

const longTitleString = `This task's name is absurdly large. In fact, I think if I keep going I might end up with content overflow. What will happen? The star that represents a pinned task could have text overlapping. The text could cut-off abruptly when it reaches the star. I hope not!`;

export const LongTitle = () => (
  <TailwindSample
    title={text("Title Attribute", longTitleString)}
    {...actionsData}
  />
);
