import React, { Component } from 'react';
import Header from './components/Header';
import About from './components/About';
import Resume from './components/Resume';
import Portfolio from './components/Portfolio';
import Footer from './components/Footer';
import resumeData from './resumeData';
import './portfolio.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header resumeData={resumeData} />
        <main>
          <About resumeData={resumeData} />
          <Resume resumeData={resumeData} />
          <Portfolio resumeData={resumeData} />
          <section id="contact" className="section contact">
            <div className="wrap">
              <div className="card contact-panel">
              <div>
              <p className="eyebrow">Contact</p>
              <h2>Get in touch</h2>
              <p className="prose">Email is the best way to reach me.</p>
              </div>
              <div className="actions">
                <a className="btn btn-primary" href={'mailto:' + resumeData.email}>
                  {resumeData.email}
                </a>
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
              </div>
            </div>
          </section>
        </main>
        <Footer resumeData={resumeData} />
      </div>
    );
  }
}

export default App;
