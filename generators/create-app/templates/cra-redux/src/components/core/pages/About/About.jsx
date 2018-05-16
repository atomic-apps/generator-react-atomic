import React from 'react';
import PropTypes from 'prop-types';
import CSSModules from 'react-css-modules';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
// React-Scripts / CRA is expecting your CSS-Modules to follow this pattern
import styles from './about.module.css';

class About extends React.Component {

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
    return(
      <div>
        <h1 className="page-title">About</h1>
      </div>
    );
  }
}

About.propTypes = {
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


export {About};

const connectedComponent = connect(mapStateToProps, mapDispatchToProps)(About);

export default connectedComponent;
