import React, {Component, PropTypes} from 'react';
import autobind from 'autobind-decorator';
import CSSModules from 'react-css-modules';
import styles from './<%= nameLower %>.scss';

class <%= name %> extends Component {

  constructor(props) {
    super(props);
  }

  static propTypes = {

  };

  static defaultProps = {

  };

  render() {
    return (
      <div />
    );
  }
}


export {<%= name %>};

export default CSSModules(<%= name %>, styles);
