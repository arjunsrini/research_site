import React from 'react';
// import {
    // BrowserRouter as Router, Route, NavLink, Routes, Link,
//   } from 'react-router-dom';
// import Paper from '@mui/material/Paper';
import './style.scss';
import imgarjun from './img/arjun.jpg';
// import pdffemaleleaders from './pdf/femaleleaders.pdf';
// console.log(img);

const Home = (props) => {
    return (
      <div className="fullpage">
        <div className="box_image">
            <img id="arjun" src="./arjun.jpg" alt="Arjun" /> 
        </div>
          <div id="name">Arjun Srinivasan</div>
            <p><b className="bioinfo">Dartmouth College</b> senior studying <b className="bioinfo">Economics</b> and <b className="bioinfo">Computer Science</b></p>
            <div className="research"> Research Papers
            <ul>
                <li id="#usmobility">
                    <p className="paper_title">US Educational Mobility in the 21st Century</p>
                    <p className="byline">with Professor Paul Novosad, Charlie Rafkin</p>
                    <p>[draft coming soon][<a href="https://arjunsrini.github.io/mobility-results/">preliminary results</a>]</p>
                    {/* <p>[<a href="#">abstract</a>][<a href="#">manuscript</a>][<a href="#">code</a>]</p>                     */}
                </li>
                <li id="schoolfinance">
                    <p className="paper_title">Unified and Unequal: The Effect of Resegregation on School Finance Inequality</p>
                    <p className="byline">Senior thesis with Archita Harathi, advised by Professor Douglas Staiger</p>
                    <p>[abstract][manuscript][code]</p>
                    {/* <p>[<a href="#">abstract</a>][draft coming soon][<a href="#">code</a>]</p>                     */}
                </li>
                <li id="femaleleaders">
                    <p className="paper_title">Small Victories: The Effect of Female Leaders on School Enrollment</p>
                    <p className="byline">with Archita Harathi, advised by Professor Douglas Staiger</p>
                    <p>[abstract][manuscript][code]</p>
                    {/* <p>[<a href="#">abstract</a>][<a href="#">manuscript</a>][<a href="#">code</a>]</p>                     */}
                </li>
                <li id="brazilmobility">
                    <p className="paper_title">Intergenerational Educational Mobility in Brazil</p>
                    <p className="byline">advised by Professor Eric Edmonds</p>
                    <p>[abstract][manuscript][code]</p>
                    {/* <p>[<a href="#">abstract</a>][<a href="#">manuscript</a>][<a href="#">code</a>]</p>                     */}
                </li>
            </ul>
            </div>
            <div className="csProjects">My recent CS projects include <a href="https://open-stata.netlify.app/">OpenStata</a>, software that replicates basic Stata functionality with open-source langauges, and <a href="#">Line @ Dartmouth</a>, a wait-time estimation app.</div>
            <p>In my free time, I listen to <a className="personal" href="https://podcasts.apple.com/us/podcast/the-bruenigs/id1393726435">The Bruenigs</a>,
              catalog <a className="personal" href="https://ammaquotes.github.io/">my mom's advice</a>, and read <a className="personal" href="https://www.goodreads.com/user/show/93761270-arjun-srinivasan">books</a>!
            </p>
      </div>
    );
};

const App = (props) => {
return (
    <Home />
);
};

export default App;
