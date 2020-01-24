import React, { Component } from 'react';
export default class Porfolio extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="portfolio">
      <div className="row">
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
                          <div className="portfolio-item-meta">
                            <h5>{item.name}</h5>
                            <p>{item.description}</p>
                            <a href = "https://google.com" target = "blank"><button>View Demo</button></a>
                            <a href = "https://google.com" target = "blank"><button>View Code</button></a>
                          </div>
                        </div>
                    </div>
                  </div>
                  <div>
                    <p>"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"</p>
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