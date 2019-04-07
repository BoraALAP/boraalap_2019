import React from 'react'
import Sidebar from "../../components/global/Sidebar";

export default function BonAPP(props) {
  return (
    <div>
    <Sidebar location={props.match.path}/>
      
    </div>
  )
}
