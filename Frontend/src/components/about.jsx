import React, { Component } from "react";
class About extends Component {
  render() {
    return (
      <div className="about-page">
        <div style={{ gridColumn: "span 3" }}>
          <h2>About Developers</h2>
          <p>Name : Anirudh Ray, Sayantan Bose, Archisman Mukherjee, Aritrajit Das, Singthi Saniya</p>
          <p>
            Full stack railway reservation website for 3rd year software engineering project made with &#10084; by small boys and boseman
          </p>
          <p>
            For github profile :{" "}
            <a href="https://github.com/znirudhexe">Small boys</a>
          </p>
          <p>
            For queries contact :{" "}
            <a href="sayantan.bose.csbs24@heritageit.edu.in">boseman</a>{" "}
          </p>
          <h2>About the project</h2>
          <p>This project is a full stack Train booking Website.</p>
          <p>
            You can see trains running on particular days ,book tickets in them,
            make demo payment and see tickets, cancel bookings. Admin facilities
            are also available to add trains,routes and stations.
          </p>
          <p>
            Note : This website is not official website of any
            company/organistaion.
          </p>
        </div>

        <div>
          <h3>Front end includes : </h3>
          <ul>
            <li>HTML</li>
            <li>CSS with SASS</li>
            <li>Reactjs</li>
          </ul>
        </div>
        <div>
          <h3>Back end includes : </h3>
          <ul>
            <li>Nodejs runtime engine</li>
            <li>Expressjs framework</li>
          </ul>
        </div>
        <div>
          <h3>DBMS used : </h3>
          <ul>
            <li>MongoDB Atlas</li>
            <li>Mongoose ODM</li>
          </ul>
        </div>
        <div>
          <h3>Payment gateway used :</h3>
          <ul>
            <li>Razorpay Payment Links Api in test mode</li>
          </ul>
        </div>
        <div>
          <h3>Authentication System used : </h3>
          <ul>
            <li>JWT based token authentication</li>
          </ul>
        </div>
        <div>
          <h3>User passwords in database : </h3>
          <ul>
            <li>Encypted using bcryptjs</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default About;
