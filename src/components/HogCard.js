import React from 'react';
import HogCardFront from './HogCardFront'
import HogCardBack from './HogCardBack'

class HogCard extends React.Component {

  state = {
    showDetails: true
  }

  handleClick = (e) => {
    this.setState({ showDetails: !this.state.showDetails})
  }

  render(){
    return(
      <div>
        {
          this.state.showDetails
           ? <HogCardFront hog={this.props.hog} handleClick={this.handleClick} />
            : <HogCardBack hog={this.props.hog} handleClick={this.handleClick} />
        }
      </div>
    )
  }
}
export default HogCard;
