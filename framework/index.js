import * as snabbdom from "snabbdom";
import eventlisteners from "snabbdom/modules/eventlisteners";

const patch = snabbdom.init([eventlisteners]);

export const init = (selector, component) => {
  const app = document.querySelector(selector);
  if (app) {
    patch(app, component.template);
  } else {
    console.error(`Element with selector "${selector}" not found.`);
  }
};
