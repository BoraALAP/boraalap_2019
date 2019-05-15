import React from "react";
import ProjectWrapper from "../../components/projectItems/ProjectWrapper";
import ProjectHeader from "../../components/projectItems/ProjectHeader";
import ProjectPageButtons from "../../components/projectItems/ProjectPageButtons";

import styled from "styled-components";
import ProjectStyles from "../../styles/Project";
import { Media } from "../../styles/Media";

import { projects } from "../../data/data";

import ImageContainer from "../../components/ui/ImageContainer";

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
import logo1 from "../../assets/img/cottonist/logo1.svg";
import logo2 from "../../assets/img/cottonist/logo2.svg";
import logo3 from "../../assets/img/cottonist/logo3.svg";
import logo4 from "../../assets/img/cottonist/logo4.svg";
import Branding from "../../components/projectItems/Branding";

export default function Cottonist(props) {
  return (
    <>
      <ProjectWrapper padding>
        <ProjectHeader info={"Cottonist"} />

        <Branding
          primarycolor={"#03131B"}
          greycolor1={"#23242D"}
          greycolor2={"#999AAA"}
          greycolor3={"#FBFCFF"}
          colortext={`Simplicity is the key for this brand we have focus on using monocromic look across the whole website.`}
          logo1={logo2}
          logo2={logo3}
          logotext={`Simplicity is the key for this brand we have focus on using monocromic look across the whole website.`}
        />

        <img src={cart} className="desktopImage" />

        <img src={footer} className="desktopImage60" />

        <ProjectPageButtons props={props.routeProps} />
      </ProjectWrapper>
      <ProjectStyles />
    </>
  );
}
