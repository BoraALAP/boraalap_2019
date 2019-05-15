import React from "react";
import ProjectWrapper from "../../components/projectItems/ProjectWrapper";
import ProjectPageButtons from "../../components/projectItems/ProjectPageButtons";
import ProjectHeader from "../../components/projectItems/ProjectHeader";

import styled from "styled-components";
import ProjectStyles from "../../styles/Project";
import { Media } from "../../styles/Media";

import enterence from "../../assets/img/ekar/enterence3.jpg";
import invite_friend from "../../assets/img/ekar/invite_friend.jpg";
import navigation from "../../assets/img/ekar/navigation.jpg";
import on_boarding1 from "../../assets/img/ekar/on_boarding1.jpg";
import on_boarding2 from "../../assets/img/ekar/on_boarding2.jpg";
import on_boarding3 from "../../assets/img/ekar/on_boarding3.jpg";
import on_boarding4 from "../../assets/img/ekar/on_boarding4.jpg";
import questions1 from "../../assets/img/ekar/questions1.jpg";
import questions2 from "../../assets/img/ekar/questions2.jpg";
import questions3 from "../../assets/img/ekar/questions3.jpg";
import registration1 from "../../assets/img/ekar/registration1.jpg";
import registration2 from "../../assets/img/ekar/registration2.jpg";
import registration3 from "../../assets/img/ekar/registration3.jpg";
import registration4 from "../../assets/img/ekar/registration4.jpg";
import registration5 from "../../assets/img/ekar/registration5.jpg";
import registration6 from "../../assets/img/ekar/registration6.jpg";
import registration7 from "../../assets/img/ekar/registration7.jpg";
import registration8 from "../../assets/img/ekar/registration8.jpg";
import registration9 from "../../assets/img/ekar/registration9.jpg";
import registration10 from "../../assets/img/ekar/registration10.jpg";
import registration11 from "../../assets/img/ekar/registration11.jpg";
import registration12 from "../../assets/img/ekar/registration12.jpg";
import select_car_1_1 from "../../assets/img/ekar/select_car_1_1.jpg";
import select_car_1_2 from "../../assets/img/ekar/select_car_1_2.jpg";
import select_car_2_1 from "../../assets/img/ekar/select_car_2_1.jpg";
import select_car_2_2 from "../../assets/img/ekar/select_car_2_2.jpg";
import select_car_2_3 from "../../assets/img/ekar/select_car_2_3.jpg";
import time_selecter1 from "../../assets/img/ekar/time_selecter1.jpg";
import time_selecter2 from "../../assets/img/ekar/time_selecter2.jpg";
import update_your_trip1 from "../../assets/img/ekar/update_your_trip1.jpg";
import update_your_trip2 from "../../assets/img/ekar/update_your_trip2.jpg";

export default function Ekar(props) {
  return (
    <>
    <ProjectWrapper padding>
      <ProjectHeader info={"Ekar"}  />

      <ProjectPageButtons props={props.routeProps} />
    </ProjectWrapper>
    <ProjectStyles />
    </>
  );
}
