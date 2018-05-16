import React from 'react';
import PropTypes from 'prop-types';
import CSSModules from 'react-css-modules';
// React-Scripts / CRA is expecting your CSS-Modules to follow this pattern
import styles from './<%= nameLower %>.module.css';

class <%= name %> extends React.Component {

  /**
   *
   * optional constructor if needed to set initial state
   *
  constructor(props) {
    super(props);
  }
  */

  static defaultProps = {
    /*
     * Insert default props here. For documentation, check out:
     * https://reactjs.org/docs/typechecking-with-proptypes.html
     */
  }

  render() {
    return (
      <div />
    );
  }
}

<%= name %>.propTypes = {
  /*
   * Insert prop types here. For documentation, check out:
   * https://reactjs.org/docs/typechecking-with-proptypes.html
   */
}

// Export Component
export default <%= name %>;
