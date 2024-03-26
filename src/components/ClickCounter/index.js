import {Component} from 'react'

import './index.css'

class ClickCounter extends Component {
  state = {count: 0}

  onClick = () => {
    this.setState(prevState => {
      console.log(prevState.count)
      return {count: prevState.count + 1}
    })
  }

  render() {
    const {count} = this.state
    return (
      <div className="main-container">
        <div className="container">
          <h1 className="heading">
            The Button has been clicked
            <span className="count"> {count}</span> times
          </h1>
          <p className="description">Click the button to increase the count</p>
          <div>
            <button className="button" type="button" onClick={this.onClick}>
              Click Me
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default ClickCounter
