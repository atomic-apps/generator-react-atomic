# Component Generator

Common Usages:
```

# Create ES6 Classed based component
yo react-atomic:component

```


## Templates


Current method is to create new template files that use the standard `yeoman-generator` templating interface which all the logic that determines template binding occurs in the `../index.js`.  The main branching of logic is as follows:

```
├── index.js
└── templates
    ├── ComponentTests.js
    ├── ConnectedComponent.jsx
    ├── ConnectedComponentTests.js
    ├── ConnectedComponentWithCssModule.jsx
    ├── PureRenderComponent.jsx
    ├── PureRenderComponentWithCssModule.jsx
    ├── component.scss
    └── index.js
```


### **ConnectedComponent** || **Pure Render**
First major branch is determining whether or not Redux's `connect(<Component />, stateToProps)` is applied as a wrapper to the component and exported

### **PureRenderComponentWithCssModule** & **ConnectedComponentWithCssModule**
These are subtemplates of the above branches where `CSSModule(<Component />)`


### Testing Templates

The ConnectedComponentTest can be multi-purposed as it has the proper import structure in place to grab the Raw React component
from a PureRenderComponentCssModule or any ConnectedComponent*
