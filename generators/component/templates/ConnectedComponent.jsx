import React, {Component, PropTypes} from 'react';
import autobind from 'autobind-decorator';
import CSSModules from 'react-css-modules';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
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

function mapStateToProps(state) {
  return {

  };
}

function mapDispatchToProps(dispatch) {
  return {
    dispatch: bindActionCreators({}, dispatch)
  };
}


export {<%= name %>};

const styledComponent = CSSModules(<%= name %>, styles);
export {styledComponent as styledComponent};

const connectedComponent = connect(mapStateToProps, mapDispatchToProps)(styledComponent);
export default connectedComponent;
