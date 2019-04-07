import React from 'react'

import Sidebar from "../../components/global/Sidebar";

export default function Ekar(props) {
    return (
      <div>
      <Sidebar location={props.match.path}/>
        <h2>Ekar</h2>
      </div>
    )
  }

