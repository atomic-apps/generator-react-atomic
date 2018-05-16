# generator-react-atomic
Generate React components following the patterns of Atomic Design

## Introduction
[TODO]

## Features
[TODO]

## Getting Started

First, install Yeoman if you don't have it already: `npm install -g yo`

Then install the generator: `npm install -g generator-react-atomic`

Follow the prompts to establish your default settings and preferences.

## Usage

### Generating a CRA app with Redux
`yo react-atomic:create-app`


### Generating a new React component
Our component generator is designed to work with the app generator. It also enforces the principles of
atomic design, and each component should be categorized as one of the following -- atom, molecule, organism, template, or page.

To generate a new component, run:
`yo react-atomic:component`


## File Structure
When generating a new app with the `yo react-atomic:create-app` command, we create get the following file structure:

```
├── public
├── src
│	 ├── components
│	 │   └── core
│	 │	     └── atoms
│	 │	     └── molecules
│	 │	     └── organisms
│	 │	     └── templates
│	 │	     └── pages
│	 │	     └── app
│	 │	         └── App.jsx <-- top level app mounts here
│	 │   └── anotherApp
│	 │	     └── ...
│	 ├── reducers  
│	 │   └── anotherApp    <-- all reducers related to anotherApp go here
│	 │   └── root          <-- root reducer which combines and exports all reducers
│	 │   └── store.js      <-- creates the redux store-provider, binds thunk, and injects combined reducers from reducers/index.js
│	 ├── actions  
│	 │   └── anotherApp    <-- actions and constants related to anotherApp in here
├── package.json
```

This is the structure assumed also by the component generator. By default all components will be generated in their respective element folder within `src/components/core` unless otherwise specified.

Generally, we recommend creating a new folder within `components/` for each major section of your app. Components which are generic enough to be used globally in your app belong in `core/`.

To update the default directory used by the component generator, run `yo react-atomic init`, and you will be prompted to update your generator settings.

## Types of Components
There are 5 atomic elements which we mirror components after. There are no strict rules, but here are a few guidelines for determining which atomic level to place your component in:

| Element     | Styles Incl  | Connected    |Example Usage |
| ------------|:------------:|:------------:|:------------:|
| Atom        |    Yes       | No           | Button       |
| Molecule    |    Yes       | No           | Search bar   |
| Organism    |    Yes       | Yes          | Data table   |
| Template    |    Yes       | No           |Two-column layout|
| Page        |    Yes       | Yes          | Profile page |


#### Atoms
Atoms are the lowest level building blocks of the application. They are not composed of sub-components -- rather they are typically representative of a single HTML element, styled a certain way. Think buttons, inputs, text elements, etc. Atoms are also not connected to state as they should be reusable given a set of props.

#### Molecules
Molecules are built on top of atoms. They are fairly low level components as well, but may combine a few smaller elements to form a more useful component. For example, a search bar -- which combines an input element and a button -- would be a good use case for a molecule. Molecules are also not connected to state as they should be reusable given a set of props.

#### Organisms
Organisms are more complex in nature. They tend to combine several molecules together and require a data layer as well. These components are generated Redux-aware and are connected to state.

#### Templates
Templates are used primarily for layouts. They are typically skeletons to place other elements in certain positions. Think about a two column layout, or a grid system. These components are not connected to state and should be reusable given a set of props.

#### Pages
Pages are big sections of your app that typically contain several organisms. These are also connected to state, which may or may not be necessary depending on the use case. Pages are the highest level element and might often use templates to lay out organisms and molecules.


## Testing
Testing is implemented using the standard JEST-Cli interface exposed from Create React App. However, we've added airbnb's `Enzyme` to the testing runner.  TODO write followup documentation
