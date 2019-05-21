import React from "react";
import ProjectWrapper from "../../components/projectItems/ProjectWrapper";
import ProjectPageButtons from "../../components/projectItems/ProjectPageButtons";
import ProjectHeader from "../../components/projectItems/ProjectHeader";

import ProjectStyles from "../../styles/Project";
import Branding from "../../components/projectItems/Branding";
import Button from "../../components/ui/Button";

import { projects } from "../../data/data";

import enterence from "../../assets/img/ekar/enterence3.jpg";
import navigation from "../../assets/img/ekar/navigation.jpg";
import navigation_pre from "../../assets/img/ekar/navigation_pre.jpg";
import on_boarding1 from "../../assets/img/ekar/on_boarding1.jpg";
import on_boarding2 from "../../assets/img/ekar/on_boarding2.jpg";
import on_boarding3 from "../../assets/img/ekar/on_boarding3.jpg";
import on_boarding4 from "../../assets/img/ekar/on_boarding4.jpg";
import questions1 from "../../assets/img/ekar/questions1.jpg";
import questions2 from "../../assets/img/ekar/questions2.jpg";
import questions3 from "../../assets/img/ekar/questions3.jpg";
import registration2 from "../../assets/img/ekar/registration2.jpg";
import registration3 from "../../assets/img/ekar/registration3.jpg";
import registration4 from "../../assets/img/ekar/registration4.jpg";
import registration6 from "../../assets/img/ekar/registration6.jpg";
import registration7 from "../../assets/img/ekar/registration7.jpg";
import registration9 from "../../assets/img/ekar/registration9.jpg";
import registration11 from "../../assets/img/ekar/registration11.jpg";
import registration12 from "../../assets/img/ekar/registration12.jpg";
import select_car_2_1 from "../../assets/img/ekar/select_car_2_1.jpg";
import select_car_2_2 from "../../assets/img/ekar/select_car_2_2.jpg";
import select_car_2_3 from "../../assets/img/ekar/select_car_2_3.jpg";
import update_your_trip0 from "../../assets/img/ekar/update_your_trip0.jpg";
import update_your_trip1 from "../../assets/img/ekar/update_your_trip1.jpg";
import update_your_trip2 from "../../assets/img/ekar/update_your_trip2.jpg";
import wireframes from "../../assets/img/ekar/wireframes.jpg";

import homepage from "../../assets/img/ekar/homepage.jpg";

