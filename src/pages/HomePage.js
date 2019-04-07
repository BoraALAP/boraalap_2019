import React, { useState } from "react";

import Landing from "./Landing";
import Sidebar from "../components/global/Sidebar";

export default function HomePage(props) {
  const [slides, setSlides] = useState([
    {
      imageSrc: "https://source.unsplash.com/random/1200x600",
      name: "Cottonist",
      platform: "Shopify Website",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis viverra neque sit amet pretium. Vivamus non turpis felis. Pellentesque nec felis vitae dui tristique maximus vitae eu est. Nunc efficitur sed turpis id condimentum. Morbi sodales interdum risus. Donec quam elit, tristique sit amet ligula vel, dictum bibendum magna. Integer in venenatis purus, in cursus libero. Integer metus dolor, lacinia non nunc sed, tincidunt ultrices eros.",
      link: "Cottonist"
    },
    {
      imageSrc: "https://source.unsplash.com/random/1200x600",
      name: "Ekar",
      platform: "UI / UX Design",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis viverra neque sit amet pretium. Vivamus non turpis felis. Pellentesque nec felis vitae dui tristique maximus vitae eu est. Nunc efficitur sed turpis id condimentum. Morbi sodales interdum risus. Donec quam elit, tristique sit amet ligula vel, dictum bibendum magna. Integer in venenatis purus, in cursus libero. Integer metus dolor, lacinia non nunc sed, tincidunt ultrices eros.",
      link: "Ekar"
    },
    {
      imageSrc: "https://source.unsplash.com/random/1200x600",
      name: "BonAPP",
      platform: "Redesign",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis viverra neque sit amet pretium. Vivamus non turpis felis. Pellentesque nec felis vitae dui tristique maximus vitae eu est. Nunc efficitur sed turpis id condimentum. Morbi sodales interdum risus. Donec quam elit, tristique sit amet ligula vel, dictum bibendum magna. Integer in venenatis purus, in cursus libero. Integer metus dolor, lacinia non nunc sed, tincidunt ultrices eros.",
      link: "BonAPP"
    }
  ]);

  const [slideNum, setSlideNum] = useState({
    activeNum: 0
  })

  const prevSlide = () => {
    setSlideNum({activeNum: (slideNum.activeNum === 0 ? slides.length - 1  : slideNum.activeNum - 1 ) })
    
  }
  
  const nextSlide = () => {
    setSlideNum({activeNum: (slideNum.activeNum === slides.length - 1 ? 0 : slideNum.activeNum + 1 ) })
  }

  

  return (
    <div>
      <Sidebar location={props.match.path} projects={slides} data={slideNum} prevSlide={prevSlide} nextSlide={nextSlide}/>
      <div className="Content Homepage">
      {slides.map((item, i) => {
        return <Landing
        key={i}
        className={(slideNum.activeNum === i ? 'Active Landing' : 'Landing' )}
        imageSrc={item.imageSrc}
        name={item.name}
        platform={item.platform}
        description={item.description}
        link={item.link}
      />
      })}
      </div>
    </div>
  );
}
