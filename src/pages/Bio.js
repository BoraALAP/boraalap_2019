import React from 'react';
import ReactModal from "react-modal";

export default function Bio(props) {
  return (
    <div>
      <ReactModal 
      isOpen={props.showModal}
      contentLabel="Bora Alap Biography"
      onRequestClose={props.toggleBioModal}
      aria={{
        labelledby: "Bora Alap Bio",
        describedby: "My name is Bora Alap. I’m located in Toronto, and I work as a UI/UX designer. My Job description includes creating wireframes, prototypes, content strategy, interactions, animations and design the websites that work on. Having coding background allows me to see from developers’ eyes; also, working as a UX person on many projects, lets me create usable UI elements and Design Systems for companies."
      }}
      ariaHideApp={false}>
        <div>
        Description
        </div>
    </ReactModal>
    </div>
  )
}
