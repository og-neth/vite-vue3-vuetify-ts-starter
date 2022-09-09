// ***********************************************************
// This example support/component.ts is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import "./commands";

// Alternatively you can use CommonJS syntax:
// require('./commands')

import vuetify from "../../src/plugins/vuetify";
import { mount } from "cypress/vue";
import { createMemoryHistory, createRouter } from "vue-router";
import { routes } from "../../src/router";
// Ensure global styles are loaded
import "@mdi/font/css/materialdesignicons.css";

Cypress.Commands.add("mount", (component, options = {}) => {
  const root = document.getElementById("cy-root");

  // add the v-application class that allows Vuetify styles to work
  if (!root?.classList.contains("v-locale--is-rtl")) {
    root?.classList.add("v-locale--is-ltr");
  }

  // create router if one is not provided
  if (!options.router) {
    options.router = createRouter({
      routes: routes,
      history: createMemoryHistory(),
    });
  }

  const defaultOptions = {
    global: {
      stubs: {
        transition: false,
        "transition-group": false,
      },
      plugins: [
        {
          install(app: any) {
            app.use(options.router);
          },
        },
        vuetify,
      ],
      ...options,
    },
  };

  return mount(component, defaultOptions).as("wrapper");
});

// Example use:
// cy.mount(MyComponent)

Cypress.Commands.add("vue", () => {
  return cy.get("@wrapper");
});
