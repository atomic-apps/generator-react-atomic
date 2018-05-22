const Generator = require('yeoman-generator');
const mkdirp = require('mkdirp');
const prompts = require('../../libs/prompts');

module.exports = Generator.extend( {
  create: function () {
    // Hoist some local-global variables to hand to prompts
    const defaultDirectory = this.config.get('directory')


    return this.prompt([
      // Use functional wrappers for prompts so we can test them
      // And they can be composable within our other generators

      // sets `answers.name`
      prompts.component.componentName(),
      // set `answers.atomicType`
      prompts.component.atomicType(),
      // set `answers.directory`
      prompts.component.targetDirectory(defaultDirectory)

    ]).then((answers) => {
      const componentName = answers.name;
      const componentNameLower = componentName.charAt(0).toLowerCase() + componentName.slice(1);

      // Create directory for the component
      const directory = `${answers.directory}/${answers.atomicType}/${answers.name}`;
      mkdirp.sync(directory);
      // Below we will copy over the appropriate component, CSS module, and test files
      // All components come with CSS Modules enabled
      // Pages and organisms will have Redux connected -- templates, molecules and atoms will not

      // For Organisms and Pages, use the ConnectedComponent.jsx and ConnectedComponentTests.js templates
      if (['pages', 'organisms'].indexOf(answers.atomicType) > -1) {
        // Copy over the component file
        this.fs.copyTpl(
          this.templatePath('ConnectedComponent.jsx'),
          this.destinationPath(`${directory}/${componentName}.jsx`),
          { name: componentName,
            nameLower: componentNameLower
          }
        );

        // Copy over the tests file
        this.fs.copyTpl(
          this.templatePath('ConnectedComponentTests.js'),
          this.destinationPath(`${directory}/__tests__/${componentName}.tests.js`),
          { name: componentName}
        );

      // For Atoms, Molecules and Templates, use the PureRenderComponent and ComponentTests.js templates
      } else {
        // Copy over the component file
        this.fs.copyTpl(
          this.templatePath('PureRenderComponent.jsx'),
          this.destinationPath(`${directory}/${componentName}.jsx`),
          { name: componentName,
            nameLower: componentNameLower
          }
        );

        // Copy over the tests file
        this.fs.copyTpl(
          this.templatePath('ComponentTests.js'),
          this.destinationPath(`${directory}/__tests__/${componentName}.tests.js`),
          { name: componentName}
        );
      }

      // For ALL components, copy over the CSS Modules file
      this.fs.copyTpl(
        this.templatePath('component.module.css'),
        this.destinationPath(`${directory}/${componentNameLower}.module.css`)
      );

      // For ALL components, copy over the index.js file
      this.fs.copyTpl(
        this.templatePath('index.js'),
        this.destinationPath(`${directory}/index.js`),
        { name: componentName}
      );
    });
  }
});
