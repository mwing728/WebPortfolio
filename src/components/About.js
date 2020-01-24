import React, { Component } from 'react';
export default class About extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="about" >
         <div className="row">

            <div className="three columns">

               <img src="images/profilepic.jpg" alt="" width="400" height="400"/>

            </div>

            <div className="nine columns main-col">

               <h2>About Me</h2>
               <p style={{fontSize: "20px"}}>
               {
                 resumeData.aboutme
               }
               </p>

               <div className="row">

                  <div className="columns contact-details">

                  <h2>Contact Details</h2>
                  <p className="address">
       						<span style={{fontSize:"20px"}}>mattdwing@gmail.com</span>
                    <br></br>
                  </p>
                  </div>
               </div>
            </div>
         </div>
      </section>
    );
  }
}