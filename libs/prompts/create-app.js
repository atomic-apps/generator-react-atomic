/*
 * Create functional wrappers for our prompts so that they can be reused
 * When action / redux, test prompts are added consider renaming or moving
 */


/*
 *  Ask for the name of the app
 */
const name = () => {
  const obj = {
    type    : 'input',
    name    : 'name',
    message : 'What is the name of your new app?',
    default:  'new-react-atomic-app'
  }
  return obj;
};


/*
 * Get confirmation before generating all the app files
 */
const confirmation = () => {
  const obj = {
    type    : 'confirm',
    name    : 'confirmation',
    message : "Awesome. I'm going to create a directory here with a React app. Is that okay?"
  }
  return obj;
};


// ES5 Export
module.exports = {
  'name': name,
  'confirmation': confirmation
}
