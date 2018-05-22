const Generator = require('yeoman-generator');
const mkdirp = require('mkdirp');
const prompts = require('../../libs/prompts');
const chalk = require('chalk');

module.exports = Generator.extend( {
  create: function () {
    return this.prompt([
       /*
       * Use functional wrappers for prompts so we can test them
       * And they can be composable within our other generators
       */
      // sets `answers.name`
      prompts.createApp.name(),
      // set `answers.confirmation`
      prompts.createApp.confirmation()

      ]).then((answers) => {

      const confirmation = answers.confirmation;

      // Generate the cra-redux template inside the newly created directory
      if (confirmation) {
        const appName = answers.name;
        // Strips out spaces and punctuation to create valid directory
        const directory = appName.replace(/[^a-z0-9_\-]/gi, '');

        // Create directory for the component
        mkdirp.sync(directory);
        this.fs.copyTpl(
          this.templatePath('cra-redux'),
          this.destinationPath(`${directory}/`),
          { name: appName } // Data passed to the templates
        );
      } else {
        process.exit()
      }
    });
  },
  install: function() {
    //  Where installations are run (i.e. npm)
  },
  end: function() {

    this.log("\n");
    this.log("Your app is ready! To get started, cd into your new app directory and run the commands below. Check out the Readme for more helpful tips.\n");
    this.log(chalk.bold.yellow(" $ yarn install" + "\n"))
    this.log(chalk.bold.yellow(" $ yarn start" + "\n"))
    this.log("You are all set. Enjoy! \n");
  }
});
