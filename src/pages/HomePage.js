import React, { useState } from 'react'

import Landing from './Landing'

import cottonistThumbnail from '../assets/img/projects/cottonist/thumbnail.jpg'


export default function HomePage(props) {
  const [state, setState]= useState({
    project1: {
      imageSrc: cottonistThumbnail,
      name: "Cottonist",
      platform: 'Shopify Website',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis viverra neque sit amet pretium. Vivamus non turpis felis. Pellentesque nec felis vitae dui tristique maximus vitae eu est. Nunc efficitur sed turpis id condimentum. Morbi sodales interdum risus. Donec quam elit, tristique sit amet ligula vel, dictum bibendum magna. Integer in venenatis purus, in cursus libero. Integer metus dolor, lacinia non nunc sed, tincidunt ultrices eros.',
      link: 'cottonist'
    }
  })

  return (
    <div>
      <Landing 
        imageSrc={state.project1.imageSrc} 
        name={state.project1.name}
        platform={state.project1.platform}
        description={state.project1.description}
        link={state.project1.link}
        changeSideBar={props.changeSideBar}
      />
    </div>
  )
}
