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
import { VApp } from "vuetify/lib/components/VApp/index.mjs";
import { mount } from "cypress/vue";
import { h } from "vue";
// Ensure global styles are loaded
// import "../../src/assets/main.css";

Cypress.Commands.add("mount", (component: any, ...args: any) => {
  args.global = args.global || {};
  args.global.plugins = args.global.plugins || [];
  args.global.plugins.push(vuetify);

  return mount(() => {
    return h(VApp, {}, component);
  }, ...args);
});

// Example use:
// cy.mount(MyComponent)

Cypress.Commands.add("vue", () => {
  return cy.wrap(Cypress.vueWrapper);
});
