import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

// load our sample reducers
import {
  sampleAction
} from '../../../../actions/sampleApp/sampleActions'

class Home extends Component {

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

  sampleAction() {
    this.props.dispatch.sampleAction()
  }

  render() {
    return(
      <div>
        <h1 className="page-title">Home</h1>
        <span onClick={this.sampleAction.bind(this)}>
          Counter: {this.props.sampleCount}
        </span>
      </div>
    );
  }
}

Home.propTypes = {
  /*
   * Insert prop types here. For documentation, check out:
   * https://reactjs.org/docs/typechecking-with-proptypes.html
   */
}

const mapStateToProps = state => ({
  sampleCount: state.sample.sampleCount
})

const mapDispatchToProps = dispatch => {
  return {
    dispatch: bindActionCreators({
      sampleAction
    }, dispatch)
  };
}


export {Home};

const connectedComponent = connect(mapStateToProps, mapDispatchToProps)(Home);

export default connectedComponent;
