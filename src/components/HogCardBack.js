import React from 'react';
import { Card } from 'semantic-ui-react'

const HogCardBack = (props) => {
  const { specialty, greased, weight } = props.hog

  return(
    <Card onClick={(e) => props.handleClick(e)}>
      <Card.Content>
        <Card.Header>{specialty}</Card.Header>
        <Card.Header>{greased}</Card.Header>
        <Card.Header>{weight}</Card.Header>
        <Card.Header>{props.hog['highest medal achieved']}</Card.Header>
      </Card.Content>
    </Card>
  )
}
export default HogCardBack;
