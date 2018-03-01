const Generator = require('yeoman-generator');
const mkdirp = require('mkdirp');
const prompts = require('../../libs/prompts');

console.log(prompts)

module.exports = Generator.extend( {
  create: function () {
    // Hoist some local-global variables to hand to prompts
    const defaultDirectory = this.config.get('directory')

    return this.prompt([

      /*
       * Use functional wrappers for prompts so we can test them
       * And they can be composable within our other generators
       */
      // sets `answers.name`
      prompts.components.componentName(),
      // set `answers.atomicType`
      prompts.components.atomicType(),
      // set `answers.styledComponentTagType`
      prompts.components.styledComponentTagType(),
      // set `answers.directory`
      prompts.components.targetDirectory(defaultDirectory)

    ]).then((answers) => {
      const componentName = answers.name;
      const componentNameLower = componentName.charAt(0).toLowerCase() + componentName.slice(1);
      const styledComponentTag = answers.styledComponentTagType;

      // Create directory for the component
      const directory = `${answers.directory}/${answers.atomicType}/${answers.name}`;
      mkdirp.sync(directory);

      // Copy over the jsx component file
      // Pages and organisms will have redux connected
      // Templates, molecules and atoms will not
      this.fs.copyTpl(
        this.templatePath('StyledComponent.jsx'),
        this.destinationPath(`${directory}/${componentName}.jsx`),
        { name: componentName,
          nameLower: componentNameLower,
          styledComponentTag: styledComponentTag,
        }
      );

      // Copy over the index.js file
      this.fs.copyTpl(
        this.templatePath('index.js'),
        this.destinationPath(`${directory}/index.js`),
        { name: componentName}
      );

      // Copy over the tests file
      this.fs.copyTpl(
        this.templatePath('ComponentTests.js'),
        this.destinationPath(`${directory}/__tests__/${componentName}.tests.js`),
        { name: componentName}
      );
    });
  }
});
