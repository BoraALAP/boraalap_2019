import React from "react";
import ProjectWrapper from "../../components/projectItems/ProjectWrapper";
import ProjectHeader from "../../components/projectItems/ProjectHeader";
import ProjectPageButtons from "../../components/projectItems/ProjectPageButtons";

import ProjectStyles from "../../styles/Project";
import Branding from "../../components/projectItems/Branding";

import homepaged from "../../assets/img/accent/homepaged.jpg";
import whyUs from "../../assets/img/accent/whyUs.jpg";
import applicant from "../../assets/img/accent/applicant.jpg";

import { projects } from "../../data/data";

export default function AccentTranslations(props) {
  const data = projects.filter(item => item.link === "AccentTranslations");
  const project = data[0];

  return (
    <ProjectWrapper padding>
      <ProjectHeader info={project} />
      <Branding info={project} />
      <div className="container">
        <div>
          <h4>Home Page</h4>
          <div>
          <img
            src={homepaged}
            className="desktopImage"
            alt="accenttranslations home page"
          />
          </div>
        </div>

        <div className="colorText--gray">
          <p>We tried to guide the user with two options without making it too obvious so the user wouldn't feel like restricted. Those two options are for the real two target market client needed to focus mainly.</p>
        </div>

        <div>
          <h4>About Us Page</h4>
          <img
            src={whyUs}
            className="desktopImage"
            alt="accenttranslations about page"
          />
        </div>

        <div>
          <h4>Applicant Page</h4>
          <img
            src={applicant}
            className="desktopImage"
            alt="accenttranslations applicant page"
          />
        </div>
        <div className="colorText--gray">
          <p>This page was created for Immigration Applicants. Even though the whole website was created in English, in 2 clicks, users can easily reach to translated description video and they can start filling a form to get a quote.</p>
        </div>

        
      </div>

      <ProjectPageButtons props={props.routeProps} />
      <ProjectStyles />
    </ProjectWrapper>
  );
}
