import React, {Component} from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {
  sampleAction
} from '../../../reducers/sample/actions'

class Home extends Component {

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

export default connect(mapStateToProps, mapDispatchToProps)(Home)
