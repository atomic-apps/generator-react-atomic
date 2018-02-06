const Generator = require('yeoman-generator');
const mkdirp = require('mkdirp');

module.exports = Generator.extend( {
  init: function() {
    this.log("\n Welcome! Thanks for using the React Atomic Yeoman Generator. Real quick, let's get you set up...")
  },
  setup: function() {
     return this.prompt([{
      type    : 'input',
      name    : 'defaultDirectory',
      message : 'What is the default directory for your React components?',
      default : 'src/components/core/'
    }, {
      type    : 'confirm',
      name    : 'enableStyledComponents',
      message: '------------------------------------------------'
      + '\n    Would you like to enable StyledComponents?'
      + '\n    By default we will generate Atoms, Molecules, and Templates as StyledComponents',
      default: false
    }]).then((response) => {
      this.log(`Great! We will store "${response.defaultDirectory}" as your default directory for your convenience. You can always choose to generate a component into a different directory though.`)
      this.config.set({
        directory: response.defaultDirectory,
        enableStyledComponents: response.enableStyledComponents
      })
      this.config.save()
     }
    )

  }
});
