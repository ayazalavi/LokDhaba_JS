import React, { Component } from 'react';

export default class About extends Component {
  render() {
    return (
      <div className="content overflow-auto">
        <div className="text-content">
          <h2>About</h2>

          <p>Lok Dhaba is a project of the <a href="http://tcpd.ashoka.edu.in">Trivedi Center for Political Data</a>, a
            research
          center led by faculty members in the Political Science and Computer Science Departments at <a href="http://ashoka.edu.in">Ashoka University</a>.</p>
          <p>Lok Dhaba's interface has been developed with open source tools such as R, Shiny, Plotly, Leaflet, data
        tables and rgdal. Our maps are originally from <a href="http://datameet.org">DataMeet</a> and have been
            cleaned and treated in-house. The Lok Dhaba software itself is open source under a Apache 2.0 license and is
        available from <a href="https://github.com/tcpd/lokdhaba">our Github page</a>.</p>

          <h2>Credits</h2>
          <p> The current lead developer for the Lok Dhaba software is Mohit Kumar, who is a Data Scientist and GIS
          Engineer at TCPD.
          Much data collection, cleaning, analysis and testing has been carried by out Saloni Bhogale, Basim Nissa
          and Priyamvada Trivedi.
          Many students and interns have also contributed to Lok Dhaba.
        </p> <p>Past members: Dr. Chinmay Narayan, Rajkamal Singh and Venkat Prasath.</p>
          <p>See more about the <a href="https://tcpd.ashoka.edu.in/team/">TCPD team</a>. You can write to us
            at tcpd-contact@ashoka.edu.in.</p>
        </div >
      </div >
    )
  }
}
