const Generator = require('yeoman-generator');
const mkdirp = require('mkdirp');
const chalk = require('chalk');


module.exports = Generator.extend( {
  init: function() {
    this.log("\n Welcome! Thanks for using the React Atomic Yeoman Generator.")
    this.log(" You can now generate fully functional React apps and components which follow the principles of Atomic Design.")
    this.log("\n To get started, generate a new app with the following command:")
    this.log(chalk.bold.yellow("\n yo react-atomic:create-app"))
    this.log("\n For more information, please check out the full documentation at https://github.com/atomic-apps/generator-react-atomic")
    this.log(" Enjoy!\n \n ")
  }
});
