import React from "react";
import ProjectWrapper from "../../components/projectItems/ProjectWrapper";
import ProjectHeader from "../../components/projectItems/ProjectHeader";
import ProjectPageButtons from "../../components/projectItems/ProjectPageButtons";

import styled from "styled-components";
import ProjectStyles from "../../styles/Project";
import { Media } from "../../styles/Media";

import { projects } from "../../data/data";

import ImageContainer from "../../components/ui/ImageContainer";
import Branding from "../../components/projectItems/Branding";

import cart_mobile from "../../assets/img/cottonist/cottonist_mobile_1.jpg";
import search_mobile from "../../assets/img/cottonist/cottonist_mobile_2.jpg";
import footer_mobile from "../../assets/img/cottonist/cottonist_mobile_3.jpg";
import product_description_mobile from "../../assets/img/cottonist/cottonist_mobile_4.jpg";
import product_image_mobile from "../../assets/img/cottonist/cottonist_mobile_5.jpg";
import product_listing_mobile from "../../assets/img/cottonist/cottonist_mobile_6.jpg";
import category_mobile from "../../assets/img/cottonist/cottonist_mobile_7.jpg";
import instagram from "../../assets/img/cottonist/cottonist_mobile_8.jpg";
import text_mobile from "../../assets/img/cottonist/cottonist_mobile_9.jpg";
import email from "../../assets/img/cottonist/cottonist_mobile_10.jpg";
import enterence_mobile from "../../assets/img/cottonist/cottonist_mobile_11.jpg";
import cart from "../../assets/img/cottonist/cottonist_web_1.jpg";
import cart_empty from "../../assets/img/cottonist/cottonist_web_2.jpg";
import footer from "../../assets/img/cottonist/cottonist_web_9.jpg";
import product_description from "../../assets/img/cottonist/cottonist_web_4.jpg";
import product_image from "../../assets/img/cottonist/cottonist_web_3.jpg";
import product_listing from "../../assets/img/cottonist/cottonist_web_7.jpg";
import category from "../../assets/img/cottonist/cottonist_web_5.jpg";
import category_start from "../../assets/img/cottonist/cottonist_web_8.jpg";
import text from "../../assets/img/cottonist/cottonist_web_6.jpg";
import enterence from "../../assets/img/cottonist/cottonist_web_10.jpg";
import menu from "../../assets/img/cottonist/cottonist_web_11.jpg";
import search from "../../assets/img/cottonist/cottonist_web_12.jpg";

export default function Cottonist(props) {
  const data = projects.filter(item => item.name === "Cottonist");
  const project = data[0];
  return (
    <>
      <ProjectWrapper padding>
        <ProjectHeader info={project} />

        <Branding info={project} />

        <img src={cart} className="desktopImage" />

        <img src={footer} className="desktopImage60" />

        <ProjectPageButtons props={props.routeProps} />
      </ProjectWrapper>
      <ProjectStyles />
    </>
  );
}
