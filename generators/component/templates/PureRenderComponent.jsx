import React from 'react';
import PropTypes from 'prop-types';
import autobind from 'autobind-decorator';


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



export default <%= name %>;
