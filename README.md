# generator-react-atomic
> A [Yeoman](http://yeoman.io) generator for [React](http://facebook.github.io/react/) apps and components following the patterns of [Atomic Design](http://bradfrost.com/blog/post/atomic-web-design/)

[![npm](https://img.shields.io/npm/v/npm.svg)](https://www.npmjs.com/package/generator-react-atomic)



## Introduction
The React Atomic Generator can be used to create new React projects or to create new components for an existing project.
Our app generator is an extension of Facebook's [Create React App (v1.1.4)](https://github.com/facebook/create-react-app/releases).
We have layered the principles of Atomic Design into the app's directory structure and also included a few key features, such as Redux, which are commonly required for apps and otherwise require a manual integration.


## Features
Why use the Atomic React App over Facebook's Create React App?

Because it comes with more, which means less setup for you. We've taken the CRA and layered in a few extra pieces that make setting up a fully functional app even easier. Here's what comes out of the box:

| Feature     | Version  | Description    |
| ------------|:------------:|------------|
| [Create React App](https://github.com/facebook/create-react-app/)   |    1.1.4       | Base React app structure |
| [Redux](https://redux.js.org/)                                      |    ^3.7.2      | State container and data layer for the app |
| [Redux Thunk](https://github.com/reduxjs/redux-thunk)               |   ^2.2.0    | Middleware to write action creators and perform asynchronous requests |
| [PropTypes](https://github.com/facebook/prop-types)                 |  ^15.6.0    | Prop type verification for components |
| [CSS Modules](https://github.com/css-modules/css-modules)           |  ^4.7.1   | Stylesheet solution for creating locally scoped styles for each component |
| [Enzyme & Enzyme Adaptor](https://github.com/airbnb/enzyme)         |  ^3.2.0   | Suite of convenient testing utilities for components |


## Why Atomic Design?

Atomic Design at its core is a model for designing systems.

There are 5 levels of Atomic Design -- atoms, molecules, organisms, templates, and pages -- which also happen to align
well with the modular and composable design of React components.

By categorizing every component into one of these 5 levels, we are able to establish a level of consistency across the application and a shared language among contributors. Each level has unique properties that serve as a helpful guide
in determining the scope, structure, and usage of a component. [Read more on the types of components](#types-of-components) and how we use them.

## Getting Started

First, you will need the following prerequisites:
- [Node](https://nodejs.org/en/) v6 or higher (you can use [nvm](https://github.com/creationix/nvm#installation) to easily switch Node versions between different projects)
- [Yeoman](http://yeoman.io/) - to install, run `npm install -g yo`

Then install the generator:
```
npm install -g generator-react-atomic
```

Now you will be able to generate apps and components!

## Usage

### Generating a new React App with Redux
```
yo react-atomic:create-app
```


### Generating a new React component
Our component generator is designed to work with the app generator. It also enforces the principles of
atomic design, and each component should be categorized as one of the following -- atom, molecule, organism, template, or page.

To generate a new component, run:
```
yo react-atomic:component
```

Then follow the CLI prompts.


## Directory Structure
When generating a new app with the `yo react-atomic:create-app` command, we create get the following file structure:

```bash
├── public/                          # contains the main index.js with root for app to mount on
├── src/                             # all React code lives in here
│  ├── components/                   # top level directory for all components
│  │   ├── core/                     # core is the default directory for components, typically for components with global app usage
│  │      ├── atoms/                 # core atom components directory
│  │      ├── molecules/             # core molecule components directory
│  │      ├── organisms/             # core organism components directory
│  │      ├── templates/             # core template components directory
│  │      ├── pages/                 # core page components directory
│  │      └── app/                   # single directory for the primary App component
│  │          ├── App.jsx            # top level App mounts here
│  │          ├── app.module.css     # CSS module for App
│  │          ├── App.test.js        # tests for App
│  │   └── sampleApp/                # example of another key part of the app, which will contain all components pertaining to that app
│  │      └── ...                    # atoms, molecules, organisms, etc for sampleApp go here
│  ├── reducers/
│  │   ├── sampleApp                 # all reducers related to sampleApp go here
│  │   ├── root                      # root reducer which combines and exports all reducers
│  │   └── store.js                  # creates the redux store-provider, binds thunk, and injects combined reducers from reducers/index.js
│  ├── actions/
│  │   └── sampleApp/                # actions and constants related to sampleApp in here
├── package.json
└── README.md
```

This is the structure assumed also by the component generator. By default all components will be generated in their respective element folder within `src/components/core` unless otherwise specified.

Generally, we recommend creating a new folder within `components/` for each major section of your app. Components which are generic enough to be used globally in your app belong in `core/`.

## Types of Components
There are 5 atomic elements which we mirror components after. There are no strict rules, but here are a few guidelines for determining which atomic level to place your component in:

| Element     | CSS Module  | Connected    |Test Coverage |Example Usage |
| ------------|:------------:|:------------:|:------------:|:------------:|
| Atom        |    Yes       | No           | Yes          | Button       |
| Molecule    |    Yes       | No           | Yes          | Search bar   |
| Organism    |    Yes       | Yes          | Yes          | Data table   |
| Template    |    Yes       | No           | Yes          |Two-column layout|
| Page        |    Yes       | Yes          | Yes          | Profile page |


#### Atoms
Atoms are the lowest level building blocks of the application. They are not composed of sub-components -- rather they are typically representative of a single HTML element, styled a certain way. Think buttons, inputs, text elements, etc. Atoms are also not connected to state as they should be reusable given a set of props.

#### Molecules
Molecules are typically composed of atoms. They are fairly low level components as well, but may combine a few smaller elements to form a more useful component. For example, a search bar -- which combines an input element and a button -- would be a good use case for a molecule. Molecules are also not connected to state as they should be reusable given a set of props.

#### Organisms
Organisms are more complex in nature. They tend to be composed of several molecules and often require a data layer as well. These components are generated Redux-aware and are connected to state.

#### Templates
Templates are used primarily for layouts. They are typically skeletons to place other elements in certain positions. Think about a two column layout, or a grid system. These components are not connected to state and should be reusable given a set of props.

#### Pages
Pages are big sections of your app that typically contain several organisms. These are also connected to state, which may or may not be necessary depending on the use case. Pages are the highest level element and might often use templates to lay out organisms and molecules.


## Testing
Testing is implemented using the standard JEST-Cli interface exposed from Create React App. However, we've added [Airbnb's Enzyme](https://github.com/airbnb/enzyme) to the testing runner. Each component generated comes with basic test coverage.

To run tests locally:
```
yarn test --watchAll
```

Follow-up documentation to come.

## Up Next
Features that we plan to build in next include:
- SASS support
- Generator for reducers
- Styled components
- Generator for `reselect` selectors
- API layer support
