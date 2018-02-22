import React, {Component, PropTypes} from 'react';
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import autobind from 'autobind-decorator';
import {
  sampleAction
} from '../../../reducers/sample/actions'

class Home extends Component {

  constructor(props) {
    super(props);
  }

  sampleAction() {
    this.props.dispatch.sampleAction()
  }

  render() {
    return(
      <div>
        <h1 onClick={this.sampleAction.bind(this)}>Home</h1>
        {this.props.sampleCount}
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
