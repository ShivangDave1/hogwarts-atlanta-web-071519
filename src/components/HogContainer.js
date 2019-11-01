import React from 'react';
import { Card } from 'semantic-ui-react'
import HogCard from './HogCard'

const HogContainer = (props) => {

  return(
    <Card.Group>
        { props.hogs.map(hog => <HogCard hog={hog} />) }
    </Card.Group>
  )
}
export default HogContainer;
