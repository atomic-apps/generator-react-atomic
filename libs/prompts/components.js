/*
 * Create functional wrappers for our prompts so that they can be reused
 * When action / redux, test prompts are added consider renaming or moving
 */

const componentName = () => {
  const obj = {
    type    : 'input',
    name    : 'name',
    message : 'What is the name of your new component?'
  }
  return obj;
};


/*
 *  Specify the type of component we are generating
 */
const atomicType = () => {
  const obj = {
    type    : 'list',
    name    : 'atomicType',
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
  }
  return obj;
};

/*
 * Used to map a prompt to get the TargetDirect where the template generation will occur
 */
const targetDirectory = function(targetDirectory) {
  const defaultDirectory = (targetDirectory)? targetDirectory:'';
  const obj = {
    type    : 'input',
    name    : 'directory',
    message : 'What directory should we create this in?',
    default: defaultDirectory
  };
  return obj;
}


// TODO add the special StyledComponent Prompts
// to get the correct html element
/*
 *  Specify the type of component we are generating
 *  May want to make this a type input field, not sure how many tags we need to support
 */
const styledComponentTagType = () => {
  const obj = {
    type    : 'list',
    name    : 'styledComponentTagType',
    message : 'What tag for the styled component? (default: div)',
    choices: [
      { name: '1) <div>',
        value: 'div'
      }, {
        name: '2) <p>',
        value: 'p'
      }, {
        name: '3) <a>',
        value: 'a'
      }, {
        name: '4) <img>',
        value: 'img'
      }, {
        name: '5) <ul>',
        value: 'ul'
      }, {
        name: '6) <li>',
        value: 'ul'
      },{
        name: '7) <button>',
        value: 'button'
      }, {
        name: '8) <h1>',
        value: 'h1'
      }, {
        name: '9) <h2>',
        value: 'h2'
      }, {
        name: '10) <h3>',
        value: 'h3'
      }, {
        name: '11) <h4>',
        value: 'h4'
      }, {
        name: '12) <h5>',
        value: 'h5'
      }
    ],
    default : 'div' // Default to current folder name
  }
  return obj;
};


// ES5 Export
module.exports = {
  'componentName': componentName,
  'atomicType': atomicType,
  'styledComponentTagType': styledComponentTagType,
  'targetDirectory': targetDirectory
}
