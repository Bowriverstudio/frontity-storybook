import React from "react";
import ReactDOM from "react-dom";
import TailwindSample from "./TailwindSample";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<TailwindSample title="test" />, div);
  ReactDOM.unmountComponentAtNode(div);
});
