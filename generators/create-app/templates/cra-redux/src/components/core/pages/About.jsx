import React, {Component} from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

class About extends Component {

  render() {
    return(
      <div>
        <h1 className="page-title">About</h1>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  /*
   * Replace with specific mapping of state to relevant props
   */
  state
})

const mapDispatchToProps = dispatch => bindActionCreators({
  /*
   * Include action creators used in this component
   */
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(About)
