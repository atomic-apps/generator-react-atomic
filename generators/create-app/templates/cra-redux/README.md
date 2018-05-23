# Atomic React App with Redux


## Getting Started

Install the dependencies:

```
yarn install
```

Run the app:
```
yarn start
```

## Generating New Components
To generate a new component, we recommend using the built-in component generator. It reduces all the boilerplate work and generates all component files required in a standardized format

To generate a new component, simply run:
```
yo react-atomic:component
```
and answer the follow up questions about your component.

A few guidelines for determining which atomic level to place your component in:

| Element     | CSS Module  | Connected    |Test Coverage |Example Usage |
| ------------|:------------:|:------------:|:------------:|:------------:|
| Atom        |    Yes       | No           | Yes          | Button       |
| Molecule    |    Yes       | No           | Yes          | Search bar   |
| Organism    |    Yes       | Yes          | Yes          | Data table   |
| Template    |    Yes       | No           | Yes          |Two-column layout|
| Page        |    Yes       | Yes          | Yes          | Profile page |

### Atoms
Atoms are the lowest level building blocks of the application. They are not composed of sub-components -- rather they are typically representative of a single HTML element, styled a certain way. Think buttons, inputs, text elements, etc. Atoms are also not connected to state as they should be reusable given a set of props.

### Molecules
Molecules are typically composed of atoms. They are fairly low level components as well, but may combine a few smaller elements to form a more useful component. For example, a search bar -- which combines an input element and a button -- would be a good use case for a molecule. Molecules are also not connected to state as they should be reusable given a set of props.

### Organisms
Organisms are more complex in nature. They tend to be composed of several molecules and often require a data layer as well. These components are generated Redux-aware and are connected to state.

### Templates
Templates are used primarily for layouts. They are typically skeletons to place other elements in certain positions. Think about a two column layout, or a grid system. These components are not connected to state and should be reusable given a set of props.

### Pages
Pages are big sections of your app that typically contain several organisms. These are also connected to state, which may or may not be necessary depending on the use case. Pages are the highest level element and might often use templates to lay out organisms and molecules.


## Directory structure
Here's an overview of the generated app directory structure:

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

## Testing
Testing is implemented using the standard JEST-Cli interface exposed from Create React App. However, we've added [Airbnb's Enzyme](https://github.com/airbnb/enzyme) to the testing runner. Each component generated comes with basic test coverage.

To run tests locally:
```
yarn test --watchAll
```

Follow-up documentation to come.
