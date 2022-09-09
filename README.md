# Vite + Vue 3 + Vuetify 3 + TypeScript and more Starter

_VUETIFY 3 IS STILL IN BETA_

This opinionated template is intended for developers wanting to leverage the new Vuetify 3 UI Framework while it is in beta but want to leverage it in the latest and greatest Vue 3 tech stack. This template is primarily for VueJS app developers that work on tools for SaaS products that may or may not include Micro-Front End Architectures. However I have plans to add other features that will help ease scaffolding a modern Vite + Vue + Vuetify powered app.

## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) + [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) + [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) 

## Features

- Based on [vue-ts](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-vue-ts) template 
- [Vuetify 3](https://next.vuetifyjs.com/en/) of course!
- [Vue Router 4](https://router.vuejs.org/)
- VS Code settings configured for auto formatting on save!

### Testing
- [Vitest](https://vitest.dev/guide/) + [Cypress CT](https://docs.cypress.io/guides/component-testing/quickstart-vue) learn more about this combo [here](https://vitest.dev/guide/comparisons.html#cypress), both test runners configured and ready to go, Cypress configured for Vuetify and Vue Router out of the box!
- [Mock Service Worker](https://mswjs.io/) setup file already included
- c8 for code coverage out of box with Vitest already configured

### Linting
- [Prettier](https://prettier.io/docs/en/index.html)
- [ESLint](https://eslint.org/docs/latest/user-guide/getting-started)

### Scaffolding Components and Composables

In order to make it easier to maintain conventions and code patterns, scaffolding scripts have been added to this. The scripts will scaffold the necessary boilerplate for the type of file you want. The scaffold script will also provide the boilerplate for the accompanying unit test. 

The scripts actually take two arguments, separated by spaces. The first argument is the name of the file you wish to create, the second argument is a directory you want the file to be created in. By default if a second argument is not included, the file's directory (which is named after the file name you enter) will be created at the first level of the respective file type directory.

_**Mac Users read below for a caveat for your OS**_

Example:

To scaffold a component in it's own directory, simply execute `npm run new::component my-component-name`. 

The above command would create this new component directory as follows: 

```
/components
    /MyComponentName
        MyComponentName.spec.cy.ts
        MyComponentName.vue
```

To scaffold a component in an existing directory, execute `npm run new::component my-component-name ExistingComponent`

The above command would create this new component's files as follows:

```
/components
    /ExistingComponent
        ExistingComponent.spec.ct.ts
        ExistingComponent.vue
        MyComponentName.spec.ct.ts
        MyComponentName.vue
```

If you pass in a second argument for a directory and it does not exist, the second argument is ignored and the component is created in it's own directory. 

**- NOTE -** 

File names for scripts at the moment must be entered in a kebab-case style. Tweaks to the bash script are on going to make this name setting easier. If you are experienced with bash and have suggestions, please fork this template and summit a pull request to contribute. It will be greatly appreciated!

### Naming Conventions
Components - PascalCase, example `MyNewComponent`
Composables - camelCase prefixed with `use` example `useMyComposable`, you do not need to add use to the component scaffolding script, it will do this for you. 

To scaffold a composable you would execute `npm run new::composable example`

This will create a composable like so:
```
/composables
    /useExample
        useExample.test.ts
        useExample.ts
```

### Caveat for running the scaffolding scripts

There are scaffolding scripts for components and composables that make it easier to stay within the projects coding best practices. These scripts also name the generated files with the correct casing best-practice. In order to achieve this, on your Macbook you need to install the GNU sed binary. 

https://medium.com/@bramblexu/install-gnu-sed-on-mac-os-and-set-it-as-default-7c17ef1b8f64

---
## Roadmap
- Light state management store pattern using Reactive API
- Axios HTTP client helper - because still the king in my opinion.
