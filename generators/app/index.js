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
      default : 'src/components/core'
    }, {
      type    : 'list',
      name    : 'stylePreference',
      message : 'Which is your preference for styling components?',
      choices: [
        { name: '1) Styled Components',
          value: 'styledComponents'
        }, {
          name: '2) CSS Modules',
          value: 'cssModules'
        }
      ],
      default : 'styledComponents'
   }
  ]).then((response) => {
      this.log(`Great! We will store "${response.defaultDirectory}" as your default directory for your convenience. You can always choose to generate a component into a different directory though.`)
      this.config.set({
        directory: response.defaultDirectory,
        stylePreference: response.stylePreference
      })
      this.config.save()
     }
    )
  }
});
