import React from "react";
import ProjectWrapper from "../../components/projectItems/ProjectWrapper";
import ProjectHeader from "../../components/projectItems/ProjectHeader";
import ProjectPageButtons from "../../components/projectItems/ProjectPageButtons";

import ProjectStyles from "../../styles/Project";
import Branding from "../../components/projectItems/Branding";

import enterence from "../../assets/img/bonapp/enterence.jpg";
import modifier1 from "../../assets/img/bonapp/modifier1.jpg";
import modifier2 from "../../assets/img/bonapp/modifier2.jpg";
import modifier3 from "../../assets/img/bonapp/modifier3.jpg";
import past from "../../assets/img/bonapp/past.jpg";
import rate from "../../assets/img/bonapp/rate.jpg";
import refund from "../../assets/img/bonapp/refund.jpg";
import upcoming from "../../assets/img/bonapp/upcoming.jpg";
import flow from "../../assets/img/bonapp/flow.jpg";

import { projects } from "../../data/data";


export default function BonAPP(props) {
  const data = projects.filter(item => item.name === "BonAPP");
  const project = data[0];
  return (
    <ProjectWrapper padding>
      <ProjectHeader info={project} />
      <Branding info={project} />
      <div className="container">
        <div>
          <img
            className="desktopImage"
            src={flow}
            alt="flow of all the whole app"
          />
        </div>
        <div className="colorText--gray">
          <p>
            When I started working on this project app was already designed and
            developed; however, some of the feature flows were not optimized. I
            have created an user flow to see where can we trim the unnecessary
            clicks after that I have improved the accessibility of the app.
          </p>
        </div>
        <div>
          <img
            src={enterence}
            className="mobileImage"
            alt="enterence of the app"
          />
        </div>
        

        <div className="multiColumns">
          <h4>Refund Feature</h4>
          <div>
            <img
              src={past}
              className="mobileImage"
              alt="Order history past screen"
            />
            <img
              src={refund}
              className="mobileImage"
              alt="old history which is refunded"
            />
            <img
              src={upcoming}
              className="mobileImage"
              alt="Order history upcoming orders user placed for the future"
            />
          </div>
        </div>
        <div className="colorText--gray">
          <p>
            With the changes happening on the other products the team work on,
            BonAPP is able to display the refunded menu items. I have worked on
            the user flow and display screens for the feature we are including.
          </p>
        </div>

        <div>
          <h4>Feedback Screen</h4>
          <img
            src={rate}
            className="mobileImage"
            alt="rating the app and givind feedback screen"
          />
        </div>
        <div className="colorText--gray">
          <p>
            We rely on the third party plugins to get feedback, and this is the
            case for most of the apps. However, they are usually built with
            boilerplate UI elements. We have simplified the look and the feel
            and made it much easier for users to give feedback.
          </p>
        </div>

        <div className="colorText">
          <p>
            Currently working on new version of the app
          </p>
        </div>
      </div>

      <ProjectPageButtons props={props.routeProps} />
      <ProjectStyles />
    </ProjectWrapper>
  );
}





const extra = () => {
  return (
    <div>
    <div className="multiColumns">
          <h4>Modifiers</h4>
          <div>
            <img
              src={modifier1}
              className="mobileImage blur"
              alt="customizing the menu item 1"
            />
            <img
              src={modifier2}
              className="mobileImage blur"
              alt="customizing the menu item 2"
            />
            <img
              src={modifier3}
              className="mobileImage blur"
              alt="customizing the menu item 3"
            />
          </div>
        </div>
        <div className="colorText--gray">
          <p>
            We have worked on this feature for months. Since the menu items
            change daily mostly, the modifiers had to compensate for every
            possible outcome. This was tricky because making the user experience
            the same for all, I had to look at the normal UI patterns and test
            them in our users' daily bases usage.
          </p>
          <p>
            Still under development.
          </p>
        </div>
        </div>
  )
}



