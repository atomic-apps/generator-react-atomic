import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CSSModules from 'react-css-modules';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import styles from './<%= nameLower %>.module.css'; // React-Scripts / CRA is expecting your CSS-Modules to follow this pattern

class <%= name %> extends Component {

  /**
   *
   * Optional constructor if needed to set initial state
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

const connectedComponent = connect(mapStateToProps, mapDispatchToProps)(<%= name %>);

export default connectedComponent;
