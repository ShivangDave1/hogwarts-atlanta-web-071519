import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import hogs from '../porkers_data';
import HogContainer from './HogContainer';
import Filter from './Filter';

class App extends Component {

  state = {
    checked: false,
    filteredHogs: [...hogs]
  }

  handleSort = (e) => {
    if(e.target.value === 'Name'){

      const sortedHogs = [...this.state.filteredHogs].sort((hog1,hog2) => {
        if (hog1.name.toUpperCase() < hog2.name.toUpperCase()) {
          return -1;
        }
        if (hog1.name.toUpperCase() > hog2.name.toUpperCase()) {
          return 1;
        }
        // names must be equal
        return 0;
      })

      this.setState({ filteredHogs: sortedHogs})

    }else if(e.target.value === 'Weight'){

      const sortedHogs = [...this.state.filteredHogs].sort((a, b) => {
        return a.weight - b.weight;
      });

      this.setState({ filteredHogs: sortedHogs})
    }else{
      this.setState({ filteredHogs: [...hogs]})
    }
  }

  handleToggle = (e) => {

    const updatedList = e.target.checked
      ? [...hogs].filter((hog) => hog.greased === true )
        : [...hogs]

    this.setState({
      checked: !this.state.checked,
      filteredHogs: updatedList
    })
  }

  render() {
    return (
      <div className="App">
          <Nav />
          <br/>
          <Filter
            checked={this.state.checked}
              handleToggle={this.handleToggle}
                handleSort={this.handleSort} />
          <br/>
          <HogContainer hogs={this.state.filteredHogs} />
      </div>
    )
  }
}

export default App;
