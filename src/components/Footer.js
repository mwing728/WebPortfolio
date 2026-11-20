import React, { Component } from 'react';

export default class Footer extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <footer className="site-footer">
        <div className="wrap footer-inner">
          <p>{resumeData.name}</p>
          <p>© {new Date().getFullYear()}</p>
          <a href="#top">Back to top</a>
        </div>
      </footer>
    );
  }
}
