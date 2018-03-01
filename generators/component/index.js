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

        // React CSS-Modules Check
        // Yes - we want CSS-Modules()
        if (answers.includeReactCss == 'yes'){
          //
          // Create our ConnectComponentWithCssModule files
          //
          this.fs.copyTpl(
            this.templatePath('ConnectedComponentWithCssModule.jsx'),
            this.destinationPath(`${directory}/${componentName}.jsx`),
            { name: componentName,
              nameLower: componentNameLower
            }
          );

        // No CSS-Modules
        } else {
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

          // Consider supporting CSS || SASS
          // Copy over the scss file
          this.fs.copyTpl(
            this.templatePath('component.scss'),
            this.destinationPath(`${directory}/${componentNameLower}.scss`)
          );
        }

        //
        // Copy over the test stub for ConnectedComponent, it is multipurpose and can do both connect & CSS-Module
        // TODO: This TEST uses `enzyme by default`
        this.fs.copyTpl(
          this.templatePath('ConnectedComponentTests.js'),
          this.destinationPath(`${directory}/__tests__/${componentName}.tests.js`),
          { name: componentName}
        );

      // Templates, Molecules, Atoms generate as PureRender
      // We now have two different templating stratgies for React Components
      // CSSModules || Raw ReactComponent Export
      } else {


        // TODO
        // FLIP THIS AROND NOW 'yes' on top and else is no, so it all matches

        // React CSS-Modules Check
        // Yes - we want CSS-Modules()
        if (answers.includeReactCss == 'yes'){
          // fill

        // No CSS-Modules
        } else {
          //fill
        }

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
            this.templatePath('PureRenderComponentCssModule.jsx'),
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
