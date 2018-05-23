import React, { Component } from 'react';

class About extends Component {

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



export default About;
