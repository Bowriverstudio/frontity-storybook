import React from "react";
import ReactDOM from "react-dom";
import { Provider, createStore } from "@frontity/connect";
import TailwindSample from "./TailwindSample";

// Mock store technique taken from frontity test suite: https://github.com/frontity/frontity/blob/83c5eadb4dffc6275fe4d93b8d379c21449a2727/packages/connect/src/__tests__/connect.tests.jsx#L11
const store = createStore({
  state: {
    // Sensible state value taken from https://github.com/frontity/frontity/blob/83c5eadb4dffc6275fe4d93b8d379c21449a2727/packages/components/__tests__/image.jsdom.tests.tsx#L57
    frontity: {
      rendering: "ssr",
    },
  },
});

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <Provider value={store}>
      <TailwindSample title="test" />
    </Provider>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
