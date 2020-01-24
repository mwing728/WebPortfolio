import React, { Component } from 'react';
export default class Footer extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <footer style={{color:"gray"}}>
      <div className="">
        <div className="">
          <ul className="social-links" >
            {
              resumeData.socialLinks && resumeData.socialLinks.map((item)=>{
                return(
                  <li>
                    <a href={item.url} target="blank"><i className={item.className}></i></a>
                  </li>
                )
              })
            }
          </ul>
          
        </div>
        Copyright &copy;Matthew Wing 2020
        <div id="go-top"><a className="smoothscroll" title="Back to Top" href="#home"><i className="icon-up-open" /></a></div>
      </div>
    </footer>
    
    );
  }
}