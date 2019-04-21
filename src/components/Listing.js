import React from 'react'
import styled from 'styled-components'

const Li = styled.li`
      list-style-type: square;
      `


const Ul = styled.ul`
    padding-left: 1em;
    margin: 0;
    display: grid;
    grid-gap: 16px;
  `

const P  = styled.p`
  color: ${props => props.theme.color.gray};
`


const Listing = (props) => {
  return (
    <div>
        <Ul>
            {props.list.map((entry, i) => (
                <Li key={i}>
                  <h6>{entry.title}</h6>
                  <P>{entry.note}</P>
                </Li>
            ))}
        </Ul>
    </div>
  )
}

export default Listing
