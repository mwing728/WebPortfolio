import React, { Component } from 'react';
export default class Porfolio extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="portfolio">
      <div className="row" style={{width:"100%"}}>
        <div className="twelve columns collapsed">
          <h1>Check Out Some of My Projects.</h1>
          <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf" >
          {
            resumeData.portfolio && resumeData.portfolio.map((item)=>{
              return(

                <div>
                  <div className="columns portfolio-item"style={{width: "25%"}}>
                    <div className="item-wrap">
                          <img src={`${item.imgurl}`} className="item-img"/>
                          <div className="overlay"> 
                            <div className="portfolio-item-meta" style={{padding:"80px"}}>
                              <h4 style={{color:"white"}}>{item.name}</h4>
                              <h5>{item.title}</h5>
                              <div style={{padding:"10px"}}>
                                <a href = "https://google.com" target = "blank"><button>View Demo</button></a>
                              </div>
                              <div style={{padding:"10px"}}>
                                <a href = "https://google.com" target = "blank"><button>View Code</button></a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <p>{item.description}</p>
                      </div>
                    <div>
                  </div>
                </div>
                  
              )
            })
          }
          </div>
        </div>
      </div>
  </section>
        );
  }
}