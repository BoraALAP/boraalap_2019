import React, { Component } from 'react'

import Landing from '../components/Landing'

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
        <Landing 
          imageSrc={this.state.project1.imageSrc} 
          name={this.state.project1.name}
          platform={this.state.project1.platform}
          description={this.state.project1.description}
          link={this.state.project1.link}
        />
      </div>
    )
  }
}
