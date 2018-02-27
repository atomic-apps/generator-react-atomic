const Generator = require('yeoman-generator');
const mkdirp = require('mkdirp');
const prompts = require('../../libs/prompts');

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
      // set `answers.includeReactCss`
      prompts.components.includeReactCss(),
      // set `answers.directory`
      prompts.components.targetDirectory(defaultDirectory)

    ]).then((answers) => {
      const componentName = answers.name;
      const componentNameLower = componentName.charAt(0).toLowerCase() + componentName.slice(1);

      // Create directory for the component
      const directory = `${answers.directory}/${answers.atomicType}/${answers.name}`;
      mkdirp.sync(directory);

      // Copy over the jsx component file
      // Pages and organisms will have redux connected
      // Templates, molecules and atoms will not
      if (['pages', 'organisms'].indexOf(answers.atomicType) > -1) {
        //
        // Create our ConnectComponent files
        //
        this.fs.copyTpl(
          this.templatePath('ConnectedComponent.jsx'),
          this.destinationPath(`${directory}/${componentName}.jsx`),
          { name: componentName,
            nameLower: componentNameLower
          }
        );
        //
        // Copy over the test file from ConnectedComponents as ConnectedComponent exports a namespace and the test needs
        // to import using destructuring to isolate the Raw React Components
        // TODO: This TEST uses `enzyme by default`
        this.fs.copyTpl(
          this.templatePath('ConnectedComponentTests.js'),
          this.destinationPath(`${directory}/__tests__/${componentName}.tests.js`),
          { name: componentName}
        );

        // TODO: So There is a prompt shown for React CSS-Modules, not sure if we should handle it here
        // in-terms of trying to load a new template that merges both Redux/CSS-Modules - think it is doable
        // and also hook in the generated `component.scss`
        // Right now, we sorta bailout and don't enforce React CSS-Modules onto Redux Connected Components
        // which isn't a terrible idea, you shouldn't try and put styles on your container :frown:



      // Templates, Molecules, Atoms generate as PureRender
      // We now have two different templating stratgies for React Components
      // CSSModules || Raw ReactComponent Export
      } else {


        // depending React CSS-Modules
        // * Note by not wrapping the React Components in `CSSModules()` it changes the way the component exports
        //   This has an affect on the sub-templates because the import changes
        if (answers.includeReactCss == 'no'){
          this.fs.copyTpl(
            this.templatePath('PureRenderComponent.jsx'),
            this.destinationPath(`${directory}/${componentName}.jsx`),
            { name: componentName,
              nameLower: componentNameLower
            }
          );

          // Copy over the ComponentTest file, this is for when the React Component is the default export
          // TODO: This TEST uses `enzyme by default`
          this.fs.copyTpl(
            this.templatePath('ComponentTests.js'),
            this.destinationPath(`${directory}/__tests__/${componentName}.tests.js`),
            { name: componentName}
          );

        } else {
          // Code to link Css Module
          this.fs.copyTpl(
            this.templatePath('PureRenderCssModuleComponent.jsx'),
            this.destinationPath(`${directory}/${componentName}.jsx`),
            { name: componentName,
              nameLower: componentNameLower
            }
          );

          // Copy over the test file from ConnectedComponents as ConnectedComponent exports a namespace and the test needs
          // to import using destructuring
          // TODO: This TEST uses `enzyme by default`
          this.fs.copyTpl(
            this.templatePath('ConnectedComponentTests.js'),
            this.destinationPath(`${directory}/__tests__/${componentName}.tests.js`),
            { name: componentName}
          );

          // Consider supporting CSS || SASS
          // Copy over the scss file
          this.fs.copyTpl(
            this.templatePath('component.scss'),
            this.destinationPath(`${directory}/${componentNameLower}.scss`)
          );
        }

      }

      // Copy over the index.js file no matter what
      this.fs.copyTpl(
        this.templatePath('index.js'),
        this.destinationPath(`${directory}/index.js`),
        { name: componentName}
      );


    });
  }
});
