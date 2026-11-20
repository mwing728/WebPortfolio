import React, { Component } from 'react';

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = { menuOpen: false };
    this.toggleMenu = this.toggleMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
  }

  toggleMenu() {
    this.setState(function (state) {
      return { menuOpen: !state.menuOpen };
    });
  }

  closeMenu() {
    this.setState({ menuOpen: false });
  }

  render() {
    let resumeData = this.props.resumeData;
    let menuClass = this.state.menuOpen ? 'nav-menu is-open' : 'nav-menu';

    return (
      <React.Fragment>
        <header className="nav-bar" id="top">
          <a className="nav-name" href="#top">{resumeData.name}</a>
          <button
            className="nav-toggle"
            type="button"
            aria-expanded={this.state.menuOpen}
            aria-controls="nav-menu"
            onClick={this.toggleMenu}
          >
            {this.state.menuOpen ? 'Close' : 'Menu'}
          </button>
          <nav id="nav-menu" className={menuClass} aria-label="Primary">
            <ul className="nav-links">
              <li><a href="#about" onClick={this.closeMenu}>About</a></li>
              <li><a href="#experience" onClick={this.closeMenu}>Experience</a></li>
              <li><a href="#projects" onClick={this.closeMenu}>Projects</a></li>
            </ul>
          </nav>
        </header>

        <section className="hero">
          <div className="wrap hero-inner">
            <div className="hero-copy">
              <h1>{resumeData.name}</h1>
              <p className="role">{resumeData.role}</p>
              <p className="lede">{resumeData.roleDescription}</p>
              <div className="actions">
                <a className="btn btn-primary" href={'mailto:' + resumeData.email}>Email</a>
                {
                  resumeData.socialLinks && resumeData.socialLinks.map(function (item) {
                    return (
                      <a
                        className="btn btn-ghost"
                        key={item.name}
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {item.label}
                      </a>
                    );
                  })
                }
              </div>
              <dl className="facts">
                <div>
                  <dt>Work</dt>
                  <dd>{resumeData.work && resumeData.work[0] ? resumeData.work[0].CompanyName : ''}</dd>
                </div>
                <div>
                  <dt>Since</dt>
                  <dd>{resumeData.work && resumeData.work[0] ? resumeData.work[0].MonthStarted : ''}</dd>
                </div>
                <div>
                  <dt>Projects</dt>
                  <dd>
                    {resumeData.portfolio && resumeData.portfolio.map(function (item) {
                      return item.name;
                    }).join(', ')}
                  </dd>
                </div>
              </dl>
            </div>
            <div className="hero-photo">
              <img src={resumeData.portrait} alt="Matthew Wing" />
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}
