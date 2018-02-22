const Generator = require('yeoman-generator');
const mkdirp = require('mkdirp');

module.exports = Generator.extend( {
  create: function () {
    return this.prompt([{
      type    : 'input',
      name    : 'name',
      message : 'What is the name of your new app?'
    }, {
      type    : 'confirm',
      name    : 'confirmation',
      message : "Awesome. I'm going to create a directory here with a React app. Is that okay?"
    }]).then((answers) => {
      const confirmation = answers.confirmation;
      // TODO: strip out punctuation and spaces from the name
      const directory = answers.name;

      // Create directory for the component
      mkdirp.sync(directory);

      // Generate the cra-redux template inside the newly created directory
      if (confirmation) {
        this.fs.copyTpl(
          this.templatePath('cra-redux'),
          this.destinationPath(`${directory}/`),
          { name: answers.name
          }
        );
      }
    });
  },
  install: function() {

  },
  end: function() {
    this.log("Your app is ready! Check out the instructions in the Readme on how to run the app. Enjoy :).")
  }
});