export default function Ekar(props) {
  const data = projects.filter(item => item.name === "Ekar");
  const project = data[0];
  return (
    <>
      <ProjectWrapper padding>
        <ProjectHeader info={project} />

        <Branding info={project} />

        <div className="container">
          <div>
            <h4>Wireframes</h4>
            <img
              src={wireframes}
              className="desktopImage"
              alt="Splash Screen"
            />
          </div>

          <div className="colorText--gray">
            <p>
              I have started the project by creating the user flow and included
              wireframes to show the client how the user will interact with the
              app. After a couple of iterations, we have finalized the flow and
              start working on the design.
            </p>
          </div>
          <div>
            <h4>Language Selection Screen</h4>
            <img src={enterence} className="mobileImage" alt="Splash Screen" />
          </div>

          <div className="colorText--gray">
            <p>
              One of the biggest challenges I faced was on this project was
              thinking about the Arabic language. I have done some research on
              user experience for the Arabic language. Since it is written from
              right to left, it was hard to come up with a really flexible
              design.
            </p>
          </div>

          <div className="multiColumns">
            <h4>Navigation</h4>
            <div>
              <img src={navigation} className="mobileImage" alt="Navigation" />
              <img
                src={navigation_pre}
                className="mobileImage"
                alt="Navigation"
              />
            </div>
          </div>

          <div className="multiColumns">
            <h4>Onboarding</h4>
            <div>
              <img
                src={on_boarding1}
                className="mobileImage"
                alt="Onboarding Illustrations"
              />
              <img
                src={on_boarding2}
                className="mobileImage"
                alt="Onboarding Illustrations"
              />
              <img
                src={on_boarding3}
                className="mobileImage"
                alt="Onboarding Illustrations"
              />
              <img
                src={on_boarding4}
                className="mobileImage"
                alt="Onboarding Illustrations"
              />
            </div>
          </div>

          <div className="colorText--gray">
            <p>
              I have created special illustrations for the brand and onboarding
              was one of the most fun to work on. Illustrations made the
              instructions more fun and enjoyable.
            </p>
          </div>

          <div className="multiColumns">
            <h4>Registration</h4>
            <div>
              <img
                src={registration2}
                className="mobileImage"
                alt="registration screens"
              />
              <img
                src={registration3}
                className="mobileImage"
                alt="registration screens"
              />
              <img
                src={registration4}
                className="mobileImage"
                alt="registration screens"
              />

              <img
                src={registration6}
                className="mobileImage"
                alt="registration screens"
              />
              <img
                src={registration7}
                className="mobileImage"
                alt="registration screens"
              />

              <img
                src={registration9}
                className="mobileImage"
                alt="registration screens"
              />

              <img
                src={registration11}
                className="mobileImage"
                alt="registration screens"
              />
              <img
                src={registration12}
                className="mobileImage"
                alt="registration screens"
              />
            </div>
          </div>

          <div className="multiColumns">
            <h4>Selecting a Car</h4>
            <div>
              <img
                src={select_car_2_1}
                className="mobileImage"
                alt="selecting a car"
              />
              <img
                src={select_car_2_2}
                className="mobileImage"
                alt="selecting a car"
              />
              <img
                src={select_car_2_3}
                className="mobileImage"
                alt="selecting a car"
              />
            </div>
          </div>

          <div className="colorText--gray">
            <p>
            The business provides varies of different options for booking. We have worked on a couple of options to see which one would be more effective. In the end, the result was having a swipeable area to let users select how long would like to book the car for.
            </p>
          </div>

          <div className="multiColumns">
            <h4>Questionare</h4>
            <div>
              <img
                src={questions1}
                className="mobileImage"
                alt="before starting a trip questionares"
              />
              <img
                src={questions2}
                className="mobileImage"
                alt="before starting a trip questionares"
              />
              <img
                src={questions3}
                className="mobileImage"
                alt="before starting a trip questionares"
              />
            </div>
          </div>

          <div className="colorText--gray">
            <p>
              Before the user started the trip, they had to inspect the car and
              point out the unknown damages. Since users usually in a rush don't
              care about these kind of things, it had to be really simple and
              interactive to get their attention. The user can simply select the
              side of the car, snap the photo and maybe include a sentence of
              detail then send it.
            </p>
          </div>

          

          <div className="multiColumns">
            <h4>Update Trip Timing</h4>
            <div>
              <img
                src={update_your_trip0}
                className="mobileImage"
                alt="Updating trip timing"
              />
              <img
                src={update_your_trip1}
                className="mobileImage"
                alt="Updating trip timing"
              />
              <img
                src={update_your_trip2}
                className="mobileImage"
                alt="Updating trip timing"
              />
            </div>
          </div>

          <div>
            <h4>Website for the App</h4>
            <img
              src={homepage}
              className="desktopImage"
              alt="ekar website"
            />
          </div>
          <div className="colorText twoColumn">
            <span>
              <p>
                I have created a one-page website layout for the application.
                However, since the service required to display too much
                information at once, tried to make as simple as possible with
                strong visual components.
              </p>
              <p>Images are placeholders, and taken from Unsplash.</p>
              <p>
                The current version is the website slightly different then what I
                have envisioned. Feel free to check it out.
              </p>
            </span>

            <a href={project.website} target="_blank" rel="noopener noreferrer">
              <Button>Visit the Website</Button>
            </a>
          </div>
        </div>
        <ProjectPageButtons props={props.routeProps} />
      </ProjectWrapper>
      <ProjectStyles />
    </>
  );
}
