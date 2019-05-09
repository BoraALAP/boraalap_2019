import React from 'react'
import { projects } from '../../data/data'

const Header = (props) => {

  const data = projects.filter(item => item.name === props.info)
  
  return (
    <div>
      <h2>{data[0].name}</h2>
      <ul>
        {data[0].projectAttributes.map(item => <li key={item}>{item}</li>
        )}
        
        
      </ul>
        
    </div>
  )
}

export default Header
