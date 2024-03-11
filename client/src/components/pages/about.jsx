import React from "react";
import "../../../styling/about.css";
import { IoMdSearch } from "react-icons/io";
// import didier from '../../assets/walking.gif'

const About = () => {
  return (
    <div className="about-container">
        <h1 className="about-tittle subCont">about myhome</h1>
        <div className="mainContainer subCont">
            <p className="main-p">
                Welcome to myhome, where discovering your dream getaway and effortlessly renting out your own space is made simple and enjoyable, what sets us apart is our unwavering commitment to reliability, a personal touch, and fostering direct lines of communication between guests and hosts.
            </p>
            <p className="main-p">Meet our team of passionate founders: Selma, Illia, Didier, Pavithra, and Billie, each brings a wealth of expertise from diverse backgrounds, from tech to hospitality. together they've created a platform where travelers can find their ideal retreat with ease backed by a reliable system that ensures every booking seamless and secure.</p>
            <p className="main-p">What truly distinguishes myhome is our dedication to providing a personal touch in every interaction. our founders understand the importance of a warm welcome and a personalized experience, whether you're hosting guests or exploring new destinations. with myhome, you're not just another booking you're part of a community built on trust, reliability, and genuine hospitality. join us redefining the way we experience travel and accommodation.</p>
            <p className="main-p main-p2">welcome to myhome, where your dream escape awaits</p>
        </div>
        <div className="teamBox">
            <div className="team-member">
                <div className="team-img">
                    <img className="aboutImage" src="https://ca.slack-edge.com/T04TLUXTBTL-U04UESF4XC1-643348f2e6ec-512" alt="Selma" />
                </div>
                <h3>Selma Atasert</h3>
                <p className="role">Lead Backend</p>
                <p>Responsible for overseeing the development of robust backend systems, ensuring scalability, efficiency, and security. Leads the team in implementing innovative solutions and optimizing performance to meet project objectives.</p>
            </div>
            <div className="team-member">
                <div className="team-img">
                     <img className="aboutImage" src={"https://ca.slack-edge.com/T04TLUXTBTL-U04URUAN1FA-69fd26442f39-512"} alt="Illia" />
                </div>
                <h3>Illia Zubrytskyi</h3>
                <p className="role">Co-Lead Backend</p>
                <p>Collaborates closely with the Lead Backend to design and develop backend solutions that align with project requirements and industry best practices. Assists in mentoring team members and maintaining high code quality standards.</p>

            </div>
            <div className="team-member">
                <div className="team-img">
                    <img className="aboutImage" src="https://ca.slack-edge.com/T04TLUXTBTL-U04UTU8QR8C-dc95459c3095-512" alt="Didier" />
                </div>
                <h3>Didier Rubangisa</h3>
                <p className="role">Repository maintainer </p>
                <p>Manages and maintains code repositories, ensuring version control and collaboration among team members. Implements branching strategies, conducts code reviews, and resolves merge conflicts to streamline the development process.</p>

            </div>
            <div className="team-member">
                <div className="team-img">
                    <img className="aboutImage" src="https://ca.slack-edge.com/T04TLUXTBTL-U04TZ9PH5K7-c1d5140703da-512" alt="Pavithra" />
                </div>
                <h3>Pavithra Narayanan Kutty</h3>
                <p className="role">Project Manager</p>
                <p>Coordinates project activities, schedules, and resources to ensure timely delivery of milestones and objectives. Facilitates communication between team members and stakeholders, manages risks, and ensures project alignment with strategic goals.</p>

            </div>
            <div className="team-member">
                <div className="team-img">
                    <img className="aboutImage" src="https://ca.slack-edge.com/T04TLUXTBTL-U04U23KB9LK-1f65d8efffc2-512" alt="Billie" />
                </div>
                <h3>Billie-Jean Bowdery</h3>
                <p className="role">Lead Frontend</p>
                <p>Leads the development of intuitive and responsive frontend interfaces, focusing on user experience and accessibility. Collaborates with the team and backend developers to integrate frontend components seamlessly into the overall architecture.</p>
            </div>
        </div>
        {/* <div className="homePageFormContainer">
            <form className="homePageFormWrapper">
            <div className="homePageFormSubCont homePageFormSubCont1" onClick={() =>
                document.querySelector(".homePageFormInput1").click()
              }>
                <label htmlFor="place" className="homePageFormLabel" >where</label>
                <input type="text" placeholder="Search destinations" className="homePageFormInput homePageFormInput1"/>
            </div>
            <div className="homePageFormSubCont homePageFormSubCont2" onClick={() =>
                document.querySelector(".homePageFormInput2").click()
              }>
                <label htmlFor="date" className="homePageFormLabel" >Check in</label>
                <input type="date" placeholder="Add dates" className="homePageFormInput homePageFormInput2"/>
            </div>
            <div className="homePageFormSubCont homePageFormSubCont3" onClick={() =>
                document.querySelector(".homePageFormInput3").click()
              }>
                <label htmlFor="date" className="homePageFormLabel" >Check out</label>
                <input type="date" placeholder="Add dates" className="homePageFormInput homePageFormInput3"/>
            </div>
            <div className="homePageFormSubCont homePageFormSubCont4" onClick={() =>
                document.querySelector(".homePageFormInput4").click()
              }>
                <label htmlFor="numbers" className="homePageFormLabel homePageFormLabel1" >Who </label>
                <div className="homePageFormSubCont44">
                    <input type="" placeholder="Number of guests" className="homePageFormInput homePageFormInput4"/>
                    <div className="homePageFormBtn">
                        <IoMdSearch type="submit"  className="homePageFormIcon" />
                    </div>
                </div>
                
            </div>
            </form>
        </div> */}
    </div>
  );
};
export default About;