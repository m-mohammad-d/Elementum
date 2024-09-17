import { h } from "snabbdom/h";

const initialState = {
  template: "",
  on: {}, // This initial state property will help us manage event handlers in template literals
};

const createReducer = (args) => (acc, currentString, index) => {
  const currentArg = args[index];

  /**
   * Here, we define the behavior of an event node and this
   * is where the type is important :D
   */
  if (currentArg && currentArg.type === "event") {
    return { ...acc, on: { click: currentArg.click } };
  }

  return {
    ...acc,
    template: acc.template + currentString + (args[index] || ""),
  };
};

const createElement =
  (tagName) =>
  (strings, ...args) => {
    const { template, on } = strings.reduce(createReducer(args), initialState);

    return {
      type: "element",
      template: h(tagName, { on }, template), // the second argument concerns attributes, properties and events
    };
  };

export const div = createElement("div");
export const p = createElement("p");
