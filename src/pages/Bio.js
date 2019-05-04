import React from "react";
import ReactModal from "react-modal";
import styled from "styled-components";
import Listing from "../components/Listing";
import Cross from "../assets/svg/Cross.svg";
import Svg from "../components/ui/Svg";
import { Media } from '../styles/Media'

const StyledReactModal = styled(ReactModal)`
  right: 0;
  border-radius: 0;
  width: 100vw;
  display: grid;
  position: absolute;
  background: ${props => props.theme.color.white};
  box-shadow: -2px 0px 30px rgba(0, 0, 0, 0.15), 3px 5px 10px rgba(0, 0, 0, 0.2);
  padding: 7.5vw;
  z-index: 10000;
  box-sizing: border-box;
  min-height: 100vh;
  outline: none;

  @media ${Media.mobileL} {
    width: 40vw;
    min-width: 425px;
  }
`;

const Content = styled.div`
  display: grid;
  align-content: start;
  grid-gap: 40px;
  div {
    display: grid;
    grid-gap: 16px;
  }
`;

const Title = styled.div`
  grid-auto-flow: column;
  justify-content: space-between;
  align-items: center;
  img {
    height: 1.25em;
    width: 1.25em;
  }
`;

export default function Bio(props) {
  const experiences = [...props.data.experiences];

  const education = [...props.data.education];

  return (
    <StyledReactModal
      isOpen={props.showModal}
      contentLabel="Bora Alap Biography"
      onRequestClose={props.toggleBioModal}
      aria={{
        labelledby: "Bora Alap Bio",
        describedby:
          "My name is Bora Alap. I’m located in Toronto, and I work as a UI/UX designer. My Job description includes creating wireframes, prototypes, content strategy, interactions, animations and design  of native apps and websites that work on. Having coding background allows me to see from developers’ eyes; also, working as a UX person on many projects, lets me create usable UI elements and Design Systems for companies."
      }}
      ariaHideApp={false}
      scrollable={true}
    >
      <Content>
        <div>
          <Title>
            <h3>About</h3>

            <Svg
              src={Cross}
              alt="close button"
              onclick={props.toggleBioModal}
            />
          </Title>
          <p>
            My name is <strong>Bora Alap</strong>. I’m located in{" "}
            <strong>Toronto</strong>, and I work as a{" "}
            <strong>Senior Product Designer</strong>. My Job description
            includes creating{" "}
            <strong>
              wireframes, prototypes, content strategy, interactions, animations
            </strong>{" "}
            and <strong>design</strong> of native apps and websites that work
            on. Having coding background allows me to see from developers’ eyes;
            also, working as a UX person on many projects, lets me create usable
            UI elements and Design Systems for companies.
          </p>
        </div>
        <div>
          <h4>Experiences</h4>
          <Listing list={experiences} />
        </div>
        <div>
          <h4>Educations</h4>
          <Listing list={education} />
        </div>
      </Content>
    </StyledReactModal>
  );
}
