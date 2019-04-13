import React from 'react'
import Sidebar from "./global/Sidebar";

export default function ListView(props) {
  return (
    <div>
    <Sidebar
    location={props.match.path}
      />
      
    </div>
  )
}
