import React, { Component } from 'react'
import Sidebar from '../components/global/Sidebar';

import cottonistThumbnail from '../assets/img/projects/cottonist/thumbnail.jpg'

export default class HomePage extends Component {
  constructor() {
    super();
    this.state= {
      project1: {
        imageSrc: cottonistThumbnail,
        name: "Cottonist",
        platform: 'Shopify Website',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis viverra neque sit amet pretium. Vivamus non turpis felis. Pellentesque nec felis vitae dui tristique maximus vitae eu est. Nunc efficitur sed turpis id condimentum. Morbi sodales interdum risus. Donec quam elit, tristique sit amet ligula vel, dictum bibendum magna. Integer in venenatis purus, in cursus libero. Integer metus dolor, lacinia non nunc sed, tincidunt ultrices eros.',
        link: 'cottonist'
      }
    }
  }

  render() {
    return (
      <div>
        <Sidebar sideBar={true}/>
      </div>
    )
  }
}
