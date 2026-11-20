import React, { Component } from 'react';

export default class Resume extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="experience" className="section">
        <div className="wrap">
          <p className="eyebrow">Experience</p>
          <h2>Work</h2>
          <div className="experience-layout">
          {
            resumeData.work && resumeData.work.map(function (item) {
              return (
                <article className="card job" key={item.CompanyName}>
                  <div className="job-head">
                    <img src={item.CompanyLogo} alt="" width="48" height="48" />
                    <div>
                      <h3>{item.CompanyName}</h3>
                      <p className="meta">
                        {item.specialization}
                        <span aria-hidden="true"> · </span>
                        <span>{item.MonthStarted} – {item.YearOfLeaving}</span>
                      </p>
                    </div>
                  </div>
                  <ul className="achievements">
                    {
                      item.Achievements.map(function (achievement) {
                        return <li key={achievement}>{achievement}</li>;
                      })
                    }
                  </ul>
                </article>
              );
            })
          }
          <aside className="card skills-card">
            <h3>Skills</h3>
            <ul className="chips">
              {
                resumeData.skills && resumeData.skills.map(function (item) {
                  return <li key={item}>{item}</li>;
                })
              }
            </ul>
          </aside>
          </div>
        </div>
      </section>
    );
  }
}
