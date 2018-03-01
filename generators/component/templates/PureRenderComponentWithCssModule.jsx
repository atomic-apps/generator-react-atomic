import React from 'react';
import PropTypes from 'prop-types';
import autobind from 'autobind-decorator';
import CSSModules from 'react-css-modules';
import styles from './<%= nameLower %>.scss';

class <%= name %> extends React.Component {

  constructor(props) {
    super(props);
  }

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


export {<%= name %>};

export default CSSModules(<%= name %>, styles);
