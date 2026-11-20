import React, { Component } from 'react';

export default class Portfolio extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="projects" className="section">
        <div className="wrap">
          <p className="eyebrow">Projects</p>
          <h2>Selected work</h2>
          <div className="project-grid">
            {
              resumeData.portfolio && resumeData.portfolio.map(function (item) {
                var parts = item.name.split(' ').filter(Boolean);
                var mark = parts.length > 1
                  ? (parts[0].charAt(0) + parts[1].charAt(0)).toUpperCase()
                  : item.name.slice(0, 2).toUpperCase();
                return (
                  <article className="card project-card" key={item.name}>
                    <div className="project-mark">
                      {item.logo ? (
                        <img className="project-logo" src={item.logo} alt="" />
                      ) : (
                        <span aria-hidden="true">{mark}</span>
                      )}
                      {item.tags ? (
                        <ul className="chips project-tags">
                          {item.tags.map(function (tag) {
                            return <li key={tag}>{tag}</li>;
                          })}
                        </ul>
                      ) : null}
                    </div>
                    <div className="project-body">
                      <h3>{item.name}</h3>
                      <p>{item.description}</p>
                      <div className="project-links">
                        <a href={item.demo} target="_blank" rel="noopener noreferrer">View demo</a>
                        {item.githubLink ? (
                          <a href={item.githubLink} target="_blank" rel="noopener noreferrer">View code</a>
                        ) : null}
                      </div>
                    </div>
                  </article>
                );
              })
            }
          </div>
        </div>
      </section>
    );
  }
}
