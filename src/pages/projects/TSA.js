import React from "react";
import ProjectWrapper from "../../components/projectItems/ProjectWrapper";
import ProjectHeader from "../../components/projectItems/ProjectHeader";
import ProjectPageButtons from "../../components/projectItems/ProjectPageButtons";

import ProjectStyles from "../../styles/Project";
import Branding from "../../components/projectItems/Branding";

import homepage from "../../assets/img/tsa/homepage.jpg";
import courses from "../../assets/img/tsa/courses.jpg";
import aboutus from "../../assets/img/tsa/aboutus.jpg";
import search from "../../assets/img/tsa/search.jpg";
import faq from "../../assets/img/tsa/faq.jpg";

import { projects } from "../../data/data";

export default function TSA(props) {
  const data = projects.filter(item => item.link === "TSA");
  const project = data[0];
  return (
    <ProjectWrapper padding>
      <ProjectHeader info={project} />
      <Branding info={project} />
      <div className="container">
        <div>
          <img
            className="desktopImage"
            src={homepage}
            alt="tsa home page"
          />
        </div>
        <div className="colorText--gray">
          <p>
            This project was one of my early gems. The reason was creativity was
            allowed at the highest level. Luckily I had a great team to push me
            more to be creative. The landing page has an interactive art piece
            to move the color and the logo itself. It was so much fun to work on
            this.
          </p>
        </div>
        <div>
          <img
            className="desktopImage"
            src={courses}
            alt="tsa courses page"
          />
        </div>

        <div className="colorText--gray">
          <p>
            The website itself contains too much information for the student and
            the public. Also, Toronto School of Art is really important for
            Toronto and the community around it. We have used the simple and
            clean side navigation to move with the user. This was the user can
            rely on it to jump to the other pages. Also, this gave us the option
            to not use sticky header or footer. The user can have all the
            realstate to look at the content.
          </p>
        </div>
        <div>
          <img
            className="desktopImage"
            src={aboutus}
            alt="tsa about us page"
          />
        </div>

        <div>
          <img
            className="desktopImage"
            src={search}
            alt="tsa search popup"
          />
        </div>

        <div>
          <img
            className="desktopImage"
            src={faq}
            alt="tsa faq"
          />
        </div>

        <div className="colorText">
          <p>This is one of those project, I'm so glad I had a chance to work on.</p>
        </div>
      </div>

      <ProjectPageButtons props={props.routeProps} />
      <ProjectStyles />
    </ProjectWrapper>
  );
}
