import React from 'react';
import PropTypes from 'prop-types';
import autobind from 'autobind-decorator';
import CSSModules from 'react-css-modules';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import styles from './<%= nameLower %>.module.css';

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
