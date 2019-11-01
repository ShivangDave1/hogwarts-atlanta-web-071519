import React from 'react';
import { Card, Image } from 'semantic-ui-react'

const HogCardFront = (props) => {

  const slug = props.hog.name.toLowerCase().split(" ").join("_")

  return(
    <Card onClick={(e) => props.handleClick(e)}>
      <Image src={require(`../hog-imgs/${slug}.jpg`)} wrapped ui={false} />
      <Card.Content>
        <Card.Header>{props.hog.name}</Card.Header>
      </Card.Content>
    </Card>
  )
}
export default HogCardFront;
