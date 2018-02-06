const Generator = require('yeoman-generator');
const mkdirp = require('mkdirp');

const configPrint = (defaultDirectory)=>{
    console.log('---DEBUG---')
    console.log('Dir: ',defaultDirectory)
    console.log('===========');
};

module.exports = Generator.extend( {
  create: function () {
    // dig into the yeomen generator and get a sense of this API
    const defaultDirectory = this.config.get('directory');
    const enableStyledComponents = this.config.get('enableStyledComponents');

    // NEXT STEPS HERE
    // First not having the defaultDirectory set could be bad, so need to figure out how we will force that
    // Secondly, get better sense of the `this.config.get` api, will be helpful to know as we will want to ask about their styled-component usage
    configPrint(defaultDirectory)

    return this.prompt([{
      type    : 'input',
      name    : 'name',
      message : 'What is the name of your new component?'
    }, {
      type    : 'list',
      name    : 'type',
      message : 'What type of component is it?',
      choices: [
        { name: '1) Atom',
          value: 'atoms'
        }, {
          name: '2) Molecule',
          value: 'molecules'
        }, {
          name: '3) Organism',
          value: 'organisms'
        }, {
          name: '4) Template',
          value: 'templates'
        }, {
          name: '5) Page',
          value: 'pages'
        }
      ],
      default : 'atoms' // Default to current folder name
    }, {
      type    : 'input',
      name    : 'directory',
      message : 'What directory should we create this in?',
      default: defaultDirectory
    }]).then((answers) => {

      const componentName = answers.name;
      const componentNameLower = componentName.charAt(0).toLowerCase() + componentName.slice(1);

      // Create directory for the component
      const directory = `${answers.directory}/${answers.type}/${answers.name}`;
      mkdirp.sync(directory);

      // Copy over the jsx component file
      // Pages and organisms will have redux connected
      // Templates, molecules and atoms will not
      if (['pages', 'organisms'].indexOf(answers.type) > -1) {
        this.fs.copyTpl(
          this.templatePath('ConnectedComponent.jsx'),
          this.destinationPath(`${directory}/${componentName}.jsx`),
          { name: componentName,
            nameLower: componentNameLower
          }
        );
      } else {
        this.fs.copyTpl(
          this.templatePath('PureRenderComponent.jsx'),
          this.destinationPath(`${directory}/${componentName}.jsx`),
          { name: componentName,
            nameLower: componentNameLower
          }
        );
      }

      // Copy over the scss file
      this.fs.copyTpl(
        this.templatePath('component.scss'),
        this.destinationPath(`${directory}/${componentNameLower}.scss`)
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
