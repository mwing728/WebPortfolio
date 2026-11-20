import React, { Component } from 'react';

export default class About extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="about" className="section">
        <div className="wrap">
          <div className="about-grid">
            <div>
              <p className="eyebrow">About</p>
              <h2>About me</h2>
              <p className="prose">{resumeData.aboutme}</p>
            </div>
            <aside className="card focus-card">
              <h3>Focus</h3>
              <ul>
                <li>Applications in PHP, JavaScript, and MySQL</li>
                <li>Cleaner code, with help from mentors</li>
                <li>Python and React, in progress</li>
              </ul>
            </aside>
          </div>
        </div>
      </section>
    );
  }
}
