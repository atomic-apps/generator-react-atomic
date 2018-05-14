# Atomic React App with Redux


## Getting Started

Install the dependencies:

```
npm install
```

Run the app:
```
npm start
```

## Components structure

This app comes with a few boilerplate components located in the `src/components/core` directory.
Within this directory, components are broken out into one of the following categories:

### Atoms

### Molecules

### Organisms

### Templates

### Pages




## Generating New Components
To generate a new component, we recommend using the built in component generator. It reduces all the boiler plate work and generates all component files required in a standardized format.

To generate a new component, simply run:
```
yo react-atomic:component
```
and answer the follow up questions about your component.

A few guidelines for determining which atomic level to place your component in:

| Element     | Styles Incl  | Connected    |Example Usage |
| ------------|:------------:|:------------:|:------------:|
| Atom        |    Yes       | No           | Button       |
| Molecule    |    Yes       | No           | Search bar   |
| Organism    |    Yes       | Yes          | Data table   |
| Template    |    Yes       | No           |Two-column layout|
| Page        |    Yes       | Yes          | Profile page |


### Atoms
Atoms are the lowest level building blocks of the application. They are not composed of sub-components -- rather they are typically representative of a single HTML element, styled a certain way. Think buttons, inputs, text elements, etc. Atoms are also not connected to state as they should be reusable given a set of props.

### Molecules
Molecules are built on top of atoms. They are fairly low level components as well, but may combine a few smaller elements to form a more useful component. For example, a search bar -- which combines an input element and a button -- would be a good use case for a molecule. Molecules are also not connected to state as they should be reusable given a set of props.

### Organisms
Organisms are more complex in nature. They tend to combine several molecules together and require a data layer as well. These components are generated Redux-aware and are connected to state.

### Templates
Templates are used primarily for layouts. They are typically skeletons to place other elements in certain positions. Think about a two column layout, or a grid system. These components are not connected to state and should be reusable given a set of props.

### Pages
Pages are big sections of your app that typically contain several organisms. These are also connected to state, which may or may not be necessary depending on the use case. Pages are the highest level element and might often use templates to lay out organisms and molecules.
